import React, { CSSProperties } from 'react'
import { componentClassNames } from '../../shared/class-util'
import './divider.scss'

export interface DividerProps {
  /* 类名 */
  className?: string

  /* 水平还是垂直类型 */
  type?: 'horizontal' | 'vertical'

  /* 样式 */
  style?: CSSProperties

  /* 底色 */
  contrast?: 'low' | 'medium' | 'high'
}

const Divider = ({
  className,
  style,
  type = 'horizontal',
  contrast = 'medium'
}: DividerProps) => {
  return (
    <div
      className={componentClassNames(
        'pui-divider',
        { type, contrast },
        className
      )}
      style={{
        display: type === 'vertical' ? 'inline-block' : 'block',
        ...style
      }}
    />
  )
}

export { Divider }
