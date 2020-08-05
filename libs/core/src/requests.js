import axios from 'axios'
import { message } from 'antd'
import {$USER_TOKEN} from './constants'

const localStorage = window.localStorage;

const axiosInstance = axios.create({
  // baseURL: baseUrl,
  timeout: 5000,
  withCredentials: true,
  responseType: 'json'
})

// 在发送请求之前做些什么
axiosInstance.interceptors.request.use(
  function(config) {
    let headers = Object.assign({}, config.headers, {
      Authorization: localStorage.getItem($USER_TOKEN),
    })
    return Object.assign({}, config, { headers })
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 对响应数据做点什么
axiosInstance.interceptors.response.use(
  function(response) {
    let accessToken = response.headers['x-access-token']	// === refresh token in SS
    let tokenType = response.headers['x-token-type']
    let token = localStorage.getItem($USER_TOKEN)
    if (accessToken && accessToken !== token) {
      localStorage.setItem($USER_TOKEN, `${titleCase(tokenType)} ${accessToken}`)
    }
    return response
  },
  function(error) {
    return Promise.reject(error)
  },
)

export const toQueryParam = queryParams => {
  const params = new URLSearchParams()
  Object.keys(queryParams).forEach(key => {
    if (queryParams[key]) {
      params.append(key, queryParams[key])
    }
  })
  return params
}

export const request = {
  /**
   * @param: url
   * @param: method: get | post | put | delete | head | options | patch
   * @param: headers
   * @param: queryParams
   * ...: responseType/
   */
  request: argu => {
    let config = {}
    const { url, method, queryParams, data, ...rest } = argu
    if (!argu.url) {
      throw new Error('No request url')
    } else {
      config.url = url
    }
    if (argu.method) {
      config.method = method
    }
    if (queryParams) {
      config.params = toQueryParam(queryParams)
    }
    if (data) {
      config.data = data
    }
    config = Object.assign({}, config, { ...rest })

    return axiosInstance
      .request(config)
      .then(res => {
        return Promise.resolve(rest.top? res: res.data)
      })
      .catch(err => {
        if (err.response) {
          if (err.response.data && err.response.data.code) {
            if (err.response.data.code === 401) {
              localStorage.clear()
              window.sessionStorage.clear()
              message.error('token失效，请重新登录') //先暂时做个提示，方便清楚token已失效
            } else {
              message.error(err.response.data.message) // TBD
            }
          } else {
            message.error(err.response.statusText)
          }
        } else {
          message.error('请求超时，请稍后再试')
        }
        return Promise.reject(err)
      })
  },

  get: (url, queryParams = {}, config = {}) => {
    return request.request({
      url: url,
      queryParams: queryParams,
      ...config,
    })
  },

  post: (url, data = {}, config = {}, queryParams = {}) => {
    return request.request({
      url: url,
      method: 'post',
      queryParams: queryParams,
      data: data,
      ...config,
    })
  },

  put: (url, data, config = {}) => {
    return request.request({
      url: url,
      method: 'put',
      data: data,
      ...config,
    })
  },

  del: (url, data, config = {}) => {
    return request.request({
      url: url,
      method: 'delete',
      data: data,
      ...config,
    })
  },

  // Be careful to use this function
  changeGlobalAxiosInstance: params => {
    Object.keys(params).forEach(element => {
      axiosInstance.defaults[element] = params[element]
    })
  },
}

