import React, { ChangeEvent, FC, useRef, useState } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import { IconUpload, IconFile, IconPlus } from '@pui/icons'
import { Modal } from '../modal/modal'
import { Button } from '../index'
import UploadList from './uploadList/index'
import Dragger from './dragger'
import './upload.scss'

import {
  UploadFile,
  UploadLocale,
  UploadListType,
  ShowUploadListInterface
} from './interface'

export interface UploadProps {
  /** 上传的地址 */
  action: string
  /** image Upload数量 */
  count?: number
  /** 默认已经上传的文件列表 */
  defaultFileList?: UploadFile[]
  /** 设置上传的请求头部 */
  headers?: { [key: string]: any }
  /** 发到后台的文件参数名 */
  name?: string
  /** 设置上传的请求头部 */
  locale?: UploadLocale
  /** 上传所需额外参数 */
  data?: { [key: string]: any }
  /** 接受上传的文件类型 */
  accept?: string
  /** 是否支持多选文件 */
  multiple?: boolean
  /** 提示语 */
  tip?: Node | string
  /** 是否可拖拽上传 */
  drag?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示删除图标 */
  showRemoveIcon?: boolean
  /** 是否显示下载图标 */
  showDownloadIcon?: boolean
  /** 是否显示查看图标 */
  showPreviewIcon?: boolean
  /** 上传文件的显示模式 */
  listType?: UploadListType
  /** 类名 */
  className?: string
  /** 是否是图片url */
  isImageUrl?: (file: UploadFile) => boolean
  /** 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传 */
  beforeUpload?: (file: File) => boolean | Promise<File>
  /** 上传文件过程中的实时回调 */
  onProgress?: (percentage: number, file: File) => void
  /** 上传文件成功时的回调 */
  onSuccess?: (data: any, file: UploadFile) => void
  /** 上传文件出错时的回调 */
  onError?: (err: any, file: File) => void
  /** 上传文件改变时的回调 */
  onChange?: (file: UploadFile) => void
  /** 点击移除文件时的回调 */
  onRemove?: (file: UploadFile) => void
  /** 上传文件之前的钩子 */
  onPreview?: (file: UploadFile) => void
}

const Upload: FC<UploadProps> = props => {
  const {
    action,
    count,
    tip,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    onPreview,
    disabled,
    name,
    locale,
    headers,
    data,
    accept,
    multiple,
    drag,
    children,
    listType,
    className,
    isImageUrl
  } = props

  const fileInput = useRef<HTMLInputElement>(null)
  // 存储上传过的file
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewTitle, setPreviewTitle] = useState('')
  const [previewImage, setPreviewImage] = useState('')

  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj } // 如果遇到同一个uid的file，说明是要更新的这个file。比如在上传的onUploadProgress中。
        } else {
          return file // 否则是以前的的file，直接返回
        }
      })
    })
  }

  const handleClick = () => {
    if (fileInput.current) fileInput.current.click()
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    uploadFiles(files)
    if (fileInput.current) fileInput.current.value = ''
  }
  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (accept) {
        const acceptList = accept.replace(/\s/g, '').split(',')
        const name = file.name.split('.')
        const type = name[name.length - 1]
        if (!(acceptList.includes(type) || acceptList.includes(file.type)))
          return
      }

      if (!beforeUpload) {
        postFile(file)
      } else {
        const result = beforeUpload(file)
        if (result) {
          if (result instanceof Promise) {
            result.then(processFile => {
              postFile(processFile)
            })
          } else {
            postFile(file)
          }
        }
      }
    })
  }
  const handleRemove = (file: UploadFile) => {
    setFileList(prevFile => prevFile.filter(item => item.uid !== file.uid))
    onRemove && onRemove(file)
  }
  const postFile = (file: File) => {
    let baseFile: UploadFile = {
      uid: Math.random().toString().replace(/0./, ''),
      status: 'uploading',
      name: file.name,
      size: file.size,
      percent: 0,
      originFileObj: file
    }
    setFileList(prevList => {
      return [...prevList, baseFile]
    })
    const formData = new FormData()
    formData.append(name || 'file', file)

    data &&
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    const ss = axios.CancelToken.source();
    baseFile.source = ss;
    axios
      .post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...headers
        },
        onUploadProgress: e => {
          const percentage = Math.round((e.loaded * 100) / e.total) || 0
          baseFile = { ...baseFile, status: 'uploading', percent: percentage }
          updateFileList(baseFile, { status: 'uploading', percent: percentage })
          onProgress && onProgress(percentage, file)
        },
        cancelToken: ss.token
      })
      .then(res => {
        updateFileList(baseFile, { status: 'success', response: res.data })
        onSuccess &&
          onSuccess(res.data, {
            ...baseFile,
            status: 'success',
            response: res.data,
            percent: 100
          })
        onChange &&
          onChange({
            ...baseFile,
            status: 'success',
            response: res.data,
            percent: 100
          })
      })
      .catch(err => {
        updateFileList(baseFile, { status: 'error', response: err })
        onError && onError(err, file)
        onChange && onChange({ ...baseFile, status: 'error', response: err })
      })
  }

  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  const handlePreview = async (file: UploadFile) => {
    setPreviewVisible(true)

    if (!file.url && !file.preview && file.originFileObj) {
      file.preview = (await getBase64(file.originFileObj)) as string
      setPreviewImage(file.preview)
    } else {
      file.url && setPreviewImage(file.url)
      file.preview && setPreviewImage(file.preview)
    }
    let urlName = ''
    if (file.url) {
      urlName = file.url.substring(file.url.lastIndexOf('/') + 1)
    }
    setPreviewTitle(file.name || urlName)
    onPreview && onPreview(file)
  }
  const handleCancel = () => setPreviewVisible(false)
  const { showRemoveIcon, showPreviewIcon, showDownloadIcon, removeIcon } =
    {} as ShowUploadListInterface

  const prefixCls = 'pui-upload'

  const uploadButton = (
    <div
      className={classnames(`${prefixCls}-container`, {
        [`${prefixCls}-drag-container`]: drag
      })}
    >
      <div
        onClick={handleClick}
        className={classnames(`${prefixCls}-field`, {
          [`${prefixCls}-drag-field`]: drag,
          [`${prefixCls}-disabled`]: disabled
        })}
      >
        {drag ? (
          <Dragger onFile={files => uploadFiles(files)} disabled={disabled}>
            {children || (
              <div className="pui-upload-btn pui-upload-drag-btn">
                <IconFile /> <br />
                点击或拖拽上传
              </div>
            )}
          </Dragger>
        ) : listType === 'picture-card' ? (
          (count as number) > fileList.length && (
            <div className="pui-upload-btn-picture-card">
              {children || (
                <span>
                  <IconPlus />
                </span>
              )}
            </div>
          )
        ) : (
          <div className="pui-upload-btn">
            {children || (
              <Button type="default" icon={IconUpload}>
                添加文件
              </Button>
            )}
          </div>
        )}
      </div>

      {tip && <div className="pui-upload-tip">{tip}</div>}
      <input
        type="file"
        className="pui-file-input"
        style={{ display: 'none' }}
        ref={fileInput}
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        disabled={disabled}
      />
    </div>
  )

  const renderUploadList = (button?: React.ReactNode) => (
    <>
      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
        onPreview={handlePreview}
        listType={listType}
        showRemoveIcon={!disabled && showRemoveIcon}
        showPreviewIcon={showPreviewIcon}
        showDownloadIcon={showDownloadIcon}
        removeIcon={removeIcon}
        isImageUrl={isImageUrl}
        // downloadIcon={downloadIcon}
        appendAction={button}
        locale={locale || {}}
      />
      <Modal
        visible={previewVisible}
        title={previewTitle}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  )

  if (listType === 'picture-card') {
    return (
      <div
        className={classnames(prefixCls, className, {
          [`${prefixCls}-${listType}`]: listType
        })}
      >
        {renderUploadList(uploadButton)}
      </div>
    )
  }

  return (
    <div
      className={classnames(prefixCls, className, {
        [`${prefixCls}-${listType}`]: listType
      })}
    >
      {uploadButton}
      {renderUploadList()}
    </div>
  )
}

const defaultLocale = {
  uploading: 'Uploading...',
  removeFile: 'Remove file',
  uploadError: 'Upload error',
  previewFile: 'Preview file',
  downloadFile: 'Download file'
}

Upload.defaultProps = {
  listType: 'text' as UploadListType,
  showRemoveIcon: true,
  showDownloadIcon: false,
  showPreviewIcon: true,
  locale: defaultLocale,
  count: 1,
  disabled: false,
}
export { Upload }
