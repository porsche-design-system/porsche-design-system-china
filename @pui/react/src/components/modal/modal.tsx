import {
  IconArrowHeadRight,
  IconClose,
  IconWarningFilled,
  IconErrorFilled,
  IconCorrectFilled,
  IconInformationFilled
} from '@pui/icons'
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useState,
  ReactElement
} from 'react'
import ReactDOM from 'react-dom'
import { renderNode } from '../../shared/render-utils'

import { Button } from '..'
import { componentClassNames } from '../../shared/class-util'
import { useDefaultSize } from '../../shared/hooks'
import { ButtonProps } from '../button/button'
import './modal.scss'

export interface ModalProps {
  /** 子组件 */
  children?: React.ReactNode

  /**  类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 大小 */
  size?: 'medium' | 'small' | 'tiny'

  /** 弹框大小 */
  modalSize?: 'small' | 'medium' | 'large' | 'fullscreen'

  /** 标题 */
  title?: React.ReactNode

  /** 标题左侧Icon */
  titleIcon?: ReactElement

  /** 标题左侧Iconl类型 */
  titleIconType?: 'info' | 'success' | 'warning' | 'error'

  /** 副标题 */
  subtitle?: React.ReactNode

  /** 对话框是否可见 */
  visible?: boolean

  /** 头部页脚是否用细线隔开 */
  hasDivider?: boolean

  /** 底部内容，当不需要默认底部按钮时，可以设为 footer={null} */
  footer?: ReactElement | null

  /** 确认按钮文字 */
  okText?: string

  /** 取消按钮文字 */
  cancelText?: string

  /** ok 按钮 props */
  okButtonProps?: ButtonProps

  /** cancel 按钮 props */
  cancelButtonProps?: ButtonProps

  /** 确认按钮Icon */
  okIcon?: ReactElement | null

  /** 取消按钮Icon */
  cancelIcon?: ReactElement | null

  /** 点击确定回调 */
  onOk?: () => void | Promise<unknown>

  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: () => void

  /** 显示取消按钮 */
  showCancel?: boolean

  /** 显示确认按钮 */
  showOk?: boolean

  /** 显示关闭按钮 */
  showClose?: boolean

  modalRef?: any
}

let modalSetIsLoading: (val: boolean) => void
const Modal = ({
  style,
  className,
  size,
  modalSize = 'medium',
  visible = false,
  title,
  titleIcon,
  titleIconType,
  subtitle = '',
  hasDivider = false,
  children,
  footer,
  okText = '确认',
  okButtonProps = {},
  cancelText = '取消',
  cancelButtonProps = {},
  okIcon,
  cancelIcon,
  onOk,
  onCancel,
  showCancel = true,
  showOk = true,
  showClose = true,
  modalRef
}: ModalProps) => {
  const [show, setShow] = useState(visible)
  const [isLoading, setIsLoading] = useState(false)
  const [defaultSize] = useDefaultSize()
  size = size || defaultSize
  modalSetIsLoading = setIsLoading
  const ButtonMargin = size === 'small' ? '12px' : '24px'
  const TitleIcon = {
    info: () => <IconInformationFilled />,
    success: () => <IconCorrectFilled />,
    warning: () => <IconWarningFilled />,
    error: () => <IconErrorFilled />,
    undefined: () => null
  }

  const Footer = () => {
    if (footer) {
      return (
        <div
          className={componentClassNames('pui-modal-footer', {
            divider: hasDivider + ''
          })}
        >
          {footer}
        </div>
      )
    } else if (footer === undefined) {
      return (
        <div
          className={componentClassNames('pui-modal-footer', {
            divider: hasDivider + ''
          })}
        >
          {showCancel && (
            <Button
              onClick={() => onCancel && onCancel()}
              icon={
                cancelIcon === null ? undefined : cancelIcon === undefined ? (
                  <IconClose />
                ) : (
                  cancelIcon
                )
              }
              marginRight={ButtonMargin}
              {...cancelButtonProps}
            >
              {cancelText}
            </Button>
          )}
          {showOk && (
            <Button
              type="primary"
              loading={isLoading}
              icon={
                okIcon === null ? undefined : okIcon === undefined ? (
                  <IconArrowHeadRight />
                ) : (
                  okIcon
                )
              }
              onClick={() => {
                if (onOk) {
                  const loadingPromise = onOk()
                  if (typeof loadingPromise === 'object') {
                    setIsLoading(true)
                    ;(loadingPromise as Promise<unknown>).finally(() => {
                      setIsLoading(false)
                    })
                  }
                }
              }}
              {...okButtonProps}
            >
              {okText}
            </Button>
          )}
        </div>
      )
    }

    return <div className="pui-modal-nofooter" />
  }

  useEffect(() => {
    setShow(visible)
  }, [visible])

  return ReactDOM.createPortal(
    <>
      {show && (
        <div
          ref={modalRef}
          className={componentClassNames('pui-modal-root', {
            hide: !show + ''
          })}
        >
          <div
            className={`${
              modalSize === 'fullscreen'
                ? 'pui-modal-fullscreen pui-modal-mask'
                : 'pui-modal-mask'
            }`}
          />
          <div className="pui-modal-wrap">
            <div
              style={style}
              className={componentClassNames(
                'pui-modal',
                {
                  modalsize: modalSize + '',
                  size
                },
                className
              )}
            >
              <div className="pui-modal-content">
                {showClose && (
                  <div
                    className="pui-modal-close"
                    onClick={() => {
                      onCancel && onCancel()
                    }}
                  >
                    <IconClose />
                  </div>
                )}
                {modalSize !== 'fullscreen' && (
                  <div
                    className={componentClassNames('pui-modal-header', {
                      divider: hasDivider + ''
                    })}
                  >
                    <div className="pui-modal-title">
                      {titleIconType && (
                        <div
                          className={componentClassNames(
                            'pui-modal-title-icon',
                            {
                              type: titleIconType
                            }
                          )}
                        >
                          {titleIcon || TitleIcon[titleIconType]()}
                        </div>
                      )}
                      {title}
                    </div>
                    {subtitle && (
                      <div className="pui-modal-subtitle">{subtitle}</div>
                    )}
                  </div>
                )}

                <div className="pui-modal-body">{children}</div>
                {modalSize !== 'fullscreen' && <Footer />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  )
}

Modal.alert = (
  title: string,
  content: ReactNode,
  onOk: (() => void | Promise<unknown>) | undefined = undefined,
  okText: string = '确认'
) => {
  const modalId = '$ModalContainer'
  let modalContainer = document.getElementById(modalId)
  if (!modalContainer) {
    modalContainer = document.createElement('div')
    modalContainer.id = modalId
    document.body.appendChild(modalContainer)
  }

  let currentPop: any = null
  renderNode(
    <Modal
      title={title}
      okText={okText}
      modalSize="small"
      showClose={false}
      modalRef={(r: any) => {
        currentPop = r
      }}
      onOk={() => {
        if (onOk) {
          const loadingPromise = onOk()
          if (typeof loadingPromise === 'object') {
            modalSetIsLoading(true)
            ;(loadingPromise as Promise<unknown>)
              .then(() => {
                modalSetIsLoading(false)
                document.body.removeChild(modalContainer!)
                document.body.removeChild(currentPop)
              })
              .catch(() => {
                modalSetIsLoading(false)
              })
          } else {
            document.body.removeChild(modalContainer!)
            document.body.removeChild(currentPop)
          }
        } else {
          document.body.removeChild(modalContainer!)
          document.body.removeChild(currentPop)
        }
      }}
      visible
      showCancel={false}
    >
      {content}
    </Modal>,
    modalContainer
  )
}

let modalCounter = 0
Modal.confirm = (
  title: string,
  content: ReactNode,
  onOk: (() => void | Promise<unknown>) | undefined = undefined,
  onCancel: (() => void) | undefined = undefined,
  okText: string = '确认',
  cancelText: string = '取消'
) => {
  modalCounter++
  const modalId = '$ModalContainer-' + modalCounter
  let modalContainer = document.getElementById(modalId)
  if (!modalContainer) {
    modalContainer = document.createElement('div')
    modalContainer.id = modalId
    document.body.appendChild(modalContainer)
  }

  let currentPop: any = null
  renderNode(
    <Modal
      title={title}
      okText={okText}
      modalSize="small"
      showClose={false}
      onCancel={() => {
        document.body.removeChild(modalContainer!)
        document.body.removeChild(currentPop)
        onCancel && onCancel()
      }}
      cancelText={cancelText}
      modalRef={(r: any) => {
        currentPop = r
      }}
      onOk={() => {
        if (onOk) {
          const loadingPromise = onOk()
          if (loadingPromise) {
            modalSetIsLoading(true)
            ;(loadingPromise as Promise<unknown>)
              .then(() => {
                document.body.removeChild(modalContainer!)
                document.body.removeChild(currentPop)
                modalSetIsLoading(false)
              })
              .catch(() => {
                modalSetIsLoading(false)
              })
          } else {
            document.body.removeChild(modalContainer!)
            document.body.removeChild(currentPop)
          }
        } else {
          document.body.removeChild(modalContainer!)
          document.body.removeChild(currentPop)
        }
      }}
      visible
    >
      {content}
    </Modal>,
    modalContainer
  )
}

export interface ModalShowProps {
  /** 子组件 */
  content?: React.ReactNode

  /** 大小 */
  size?: 'medium' | 'small' | 'tiny'

  /** 弹框大小 */
  modalSize?: 'small' | 'medium' | 'large' | 'fullscreen'

  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 标题 */
  title?: React.ReactNode

  /** 标题左侧Icon */
  titleIcon?: ReactElement

  /** 标题左侧Iconl类型 */
  titleIconType?: 'info' | 'success' | 'warning' | 'error'

  /** 副标题 */
  subtitle?: React.ReactNode

  /** 头部页脚是否用细线隔开 */
  hasDivider?: boolean

  /** 底部内容，当不需要默认底部按钮时，可以设为 footer={null} */
  footer?: ReactElement | null

  /** 确认按钮文字 */
  okText?: string

  /** 取消按钮文字 */
  cancelText?: string

  /** ok 按钮 props */
  okButtonProps?: ButtonProps

  /** cancel 按钮 props */
  cancelButtonProps?: ButtonProps

  /** 确认按钮Icon */
  okIcon?: ReactElement | null

  /** 取消按钮Icon */
  cancelIcon?: ReactElement | null

  /** 点击确定回调 */
  onOk?: () => void | Promise<unknown>

  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: () => void

  /** 显示取消按钮 */
  showCancel?: boolean

  /** 显示确认按钮 */
  showOk?: boolean

  /** 显示关闭按钮 */
  showClose?: boolean
}

let modalNode: any = null
Modal.close = () => {
  const modalId = '$ModalContainer-' + modalCounter
  const modalContainer = document.getElementById(modalId)
  if (modalContainer) {
    document.body.removeChild(modalContainer)
    modalCounter--
  }
  if (modalNode) {
    document.body.removeChild(modalNode)
    modalNode = null
  }
}

Modal.show = ({
  style,
  className,
  size,
  modalSize,
  title,
  titleIcon,
  titleIconType,
  subtitle,
  hasDivider,
  footer,
  showOk,
  showClose,
  okText,
  okButtonProps,
  okIcon,
  onOk,
  showCancel,
  cancelText,
  cancelButtonProps,
  cancelIcon,
  onCancel,
  content
}: ModalShowProps) => {
  modalCounter++
  const modalId = '$ModalContainer-' + modalCounter
  let modalContainer = document.getElementById(modalId)
  if (!modalContainer) {
    modalContainer = document.createElement('div')
    modalContainer.id = modalId
    document.body.appendChild(modalContainer)
  }

  let currentPop: any = null
  renderNode(
    <Modal
      style={style}
      className={className}
      size={size}
      modalSize={modalSize}
      title={title}
      titleIcon={titleIcon}
      titleIconType={titleIconType}
      subtitle={subtitle}
      hasDivider={hasDivider}
      footer={footer}
      okText={okText}
      okButtonProps={okButtonProps}
      okIcon={okIcon}
      showOk={showOk}
      showClose={showClose}
      showCancel={showCancel}
      onCancel={() => {
        document.body.removeChild(modalContainer!)
        document.body.removeChild(currentPop)
        onCancel && onCancel()
      }}
      cancelText={cancelText}
      cancelButtonProps={cancelButtonProps}
      cancelIcon={cancelIcon}
      modalRef={(r: any) => {
        currentPop = r
        modalNode = r
      }}
      onOk={() => {
        if (onOk) {
          const loadingPromise = onOk()

          if (loadingPromise) {
            modalSetIsLoading(true)
            ;(loadingPromise as Promise<unknown>)
              .then(() => {
                document.body.removeChild(modalContainer!)
                document.body.removeChild(currentPop)
                modalSetIsLoading(false)
              })
              .catch(() => {
                modalSetIsLoading(false)
              })
          } else {
            document.body.removeChild(modalContainer!)
            document.body.removeChild(currentPop)
          }
        } else {
          document.body.removeChild(modalContainer!)
          document.body.removeChild(currentPop)
        }
      }}
      visible
    >
      {content}
    </Modal>,
    modalContainer
  )
}
export { Modal }
