import React, { CSSProperties } from 'react'

export interface TimelineItemProps {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 子组件 */
  children?: React.ReactNode

  /** 样式 */
  style?: CSSProperties

  /** 颜色 */
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'gray'
}
export const TimelineItem = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  color = 'red'
}: TimelineItemProps) => {
  return <div>{children}</div>
}
