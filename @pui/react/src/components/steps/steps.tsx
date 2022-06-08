import React, { useState, CSSProperties } from 'react'
import { Step } from './step'
import { componentClassNames } from '../../shared/class-util'
import './steps.scss'

const prefixCls = 'pui-steps'
export interface StepsProps {
  /** 子组件 */
  children: React.ReactNode

  /** 步骤条类名 */
  className?: string

  /** 指定当前步骤 */
  current?: number

  /** 指定标签放置位置，默认水平居中 */
  labelPlacement?: 'left' | 'center'

  /** 步骤条若要支持切换，必须要设定此值，在切换步骤时触发 */
  onCurrentChange?: (current: number) => void

  /** 指定当前步骤的状态，可选wait process finish */
  status?: 'wait' | 'process' | 'finish'

  /** 样式 */
  style?: CSSProperties

  /** 指定大小，目前仅基础横向步骤条支持普通（default）和迷你（small） */
  size?: 'default' | 'small'

  /** 步骤条类型，有 default 和 navigation 两种 */
  type?: 'default' | 'navigation'
}

const Steps = ({
  children,
  className,
  current = 0,
  labelPlacement = 'center',
  onCurrentChange,
  style,
  status = 'process',
  size = 'default',
  type = 'default'
}: StepsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  size = type === 'navigation' ? 'default' : size
  const handleCurrentChange = (index: number) => {
    if (onCurrentChange) {
      return () => {
        if (index === selectedIndex) return
        setSelectedIndex(index)
        onCurrentChange(index)
      }
    }
  }
  const childrenArray = React.Children.toArray(children)
  const newChildrenArray = childrenArray.map((child, index) => {
    const count = index + 1
    const selected = selectedIndex === index
    const properties = {
      type,
      count,
      selected,
      onSelect: handleCurrentChange(index),
      showLineOrArrow: true,
      status: 'wait'
    }
    if (index + 1 === childrenArray.length) {
      properties.showLineOrArrow = false
      if (current >= index) {
        properties.status = status
      }
    } else if (index === current) {
      properties.status = status
    } else if (index < current) {
      properties.status = 'finish'
    }
    return React.cloneElement(child as any, properties)
  })
  return (
    <div
      className={componentClassNames(
        prefixCls,
        { type, size, 'label-placement': labelPlacement },
        className
      )}
      style={style}
    >
      {newChildrenArray}
    </div>
  )
}

Steps.Step = Step

Steps.displayName = 'Steps'

export { Steps }
