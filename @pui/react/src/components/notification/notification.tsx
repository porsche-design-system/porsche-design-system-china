import React, {
  ReactNode,
  useMemo,
  useState,
  useEffect,
  useCallback,
  ReactElement
} from 'react'
import {
  IconInformationFilled,
  IconClose,
  IconCorrectFilled,
  IconWarningFilled,
  IconErrorFilled,
  IconArrowHeadRight
} from '@pui/icons'
import { renderNode, unmountNode } from '../../shared/render-utils'
import { Button } from '../button/button'
import { componentClassNames } from '../../shared/class-util'
import { useDefaultSize } from '../../shared/hooks'
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

  /** 显示确认按钮 */
  showOk?: boolean

  /** 显示取消按钮 */
  showCancel?: boolean

  /** 大小 */
  size?: 'medium' | 'small'

  /** 取消按钮文字 */
  cancelText?: string

  /** 确认按钮文字 */
  okText?: string

  /** 确认按钮Icon */
  okIcon?: ReactNode | undefined | null

  /** 取消按钮Icon */
  cancelIcon?: ReactNode | undefined | null

  /** 通知提醒内容，必选 */
  description: ReactNode

  /** 通知提醒标题，必选 */
  message: ReactNode

  /** 点击确定回调 */
  onOk?: () => void

  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: () => void

  /** 弹出位置，可选 topLeft topRight bottomLeft bottomRight */
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

  /** 唯一标识 */
  key?: string

  /** 底部内容，当不需要默认底部按钮时，可以设为 footer={null} */
  footer?: ReactNode | null
  closeAnimate?: boolean // 是否关闭动画
  title?: ReactNode | null
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
  placement: 'topLeft',
  key: '',
  footer: null,
  closeAnimate: false,
  title: null
}

let wrap: HTMLElement
let count = 0
const defaultParentNode = '$notification-parentNode-'
export const createNotification = () => {
  return (config: Partial<NotificationConfigProps> = {}) => {
    const fconfig = { ...defaultConfig, ...config }
    const placementCss = {
      topLeft: `top: 14px; left: 14px;`,
      topRight: `top: 14px; right: 14px;`,
      bottomLeft: `bottom: 14px; left: 14px;`,
      bottomRight: `bottom: 14px;right: 14px;`
    }
    const placement = placementCss[config.placement!] || placementCss.topLeft
    const warpCss = `line-height: 1.5;
    text-align: center;
    color: #333;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: fixed;
    z-index: 100000;
    ${placement}`
    count++
    if (!wrap) {
      // 如果有的话，说明已经调用过这个函数了，这个空div就可以一直复用
      wrap = document.createElement('div')

      wrap.style.cssText = warpCss
      if (wrap) {
        fconfig.mount!.appendChild(wrap)
      }
    } else {
      wrap.style.cssText = warpCss
    }

    const div = document.createElement('div')
    div.id = `${defaultParentNode}${fconfig.key}`
    wrap.appendChild(div)
    renderNode(
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
  const [defaultSize] = useDefaultSize()
  const size = fconfig.size || defaultSize
  const [close, setClose] = useState(false)

  const unmount = useMemo(() => {
    return () => {
      if (parentDom && rootDom) {
        count--
        unmountNode(parentDom)
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
    <div
      className={componentClassNames('pui-notification', { size })}
      id={fconfig?.key ? '$notification-' + fconfig.key : ''}
    >
      <div
        className={`notification-text ${fconfig.type}  ${
          fconfig.closeAnimate ? null : close ? 'close' : 'open'
        }-animate-${fconfig.placement!.indexOf('Left') > 0 ? 'left' : 'right'}`}
      >
        <div className="notification-title">
          <div className="notification-title-icon">
            {fconfig.title ? (
              fconfig.title
            ) : (
              <>
                {fconfig.type === 'info' && <IconInformationFilled />}
                {fconfig.type === 'success' && <IconCorrectFilled />}
                {fconfig.type === 'warning' && <IconWarningFilled />}
                {fconfig.type === 'error' && <IconErrorFilled />}
                <span className="text-content">{fconfig.message}</span>
              </>
            )}
          </div>
          {fconfig.closable && (
            <IconClose
              style={{ fontSize: size === 'small' ? '20px' : '24px' }}
              onClick={handleClose}
            />
          )}
        </div>
        <div className="notification-content">{fconfig.description}</div>
        {fconfig.showButton &&
          (!fconfig.footer ? (
            <div className="notification-footer">
              {fconfig.showCancel && (
                <Button
                  onClick={() => fconfig.onCancel && fconfig.onCancel()}
                  icon={
                    fconfig.cancelIcon ===
                    null ? undefined : fconfig.cancelIcon === undefined ? (
                      <IconClose />
                    ) : (
                      (fconfig.cancelIcon as unknown as ReactElement)
                    )
                  }
                  marginRight="12px"
                  size={size}
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
                      (fconfig.okIcon as unknown as ReactElement)
                    )
                  }
                  onClick={() => fconfig.onOk && fconfig.onOk()}
                  size={size}
                >
                  {fconfig.okText}
                </Button>
              )}
            </div>
          ) : (
            fconfig.footer
          ))}
      </div>
    </div>
  )
}

export const Notification = {
  pop(config: NotificationConfigProps) {
    createNotification()(config)
  },
  close(key: string) {
    const node = document.getElementById('$notification-' + key)
    if (node) {
      node.remove()
      if (count === 0) {
        node.parentElement?.remove()
      }
    }
  },
  update(config: NotificationConfigProps) {
    const fconfig = { ...defaultConfig, ...config }
    const div = document.getElementById(`${defaultParentNode}${fconfig.key}`)
    if (div) {
      renderNode(
        <NotificationBox
          key={fconfig.key}
          rootDom={wrap}
          parentDom={div}
          fconfig={fconfig}
        />,
        div
      )
    }
  }
}
