import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'
import { IconDelete, IconView } from '@pui/icons'

import { Progress } from '../../index'
import { UploadFile, UploadListType, UploadLocale } from '../interface'

interface UploadListProps {
  file: UploadFile
  listType?: UploadListType
  isImgUrl?: (file: UploadFile) => boolean
  showRemoveIcon?: boolean
  showDownloadIcon?: boolean
  showPreviewIcon?: boolean
  locale: UploadLocale
  iconRender: (file: UploadFile) => React.ReactNode
  actionIconRender: (
    customIcon: React.ReactNode,
    callback: () => void,
    prefixCls: string,
    title?: string | undefined
  ) => React.ReactNode
  removeIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode)
  onRemove: (file: UploadFile) => void
  onPreview: (file: UploadFile, e: React.SyntheticEvent<HTMLElement>) => void
}

const ListItem: FC<UploadListProps> = props => {
  const {
    file,
    listType,
    showRemoveIcon,
    actionIconRender,
    showPreviewIcon,
    removeIcon: customRemoveIcon,
    locale,
    iconRender,
    isImgUrl,
    onRemove,
    onPreview
  } = props
  const prefixCls = 'pui-upload-list'
  const listItemNameClass = classnames(`${prefixCls}-item-name`)
  const linkProps =
    typeof file.linkProps === 'string'
      ? JSON.parse(file.linkProps)
      : file.linkProps

  const iconNode = iconRender(file)
  let icon = <div className={`${prefixCls}-text-icon`}>{iconNode}</div>

  if (listType === 'picture' || listType === 'picture-card') {
    if (file.status === 'uploading' || file.status === 'error' || (!file.thumbUrl && !file.url)) {
      const uploadingClassName = classnames({
        [`${prefixCls}-item-thumbnail`]: true,
        [`${prefixCls}-item-file`]: file.status !== 'uploading'
      })
      icon = <div className={uploadingClassName}>{file.status === 'error' ? iconNode : ''}</div>
    } else {
      const thumbnail = isImgUrl?.(file) ? (
        <img
          src={file.thumbUrl || file.url}
          alt={file.name}
          className={`${prefixCls}-item-image`}
        />
      ) : (
        iconNode
      )
      const aClassName = classnames({
        [`${prefixCls}-item-thumbnail`]: true,
        [`${prefixCls}-item-file`]: isImgUrl && !isImgUrl(file)
      })
      icon = (
        <a
          className={aClassName}
          onClick={e => onPreview(file, e)}
          href={file.url || file.thumbUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {thumbnail}
        </a>
      )
    }
  }

  const handleStopUpload = () => {
    onRemove(file);   // 同时删除
    file.source?.cancel('取消成功');
  }

  const removeIcon = showRemoveIcon
    ? actionIconRender(
      (typeof customRemoveIcon === 'function'
        ? customRemoveIcon(file)
        : customRemoveIcon) || <IconDelete />,
      () => {
        handleStopUpload();
      },
      prefixCls,
      locale.removeFile
    )
    : null

  const downloadOrDelete = listType !== 'picture-card' && (
    <span
      key="download-delete"
      className={classnames(`${prefixCls}-item-card-actions`, {
        picture: listType === 'picture'
      })}
    >
      {/* {downloadIcon} */}
      {removeIcon}
    </span>
  )

  const preview = file.url
    ? [
      <a
        key="view"
        target="_blank"
        rel="noopener noreferrer"
        className={listItemNameClass}
        title={file.name}
        {...linkProps}
        href={file.url}
        onClick={e => onPreview(file, e)}
      >
        {file.name}
      </a>,
      downloadOrDelete
    ]
    : [
      <span
        key="view"
        className={listItemNameClass}
        // onClick={e => onPreview(file, e)}
        title={file.name}
      >
        {file.name}
      </span>,
      downloadOrDelete
    ]
  const previewStyle: React.CSSProperties = {
    pointerEvents: 'none',
    opacity: 0.5
  }

  const previewIcon = showPreviewIcon ? (
    <a
      href={file.url || file.thumbUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={(file.url || file.thumbUrl) && file.status !== 'error' ? undefined : previewStyle}
      onClick={e => onPreview(file, e)}
      title={locale.previewFile}
    >
      <IconView />
    </a>
  ) : null
  const actions = listType === 'picture-card' &&
    file.status !== 'uploading' && (
      <span className={`${prefixCls}-item-actions`}>
        {previewIcon}
        {/* {file.status === 'success' && downloadIcon} */}
        {removeIcon}
      </span>
    )

  const iconAndPreview = (
    <span className={`${prefixCls}-info-content`}>
      {icon}
      {preview}
    </span>
  )

  return (
    <div className={classnames(`${prefixCls}-${listType}-container`)}>
      <div className={classnames(`${prefixCls}-item ${prefixCls}-item-${file.status}`)}>
        <div className={classnames(`${prefixCls}-item-info`, `${prefixCls}-item-info-${file.status}`)}>{iconAndPreview}</div>
        {actions}
        <CSSTransition
          in={file.status === 'uploading'}
          unmountOnExit
          classNames="pui-upload-progress"
          timeout={1000}
        >
          <Progress percent={file.percent || 0} onStop={handleStopUpload} />
        </CSSTransition>
      </div>
    </div>
  )
}

export default ListItem
