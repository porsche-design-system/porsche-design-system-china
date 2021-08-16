import React, { CSSProperties, ReactElement } from 'react'
import { IconAdd } from '@pui/icons'
import classNames from 'classnames'
import { useDefaultSize } from '../../shared/hooks'
import { componentClassNames } from '../../shared/class-util'

import './button.scss'

type PUIIcon = typeof IconAdd

export interface ButtonProps {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 子组件 */
  children?: React.ReactNode

  /** 样式 */
  style?: CSSProperties

  /** 类型 */
  type?: 'default' | 'primary' | 'secondary' | 'text'

  /** 大小 */
  size?: 'medium' | 'small'

  /** 图标 */
  icon?: PUIIcon | ReactElement

  /** 是否加载中 */
  loading?: boolean

  /** 是否禁用 */
  disabled?: boolean

  /* 是否是表单提交按钮 */
  submit?: boolean

  /* 左边距 */
  marginLeft?: string

  /* 右边距 */
  marginRight?: string

  // 组件事件 //

  /* 点击事件 */
  onClick?: React.MouseEventHandler

  /* 鼠标移入事件 */
  onMouseEnter?: React.MouseEventHandler

  /* 鼠标移出事件 */
  onMouseLeave?: React.MouseEventHandler
}

const Button = ({
  className,
  children,
  style,
  type = 'default',
  size,
  icon,
  loading,
  disabled = false,
  marginRight,
  marginLeft,
  onClick,
  onMouseEnter,
  onMouseLeave
}: ButtonProps) => {
  const [defaultSize] = useDefaultSize()
  loading = loading || false
  size = size || defaultSize

  let paddingStyle = {}
  const padding = size === 'medium' ? '11px' : '7px'
  if (!children) {
    paddingStyle = { padding: '0 ' + padding }
  } else if (icon || loading) {
    paddingStyle = { paddingLeft: padding }
  }

  const loadingSize = size === 'medium' ? 24 : 20
  const IconComponent = icon as any
  return (
    <button
      type="button"
      className={componentClassNames('pui-button', { type, size }, className)}
      style={{ ...paddingStyle, marginLeft, marginRight, ...style }}
      onClick={evt => {
        if (!loading) {
          onClick && onClick(evt)
        }
      }}
      disabled={disabled || loading}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {loading && (
        <span
          className={classNames(
            'pui-button-icon',
            children ? 'pui-button-icon-content' : ''
          )}
        >
          <svg
            height={loadingSize}
            width={loadingSize}
            className="pui-button-loading-svg"
          >
            <circle
              className="pui-button-loading-circle2"
              cx={loadingSize / 2}
              cy={loadingSize / 2}
              r={loadingSize / 4}
            />
            <circle
              className="pui-button-loading-circle"
              cx={loadingSize / 2}
              cy={loadingSize / 2}
              r={loadingSize / 4}
            />
          </svg>
        </span>
      )}

      {icon && !loading && (
        <span
          className={classNames(
            'pui-button-icon',
            children ? 'pui-button-icon-content' : ''
          )}
        >
          {IconComponent.$$typeof.toString() === 'Symbol(react.element)' ? (
            IconComponent
          ) : (
            <IconComponent />
          )}
        </span>
      )}
      <span className="pui-button-content">{children}</span>
    </button>
  )
}

Button.displayName = 'Button'
export { Button }
