import React, { CSSProperties, ReactNode } from 'react'
import { IconAdd } from '@pui/icons'
import classNames from 'classnames'
import { trimEnd } from 'lodash'
import { componentClassNames } from '../../shared/class-util'
import { useDefaultSize } from '../../shared/hooks'

import './breadcrumb.scss'

type PUIIcon = typeof IconAdd

export interface BreadcrumbItem {
  text?: ReactNode
  icon?: PUIIcon
  iconSize?: number
  path?: string
  /** 单独的分隔符 */
  separator?: ReactNode
}
// 为了满足react-router路由类型
export interface RoutesProps {
  children?: RoutesProps[]
  path: string
  title: string
  [propName: string]: any
}

export interface BreadcrumbProps {
  /** 分隔符 */
  separator?: ReactNode

  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 大小 */
  size?: 'small' | 'medium'

  /** 导航内容 */
  items?: BreadcrumbItem[]

  /** 路由关系，当items为空的时候有效 */
  routes?: RoutesProps[]

  /** 当前路由，与routes结合使用 */
  currentPath?: string

  /** 当前路由是否放大显示 */
  current?: boolean

  /** 点击事件 */
  onClick?: (item: BreadcrumbItem) => void
}

const realPath = (path: string) => {
  return path.startsWith('/') ? path : '/' + path
}

// 将嵌套的路由关系转为顺序关系：
const parseBreadcrumbFromRoutes = (
  breadcrumbResource: RoutesProps[],
  pathname: string
) => {
  let result: BreadcrumbItem[] = []
  const temporary: BreadcrumbItem[] = [] // 临时数组用于存储每个遍历的结果
  const rec = (
    breadcrumbResource: RoutesProps[],
    temporaryParam: BreadcrumbItem[]
  ) => {
    breadcrumbResource.forEach(item => {
      const temporary: BreadcrumbItem[] = [...temporaryParam] // 遍历中每次都需要根据原来的临时数组创建新的临时数组，不能只用一个
      const parentPath = temporary[temporary.length - 1]?.path || ''
      const completePath =
        parentPath === '/'
          ? realPath(item.path)
          : parentPath + realPath(item.path)
      if (pathname === completePath) {
        // 找到与当前页面路由匹配的那个
        temporary.push({ path: completePath, text: item.title })
        result = temporary // 到了这一步临时文件就是最终的结果
      } else if (Array.isArray(item.children) && item.children.length) {
        temporary.push({ path: completePath, text: item.title })
        rec(item.children, temporary)
      }
    })
  }
  rec(breadcrumbResource, temporary)
  return result
}

const Breadcrumb = ({
  separator,
  className,
  style,
  size,
  routes,
  currentPath,
  items = [],
  current,
  onClick
}: BreadcrumbProps) => {
  const [defaultSize] = useDefaultSize()
  let breadcrumbItems = items
  if (items?.length === 0 && Array.isArray(routes) && currentPath) {
    // 去掉path后面的斜杠/
    currentPath =
      currentPath.length === 1
        ? currentPath
        : currentPath.endsWith('/')
        ? trimEnd(currentPath, '/')
        : currentPath
    breadcrumbItems = parseBreadcrumbFromRoutes(routes, currentPath)
  }

  let currentItem: BreadcrumbItem | null = null
  if (current) {
    if (breadcrumbItems.length > 1 && !currentItem) {
      // 此处不能用pop，否则会不停剪掉breadcrumbItems
      currentItem = breadcrumbItems[
        breadcrumbItems.length - 1
      ] as BreadcrumbItem
      breadcrumbItems = breadcrumbItems.slice(0, breadcrumbItems.length - 1)
    }
  }

  return (
    <div
      className={componentClassNames(
        'pui-breadcrumb',
        { size: size || defaultSize },
        className
      )}
      style={style}
    >
      {current ? (
        <div className="pui-breadcrumb-currentItem">{currentItem?.text}</div>
      ) : null}
      {breadcrumbItems.map((item, inx) => {
        const Icon = item.icon
        return (
          <span key={'breadcrumb' + inx}>
            <div
              onClick={() => {
                if (item.path) {
                  onClick && onClick(item)
                }
              }}
              className={classNames('pui-breadcrumb-item', {
                'pui-breadcrumb-nonePath': !item.path
              })}
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
            {inx !== breadcrumbItems.length - 1 && (
              <div className="pui-breadcrumb-separator">
                {item.separator || separator}
              </div>
            )}
          </span>
        )
      })}
    </div>
  )
}

Breadcrumb.defaultProps = {
  separator: '/',
  currentPath: '/',
  current: false
}
export { Breadcrumb }
