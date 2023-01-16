import React, { FC, cloneElement, isValidElement } from 'react'
import { IconAttachment, IconLoading, IconDocument } from '@pui/icons'

import classnames from 'classnames'
import {
  previewImage,
  isImageUrl,
  cloneElement as cloneElementUtil
} from '../utils'

import { UploadFile, UploadLocale, UploadListType } from '../interface'
import ListItem from './listItem'
import { Button, ButtonProps } from '../../button/button'

type PreviewFileHandler = (file: File | Blob) => PromiseLike<string>

interface UploadListProps {
  fileList: UploadFile[]
  listType?: UploadListType
  showRemoveIcon?: boolean
  locale: UploadLocale
  showDownloadIcon?: boolean
  showPreviewIcon?: boolean
  downloadIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode)
  removeIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode)
  onRemove: (file: UploadFile, formEffect: boolean) => void
  onPreview: (file: UploadFile) => void
  isImageUrl?: (file: UploadFile) => boolean
  previewFile?: PreviewFileHandler
  appendAction?: React.ReactNode
}

const UploadList: FC<UploadListProps> = props => {
  const {
    fileList,
    previewFile,
    listType,
    locale,
    showRemoveIcon,
    showDownloadIcon,
    showPreviewIcon,
    removeIcon,
    onRemove,
    onPreview,
    isImageUrl: isImgUrl,
    appendAction
  } = props

  React.useEffect(() => {
    if (listType !== 'picture' && listType !== 'picture-card') {
      return
    }
    ; (fileList || []).forEach((file: UploadFile) => {
      if (
        typeof document === 'undefined' ||
        typeof window === 'undefined' ||
        !(window as any).FileReader ||
        !(window as any).File ||
        !(file.originFileObj instanceof File) ||
        file.thumbUrl !== undefined
      ) {
        return
      }
      file.thumbUrl = ''
      if (previewFile) {
        previewFile(file.originFileObj as File).then(
          (previewDataUrl: string) => {
            // Need append '' to avoid dead loop
            file.thumbUrl = previewDataUrl || ''
            // forceUpdate();
          }
        )
      }
    })
  }, [listType, fileList, previewFile])

  const onInternalPreview = (
    file: UploadFile,
    e?: React.SyntheticEvent<HTMLElement>
  ) => {
    if (!onPreview) {
      return
    }
    e && e.preventDefault()
    return onPreview(file)
  }
  const onInternalClose = (file: UploadFile, formEffect: boolean) => {
    onRemove && onRemove(file, formEffect)
  }

  const internalIconRender = (file: UploadFile) => {
    const isLoading = file.status === 'uploading'
    const fileIcon = isImgUrl && isImgUrl(file) ? '上传失败' : <IconDocument />
    let icon: React.ReactNode = isLoading ? (
      <IconLoading spin />
    ) : (
      <IconAttachment />
    )
    if (listType === 'picture') {
      icon = isLoading ? <IconLoading /> : fileIcon
    } else if (listType === 'picture-card') {
      icon = isLoading ? locale.uploading : fileIcon
    }
    return icon
  }

  const actionIconRender = (
    customIcon: React.ReactNode,
    callback: () => void,
    prefixCls: string
  ) => {
    const btnProps: ButtonProps = {
      type: 'text',
      size: 'small',
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        callback()
        if (isValidElement(customIcon) && customIcon.props.onClick) {
          customIcon.props.onClick(e)
        }
      },
      className: `${prefixCls}-item-card-actions-btn`
    }
    if (isValidElement(customIcon)) {
      const btnIcon = cloneElement(customIcon, {
        ...customIcon.props,
        onClick: () => { }
      })

      return <Button {...btnProps} icon={btnIcon} />
    }
    return (
      <Button {...btnProps}>
        <span>{customIcon}</span>
      </Button>
    )
  }

  const prefixCls = 'pui-upload-list'
  const listClassNames = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-${listType}`]: true
  })

  return (
    <div className={listClassNames}>
      {fileList.map(file => {
        return (
          <ListItem
            file={file}
            locale={locale}
            listType={listType}
            isImgUrl={isImgUrl}
            onRemove={onInternalClose}
            onPreview={onInternalPreview}
            key={file.uid}
            removeIcon={removeIcon}
            iconRender={internalIconRender}
            showPreviewIcon={showPreviewIcon}
            showRemoveIcon={showRemoveIcon}
            showDownloadIcon={showDownloadIcon}
            actionIconRender={actionIconRender}
          />
        )
      })}
      {appendAction &&
        cloneElementUtil(appendAction, oriProps => ({
          className: classnames(oriProps.className),
          style: {
            ...oriProps.style
          }
        }))}
    </div>
  )
}

UploadList.defaultProps = {
  listType: 'text' as UploadListType, // or picture
  showRemoveIcon: true,
  showDownloadIcon: false,
  showPreviewIcon: true,
  previewFile: previewImage,
  isImageUrl
}
export default UploadList
