import React, { CSSProperties } from 'react'
import classNames from 'classnames'
import { componentClassNames } from '../../shared/class-util'

import './tag.scss'

type Compute<T extends {}> = {
  [K in keyof T]: T[K]
}

interface DefaultTagProps
  extends React.ForwardRefRenderFunction<HTMLButtonElement> {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 子组件 */
  children?: React.ReactNode

  /** 样式 */
  style?: CSSProperties

  /** 类型 */
  type?: 'blackGold' | 'blackWhite' | 'gold' | 'red' | 'gray'

  // 组件事件 //

  /* 点击事件 */
  onClick?: React.MouseEventHandler
}

export type TagProps = Compute<DefaultTagProps>

const Tag = (tagProps: TagProps) => {
  const { className, children, style, type = 'gray', onClick } = tagProps

  return (
    <div
      className={componentClassNames('pui-tag', { type }, className)}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export { Tag }
