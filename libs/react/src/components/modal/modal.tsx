import {
  IconArrowHeadRight,
  IconClose,
  IconClock,
  IconInformation,
  IconExclamation
} from '@pui/icons'
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useState,
  ReactElement
} from 'react'
import ReactDOM from 'react-dom'
import { Button } from '..'
import { componentClassNames } from '../../shared/class-util'
import './modal.scss'

export interface ModalProps {
  /** 子组件 */
  children?: React.ReactNode

  /* 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 标题 */
  title?: string

  /** 标题左侧Icon */
  titleIcon?: ReactElement | undefined

  /** 标题左侧Iconl类型 */
  titleIconType?: undefined | 'info' | 'success' | 'warning' | 'error'

  /** 副标题 */
  subtitle?: string

  /** 对话框是否可见 */
  visible?: boolean

  /** 头部页脚是否用细线隔开 */
  hasDivider?: boolean

  /** 确认按钮文字 */
  okText?: string

  /** 取消按钮文字 */
  cancelText?: string

  /** 确认按钮Icon */
  okIcon?: ReactElement | undefined | null

  /** 取消按钮Icon */
  cancelIcon?: ReactElement | undefined | null

  /* 点击确定回调 */
  onOk?: () => void | Promise<unknown>

  /* 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: () => void

  /* 显示取消按钮 */
  showCancel?: boolean

  /* 显示确认按钮 */
  showOk?: boolean

  /* 显示关闭按钮 */
  showClose?: boolean

  modalRef?: any
}

let modalSetIsLoading: (val: boolean) => void
const Modal = ({
  style,
  className,
  visible = false,
  title,
  titleIcon,
  titleIconType,
  subtitle = '',
  hasDivider = false,
  children,
  okText = '确认',
  cancelText = '取消',
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
  modalSetIsLoading = setIsLoading
  const TitleIcon = {
    info: () => <IconInformation />,
    success: () => <IconClock />,
    warning: () => <IconExclamation />,
    error: () => <IconClose />,
    undefined: () => null
  }

  useEffect(() => {
    setShow(visible)
  }, [visible])
  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      className={componentClassNames('pui-modal-root', { hide: !show + '' })}
    >
      <div className="pui-modal-mask" />
      <div className="pui-modal-wrap">
        <div
          className={componentClassNames('pui-modal', {}, className)}
          style={style}
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

            <div
              className={componentClassNames('pui-modal-header', {
                divider: hasDivider + ''
              })}
            >
              <div className="pui-modal-title">
                {titleIconType && (
                  <div
                    className={componentClassNames('pui-modal-title-icon', {
                      type: titleIconType
                    })}
                  >
                    {titleIcon || TitleIcon[titleIconType]()}
                  </div>
                )}
                {title}
              </div>
              {subtitle && <div className="pui-model-subtitle">{subtitle}</div>}
            </div>
            <div className="pui-modal-body">{children}</div>
            <div
              className={componentClassNames('pui-modal-footer', {
                divider: hasDivider + ''
              })}
            >
              {showCancel && (
                <Button
                  onClick={() => onCancel && onCancel()}
                  icon={
                    cancelIcon === null ? undefined : cancelIcon ===
                      undefined ? (
                      <IconArrowHeadRight />
                    ) : (
                      cancelIcon
                    )
                  }
                  marginRight="10px"
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
                >
                  {okText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
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
  ReactDOM.render(
    <Modal
      title={title}
      okText={okText}
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
  ReactDOM.render(
    <Modal
      title={title}
      okText={okText}
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
            ;(loadingPromise as Promise<unknown>).then(() => {
              document.body.removeChild(modalContainer!)
              document.body.removeChild(currentPop)
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

  /** 标题 */
  title?: string

  /** 标题左侧Icon */
  titleIcon?: ReactElement | undefined

  /** 标题左侧Iconl类型 */
  titleIconType?: undefined | 'info' | 'success' | 'warning' | 'error'

  /** 副标题 */
  subtitle?: string

  /** 确认按钮文字 */
  okText?: string

  /** 取消按钮文字 */
  cancelText?: string

  /** 确认按钮Icon */
  okIcon?: ReactElement | undefined | null

  /** 取消按钮Icon */
  cancelIcon?: ReactElement | undefined | null

  /* 点击确定回调 */
  onOk?: () => void | Promise<unknown>

  /* 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: () => void

  /* 显示取消按钮 */
  showCancel?: boolean

  /* 显示确认按钮 */
  showOk?: boolean

  /* 显示关闭按钮 */
  showClose?: boolean
}

Modal.show = ({
  title,
  titleIcon,
  titleIconType,
  subtitle,
  showOk,
  showClose,
  okText,
  okIcon,
  onOk,
  cancelText,
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
  ReactDOM.render(
    <Modal
      title={title}
      titleIcon={titleIcon}
      titleIconType={titleIconType}
      subtitle={subtitle}
      okText={okText}
      okIcon={okIcon}
      showOk={showOk}
      showClose={showClose}
      onCancel={() => {
        document.body.removeChild(modalContainer!)
        document.body.removeChild(currentPop)
        onCancel && onCancel()
      }}
      cancelText={cancelText}
      cancelIcon={cancelIcon}
      modalRef={(r: any) => {
        currentPop = r
      }}
      onOk={() => {
        if (onOk) {
          const loadingPromise = onOk()
          if (loadingPromise) {
            modalSetIsLoading(true)
            ;(loadingPromise as Promise<unknown>).then(() => {
              document.body.removeChild(modalContainer!)
              document.body.removeChild(currentPop)
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
