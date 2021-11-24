/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React, { CSSProperties, useEffect, useState } from 'react'
import { useDefaultSize } from '../../shared/hooks'
import { componentClassNames, overrideChildren } from '../../shared/class-util'
import { TabPaneProps } from './tabpane'

import './tabs.scss'

export interface TabsProps {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 子组件 */
  children?: React.ReactNode

  /** 样式 */
  style?: CSSProperties

  /** 大小 */
  size?: 'medium' | 'small'

  /** 是否有细线 */
  hasLine?: boolean

  /** 默认选中的面板  */
  defaultActiveKey?: string

  /** 选中面板更改事件 */
  onActiveKeyChange?: (activeKey: string) => void
}

const Tabs = ({
  className,
  style,
  size,
  hasLine = false,
  defaultActiveKey = '',
  children,
  onActiveKeyChange
}: TabsProps) => {
  const [tabActiveKey, setTabActiveKey] = useState(defaultActiveKey)
  const [defaultSize] = useDefaultSize()
  size = size || defaultSize

  const tabHead: TabPaneProps[] = []
  let keyIndex = 0

  const newChildren = overrideChildren(
    children,
    (elementName, props: TabPaneProps) => {
      if (elementName === 'TabPane') {
        if (!props.tabKey) {
          props.tabKey = '$TabKey' + keyIndex
          keyIndex++
        }
        tabHead.push(props)
        ;(props as any).show = tabActiveKey === props.tabKey
      }
      return props
    }
  )

  useEffect(() => {
    if (!defaultActiveKey) {
      setTabActiveKey(tabHead[0].tabKey!)
    }
  }, [])

  return (
    <div
      className={componentClassNames('pui-tabs', { size: size as string }, className)}
      style={style}
    >
      <div className={componentClassNames('pui-tabs-header',{line: hasLine +''})}>
        {tabHead.map((tabProps, inx) => (
          <div
            className={componentClassNames('pui-tab', {
              size: size as string,
              active: (tabProps.tabKey === tabActiveKey) + ''
            })}
            key={'TabKey' + inx}
            onClick={() => {
              setTabActiveKey(tabProps.tabKey!)
              onActiveKeyChange && onActiveKeyChange(tabProps.tabKey!)
            }}
          >
            <span>{tabProps.title}</span>
          </div>
        ))}
      </div>
      <div className="pui-tabs-body">{newChildren}</div>
    </div>
  )
}

Tabs.displayName = 'Tabs'

export { Tabs }
