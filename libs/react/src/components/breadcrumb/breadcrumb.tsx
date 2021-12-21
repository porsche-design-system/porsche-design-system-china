import React, { CSSProperties } from 'react'
import { IconAdd } from '@pui/icons'
import { componentClassNames } from '../../shared/class-util'
import { useDefaultSize } from '../../shared/hooks'

import './breadcrumb.scss'

type PUIIcon = typeof IconAdd

export interface BreadcrumbItem {
  text?: string
  icon?: PUIIcon
  iconSize?: number
  path?: string
}

export interface BreadcrumbProps {
  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties
  /* 大小 */
  size?: 'small' | 'medium'

  /* 导航内容 */
  items?: BreadcrumbItem[]

  /* 点击事件 */
  onClick?: (item: BreadcrumbItem) => void
}

/**
 * Primary UI component for user interaction
 */
const Breadcrumb = ({
  className,
  style,
  size,
  items = [],
  onClick
}: BreadcrumbProps) => {
  const [defaultSize] = useDefaultSize()

  return (
    <div
      className={componentClassNames(
        'pui-breadcrumb',
        { size: size || defaultSize },
        className
      )}
      style={style}
    >
      {items.map((item, inx) => {
        const Icon = item.icon
        return (
          <span key={'breadcrumb' + inx}>
            <div
              onClick={() => {
                if (item.path) {
                  onClick && onClick(item)
                }
              }}
              className={
                'pui-breadcrumb-item ' +
                (item.path ? '' : 'pui-breadcrumb-has-no-path')
              }
            >
              {Icon && (
                <Icon
                  style={{
                    fontSize: item.iconSize ? item.iconSize + 'px' : ''
                  }}
                />
              )}
              {item.text}
            </div>
            {inx !== items.length - 1 && (
              <div className="pui-breadcrumb-slash"> / </div>
            )}
          </span>
        )
      })}
    </div>
  )
}

export { Breadcrumb }
