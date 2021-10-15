import React, {
  ReactNode,
  useMemo,
  useState,
  useEffect,
  useCallback,
  ReactElement
} from 'react'
import ReactDom, { unmountComponentAtNode } from 'react-dom'
import {
  IconInformationFilled,
  IconClose,
  IconCorrectFilled,
  IconWarningFilled,
  IconErrorFilled,
  IconArrowHeadRight
} from '@pui/icons'
import { Button } from '..'
import './notification.scss'

export interface NotificationConfigProps {
  /** 挂载点 */
  mount?: HTMLElement

  /** 动画延迟时间 */
  delay?: number

  /** 通知提醒框左侧有图标 */
  type?: 'info' | 'success' | 'error' | 'warning'

  /** 结束后回调 */
  callback?: any

  /** 底色 */
  background?: string

  /** 文字颜色 */
  color?: string

  /** 是否手动关闭 */
  closable?: boolean

  /** 是否显示底部button */
  showButton?: boolean

  /* 显示确认按钮 */
  showOk?: boolean

  /* 显示取消按钮 */
  showCancel?: boolean

  /** 取消按钮文字 */
  cancelText?: string

  /** 确认按钮文字 */
  okText?: string

  /** 确认按钮Icon */
  okIcon?: ReactElement | undefined | null

  /** 取消按钮Icon */
  cancelIcon?: ReactElement | undefined | null

  /** 通知提醒内容，必选 */
  description: ReactNode

  /** 通知提醒标题，必选 */
  message: ReactNode

  /* 点击确定回调 */
  onOk?: () => void

  /* 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: () => void

  /* 弹出位置，可选 topLeft topRight bottomLeft bottomRight */
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
}

const defaultConfig: NotificationConfigProps = {
  mount: document.body,
  type: 'info',
  delay: 2000,
  callback: null,
  closable: true,
  showButton: true,
  showCancel: true,
  showOk: true,
  okText: '确认',
  cancelText: '取消',
  background: '',
  color: '',
  message: '',
  description: '',
  okIcon: undefined,
  cancelIcon: undefined,
  onOk: undefined,
  onCancel: undefined,
  placement: 'topLeft'
}

let wrap: HTMLElement
export const createNotification = () => {
  return (config: Partial<NotificationConfigProps> = {}) => {
    const fconfig = { ...defaultConfig, ...config }
    if (!wrap) {
      // 如果有的话，说明已经调用过这个函数了，这个空div就可以一直复用
      wrap = document.createElement('div')

      wrap.style.cssText = `line-height: 1.5;
        text-align: center;
        color: #333;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        position: fixed;
        z-index: 100000;
        width: 100%;
        top: 16px;
        left: 0;`
      if (wrap) {
        fconfig.mount!.appendChild(wrap)
      }
    }

    const div = document.createElement('div')
    wrap.appendChild(div)
    ReactDom.render(
      <NotificationBox rootDom={wrap} parentDom={div} fconfig={fconfig} />,
      div
    )
  }
}

export type NotificationProps = {
  rootDom: HTMLElement
  parentDom: Element | DocumentFragment
  fconfig: NotificationConfigProps
}

export function NotificationBox(props: NotificationProps) {
  const { rootDom, parentDom, fconfig } = props
  const [close, setClose] = useState(false)
  const placementCss = {
    topLeft: { top: '16px', left: '16px' },
    topRight: { top: '16px', right: '16px' },
    bottomLeft: { bottom: '16px', left: '16px' },
    bottomRight: { bottom: '16px', right: '16px' }
  }

  const unmount = useMemo(() => {
    return () => {
      if (parentDom && rootDom) {
        unmountComponentAtNode(parentDom)
        rootDom.removeChild(parentDom)
      }
    }
  }, [parentDom, rootDom])

  useEffect(() => {
    let timer1: number
    let timer2: number
    if (!fconfig.closable) {
      // 自动关闭
      const closeStart = fconfig.delay! - 100
      // 关闭动画
      timer1 = window.setTimeout(
        () => {
          setClose(true)
        },
        closeStart > 0 ? closeStart : 0
      )
      // 卸载
      timer2 = window.setTimeout(() => {
        setClose(false)
        unmount()
        if (fconfig.callback) {
          fconfig.callback()
        }
      }, fconfig.delay)
    }
    return () => {
      window.clearTimeout(timer1)
      window.clearTimeout(timer2)
    }
  }, [unmount, fconfig])

  // 手动卸载
  const handleClose = useCallback(() => {
    if (fconfig.closable) {
      setClose(true)
      setTimeout(() => {
        unmount()
        if (fconfig.callback) {
          fconfig.callback()
        }
      }, 100)
    }
  }, [fconfig, unmount])

  return (
    <div className="pui-notification">
      <div
        className={`notification-text ${fconfig.type}  ${
          close ? 'close' : 'open'
        }-animate-${fconfig.placement!.indexOf('Left') > 0 ? 'left' : 'right'}`}
        style={placementCss[fconfig.placement!]}
      >
        <div className="notification-title">
          <div className="notification-title-icon">
            {fconfig.type === 'info' && <IconInformationFilled />}
            {fconfig.type === 'success' && <IconCorrectFilled />}
            {fconfig.type === 'warning' && <IconWarningFilled />}
            {fconfig.type === 'error' && <IconErrorFilled />}
            <span className="text-content">{fconfig.message}</span>
          </div>
          {fconfig.closable && (
            <IconClose style={{ fontSize: '24px' }} onClick={handleClose} />
          )}
        </div>
        <div className="notification-content">{fconfig.description}</div>
        {fconfig.showButton && (
          <div className="notification-footer">
            {fconfig.showCancel && (
              <Button
                onClick={() => fconfig.onCancel && fconfig.onCancel()}
                icon={
                  fconfig.cancelIcon ===
                  null ? undefined : fconfig.cancelIcon === undefined ? (
                    <IconClose />
                  ) : (
                    fconfig.cancelIcon
                  )
                }
                marginRight="20px"
              >
                {fconfig.cancelText}
              </Button>
            )}
            {fconfig.showOk && (
              <Button
                type="primary"
                icon={
                  fconfig.okIcon === null ? undefined : fconfig.okIcon ===
                    undefined ? (
                    <IconArrowHeadRight />
                  ) : (
                    fconfig.okIcon
                  )
                }
                onClick={() => fconfig.onOk && fconfig.onOk()}
              >
                {fconfig.okText}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export const Notification = {
  pop(config: NotificationConfigProps) {
    createNotification()(config)
  }
}