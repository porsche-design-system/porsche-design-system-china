import React, { CSSProperties, ReactElement } from 'react'
import { IconAdd } from '@pui/icons'
import classNames from 'classnames'
import { useDefaultSize } from '../../shared/hooks'
import { componentClassNames, isReactElement } from '../../shared/class-util'

import './button.scss'

type PUIIcon = typeof IconAdd

type Compute<T extends {}> = {
  [K in keyof T]: T[K]
}

interface DefaultButtonProps
  extends React.ForwardRefRenderFunction<HTMLButtonElement> {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 子组件 */
  children?: React.ReactNode

  /** 样式 */
  style?: CSSProperties

  /** 类型 */
  type?: 'default' | 'primary' | 'text'

  /** 大小 */
  size?: 'medium' | 'small' | 'tiny'

  /** 图标 */
  icon?: PUIIcon | ReactElement

  /** 后置图标 */
  suffixIcon?: PUIIcon | ReactElement

  /** 是否禁用 */
  disabled?: boolean

  // 组件事件 //

  /* 点击事件 */
  onClick?: React.MouseEventHandler

  /* 鼠标移入事件 */
  onMouseEnter?: React.MouseEventHandler

  /* 鼠标移出事件 */
  onMouseLeave?: React.MouseEventHandler
}

export type ButtonProps = Compute<DefaultButtonProps>

const Button = (buttonProps: ButtonProps) => {
  const {
    className,
    children,
    style,
    type = 'default',
    size,
    icon,
    suffixIcon,
    disabled = false,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = buttonProps

  const [defaultSize] = useDefaultSize()
  const newSize = size || defaultSize

  let paddingStyle = {}
  const padding = '11px'

  if (!children || (icon && suffixIcon)) {
    paddingStyle = { padding: '0 ' + padding }
  } else if (icon) {
    paddingStyle = { paddingLeft: padding }
  } else if (suffixIcon) {
    paddingStyle = { paddingRight: padding }
  }

  const IconComponent = icon as any
  const SuffixIconComponent = suffixIcon as any
  return (
    <button
      type="button"
      className={componentClassNames(
        'pui-button',
        { type, size: newSize },
        className
      )}
      style={{ ...paddingStyle, ...style }}
      onClick={evt => {
        if (!disabled) {
          onClick && onClick(evt)
        }
      }}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {icon && (
        <span
          className={classNames(
            'pui-button-icon',
            children ? 'pui-button-icon-content' : ''
          )}
        >
          {isReactElement(IconComponent) ? IconComponent : <IconComponent />}
        </span>
      )}
      <span className="pui-button-content">{children}</span>
      {suffixIcon && (
        <span
          className={classNames(
            'pui-button-suffix-icon',
            children ? 'pui-button-suffix-icon-content' : ''
          )}
        >
          {isReactElement(SuffixIconComponent) ? (
            SuffixIconComponent
          ) : (
            <SuffixIconComponent />
          )}
        </span>
      )}
    </button>
  )
}

export { Button }
