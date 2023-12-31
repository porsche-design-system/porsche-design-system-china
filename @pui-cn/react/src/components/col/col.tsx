import React, { CSSProperties } from 'react'
import { componentClassNames } from '../../shared/class-util'

export interface ColProps {
  /** 类名 */
  className?: string

  /** 子组件 */
  children?: React.ReactNode

  /** 样式 */
  style?: CSSProperties

  /* 跨度，最大为24 */
  span?: number

  /* 点击事件 */
  onClick?: React.MouseEventHandler
}

/**
 * Primary UI component for user interaction
 */
const Col = ({ className, style, children, span, onClick }: ColProps) => {
  const colStyle: CSSProperties = {
    width: span ? (span / 24) * 100 + '%' : '',
    flex: span ? '' : 'auto'
  }
  return (
    <div
      className={componentClassNames('pui-col', {}, className)}
      style={{ ...colStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export { Col }
