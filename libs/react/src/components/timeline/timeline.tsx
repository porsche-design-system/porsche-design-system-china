import React, { CSSProperties } from 'react'
import { TimelineItemProps } from './timeline-item'
import { componentClassNames, overrideChildren } from '../../shared/class-util'
import './timeline.scss'
import { useDefaultSize } from '../../shared/hooks'

export interface TimelineProps {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 子组件 */
  children?: React.ReactNode

  /** 样式 */
  style?: CSSProperties

  /** 大小 */
  size?: 'medium' | 'small'
}

const Timeline = ({ className, style, size, children }: TimelineProps) => {
  const [defaultSize] = useDefaultSize()
  size = size || defaultSize
  const timelineItems: TimelineItemProps[] = []
  overrideChildren(children, (elementName, props: TimelineItemProps) => {
    if (elementName === 'TimelineItem') {
      timelineItems.push(props)
    }
    return props
  })

  return (
    <div
      className={componentClassNames(
        'pui-timeline',
        { size: size as string },
        className
      )}
      style={style}
    >
      {timelineItems.map((item: TimelineItemProps, index: number) => {
        return (
          <li
            className={componentClassNames(
              'pui-timeline-item',
              {},
              item.className
            )}
            style={item.style}
            key={index}
          >
            <div className="pui-timeline-item-tail" />
            <div
              className={componentClassNames('pui-timeline-item-head', {
                color: item.color ? (item.color as string) : 'red'
              })}
            />
            <div className="pui-timeline-item-content">{item.children}</div>
          </li>
        )
      })}
    </div>
  )
}

;(Timeline as any).displayName = 'Timeline'
export { Timeline }
