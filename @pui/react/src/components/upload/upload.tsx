import React, { ChangeEvent, ReactNode, useRef, useState } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import { IconUpload, IconFile, IconPlus } from '@pui/icons'
import { Modal } from '../modal/modal'
import { Button, Message } from '../index'
import { ButtonProps } from '../button/button'
import UploadList from './uploadList/index'
import Dragger from './dragger'
import { FormItem, FormItemProps } from '../form/form-item'

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
  /**
   * （已弃用）最大文件上传个数数量，默认值 1
   * @deprecated
   */
  count?: number
  /** 最大文件上传个数数量，默认不限制 */
  maxCount?: number
  /** 超出上传文件最大数（maxCount）的提示，传空字符串时隐藏Massage提示，maxCount为1时不提示直接上传覆盖 */
  exceededMaxCountMsg?: string
  /** 超出上传文件最大数（maxCount）的回调 */
  onExceededMaxCount?: (maxCount: number, totalCount: number) => void
  /** 默认已经上传的文件列表 */
  defaultFileList?: UploadFile[]
  /** 已经上传的文件列表（受控） */
  fileList?: UploadFile[]
  /** 设置上传的请求头部 */
  headers?: { [key: string]: any }
  /** 发到后台的文件参数名 */
  uploadName?: string
  /** 设置上传的请求头部 */
  locale?: UploadLocale
  /** 上传所需额外参数 */
  data?: { [key: string]: any }
  /** 用于配置默认的上传按钮属性，如有children，则覆盖默认按钮。详见Button组件ButtonProps */
  btnProps?: ButtonProps
  /** 接受上传的文件类型 */
  accept?: string
  /** 是否支持多选文件 */
  multiple?: boolean
  /** 提示语 */
  tip?: ReactNode
  /** 是否可拖拽上传 */
  drag?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 上传文件的显示模式 */
  listType?: UploadListType
  /** 类名 */
  className?: string
  /** 是否展示被阻止上传的图片（beforeUpload返回false下生效） */
  listIgnore?: boolean
  /** 是否展示文件列表, 可设为一个对象，用于单独设定 showPreviewIcon, showRemoveIcon 和 removeIcon */
  showUploadList?: boolean | ShowUploadListInterface
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
  onChange?: (file: UploadFile, list: UploadFile[]) => void
  /** 上传文件数据对应转换 */
  formDataMapping?: (list: UploadFile[]) => any
  /** 上传文件数据回调 */
  onValueChange?: (value: any) => void
  /** 点击移除文件时的回调 */
  onRemove?: (file: UploadFile) => void
  /** 上传文件之前的钩子 */
  onPreview?: (file: UploadFile) => void
  /** 子元素 */
  children?: ReactNode
}

// 必须骗下storybook，让它能显示属性列表
// eslint-disable-next-line import/no-mutable-exports
let Upload = (props: UploadProps & FormItemProps) => {
  return <div>{JSON.stringify(props)}</div>
}

Upload = FormItem((props: UploadProps) => {
  const {
    action,
    count,
    maxCount,
    tip,
    defaultFileList,
    fileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    onPreview,
    onValueChange,
    formDataMapping,
    disabled,
    uploadName,
    locale,
    headers,
    data,
    btnProps,
    accept,
    multiple,
    drag,
    children,
    listType,
    className,
    listIgnore,
    isImageUrl,
    showUploadList,
    onExceededMaxCount,
    exceededMaxCountMsg
  } = props

  const fileInput = useRef<HTMLInputElement>(null)
  // 存储上传过的file
  const [mergedFileList, setMergedFileList] = useState<UploadFile[]>(
    fileList || defaultFileList || []
  )
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewTitle, setPreviewTitle] = useState('')
  const [previewImage, setPreviewImage] = useState('')
  const updateFileListRef = useRef<any>(null)

  React.useEffect(() => {
    ;(fileList || []).forEach((file, index) => {
      if (!file.uid && !Object.isFrozen(file)) {
        const random = Math.random().toString().replace(/0./, '')
        file.uid = `${random}_${index}`
      }
    })
    if (fileList) {
      // fileList存在则数据以fileList为源
      setMergedFileList(fileList || [])
    }
  }, [fileList])

  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setMergedFileList(prevList => {
      const newFileList = prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj } // 如果遇到同一个uid的file，说明是要更新的这个file。比如在上传的onUploadProgress中。
        } else {
          return file // 否则是以前的的file，直接返回
        }
      })
      if (updateObj.status !== 'uploading') {
        onChange && onChange({ ...updateFile, ...updateObj }, newFileList)
        if (formDataMapping) {
          try {
            const uploadValue = formDataMapping(newFileList)
            onValueChange && onValueChange(uploadValue)
          } catch (e) {
            console.error(e)
          }
        }
      }
      return newFileList
    })
  }

  updateFileListRef.current = updateFileList

  const handleClick = () => {
    if (fileInput.current) fileInput.current.click()
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    uploadFiles(files)
    if (fileInput.current) fileInput.current.value = ''
  }
  // 超出上传数量限制的提示
  const handleExceeded = (postLen: number) => {
    const totalCount = postLen + mergedFileList.length
    if (maxCount && totalCount > maxCount) {
      if (onExceededMaxCount) {
        onExceededMaxCount(maxCount, totalCount)
      }
      if (maxCount > 1) {
        exceededMaxCountMsg !== '' &&
          Message.warning(
            exceededMaxCountMsg ||
              `上传文件个数${totalCount}，超出最大值${maxCount}`
          )
      }
    }
  }
  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)
    // 如果限制上传个数为1个，那么覆盖之前的文件
    // 如果限制上传数量大于1，超过限制部分拒绝继续上传，由用户移除部分文件再继续上传
    const postFilesLen = postFiles.length
    if (maxCount === 1) {
      if (mergedFileList?.length) {
        mergedFileList.map(file => handleRemove(file, false))
      }
      postFiles.splice(1)
    } else if (
      maxCount &&
      maxCount > 1 &&
      mergedFileList.length + postFilesLen > maxCount
    ) {
      const canUploadLen = maxCount - mergedFileList.length
      postFiles.splice(canUploadLen)
    }
    handleExceeded(postFilesLen)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        postFile(file)
      } else {
        const result = beforeUpload(file)
        if (result instanceof Promise) {
          result.then(processFile => {
            postFile(processFile, true)
          })
        } else {
          postFile(file, result)
        }
      }
    })
  }

  /**
   * 删除文件
   * @param file 需要删除的文件
   * @param formEffect 删除后是否同步到form表单
   */
  const handleRemove = (file: UploadFile, formEffect: boolean = true) => {
    setMergedFileList(prevFile => {
      const newList = prevFile.filter(item => item.uid !== file.uid)
      onChange && onChange(file, newList)
      if (formDataMapping && formEffect) {
        const uploadValue = formDataMapping(newList)
        onValueChange && onValueChange(uploadValue)
      }
      return newList
    })
    onRemove && onRemove(file)
  }

  const postFile = (file: File, result: any = true) => {
    let baseFile: UploadFile = {
      uid: Math.random().toString().replace(/0./, ''),
      name: file.name,
      size: file.size,
      percent: 0,
      originFileObj: file
    }

    if (result === false && listIgnore === true) return // beforeUpload返回false并且listIgnore为true则不展示文件

    setMergedFileList(prevList => {
      const newList = [...prevList, baseFile]
      if (result === false) {
        // 如果beforeUpload返回false，
        onChange &&
          onChange(
            {
              ...baseFile,
              percent: 0
            },
            newList
          )
      }
      return newList
    })

    if (result === false) {
      return // beforeUpload返回false不上传
    }

    const formData = new FormData()
    formData.append(uploadName || 'file', file)

    data &&
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    const ss = axios.CancelToken.source()
    baseFile.source = ss
    axios
      .post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...headers
        },
        onUploadProgress: e => {
          const percentage = Math.round((e.loaded * 100) / e.total) || 0
          baseFile = { ...baseFile, status: 'uploading', percent: percentage }
          updateFileListRef.current(baseFile, {
            status: 'uploading',
            percent: percentage
          })
          onProgress && onProgress(percentage, file)
        },
        cancelToken: ss.token
      })
      .then(res => {
        updateFileListRef.current(baseFile, {
          status: 'success',
          response: res.data
        })
        onSuccess &&
          onSuccess(res.data, {
            ...baseFile,
            status: 'success',
            response: res.data,
            percent: 100
          })
      })
      .catch(err => {
        updateFileListRef.current(baseFile, { status: 'error', response: err })
        onError && onError(err, file)
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

  const prefixCls = 'pui-upload'
  const defaultAccept = listType === 'picture-card' ? 'image/*' : accept
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
          ((count || maxCount || Number.MAX_VALUE) as number) >
            mergedFileList.length && (
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
              <Button type="default" icon={IconUpload} {...btnProps}>
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
        accept={defaultAccept}
        multiple={multiple}
        onChange={handleFileChange}
        disabled={disabled}
      />
    </div>
  )

  const renderUploadList = (button?: React.ReactNode) => {
    if (showUploadList) {
      const {
        showRemoveIcon,
        showPreviewIcon,
        showDownloadIcon,
        removeIcon,
        downloadIcon
      } =
        typeof showUploadList === 'boolean'
          ? ({} as ShowUploadListInterface)
          : showUploadList
      return (
        <>
          <UploadList
            fileList={mergedFileList}
            onRemove={handleRemove}
            onPreview={handlePreview}
            listType={listType}
            showRemoveIcon={!disabled && showRemoveIcon}
            showPreviewIcon={showPreviewIcon}
            showDownloadIcon={showDownloadIcon}
            removeIcon={removeIcon}
            isImageUrl={isImageUrl}
            downloadIcon={downloadIcon}
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
    } else {
      return null
    }
  }

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
}, 'Upload')

const defaultLocale = {
  uploading: 'Uploading...',
  removeFile: 'Remove file',
  uploadError: 'Upload error',
  previewFile: 'Preview file',
  downloadFile: 'Download file'
}

;(Upload as any).defaultProps = {
  listType: 'text' as UploadListType,
  showUploadList: true,
  locale: defaultLocale,
  count: 1,
  disabled: false,
  listIgnore: true
}

export { Upload }
