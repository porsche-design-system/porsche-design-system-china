/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React, { CSSProperties, useEffect, useState } from 'react'
import { componentClassNames, overrideChildren } from '../../shared/class-util'
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
  size?: 'default' | 'small'

  /** 默认选中的面板  */
  defaultActiveKey?: string
}

const Tabs = ({
  className,
  style,
  size = 'default',
  defaultActiveKey = '',
  children
}: TabsProps) => {
  const [tabActiveKey, setTabActiveKey] = useState(defaultActiveKey)

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
      className={componentClassNames('pui-tabs', {}, className)}
      style={style}
    >
      <div className="pui-tabs-header">
        {tabHead.map((tabProps, inx) => (
          <div
            className={componentClassNames('pui-tab', {
              size,
              active: (tabProps.tabKey === tabActiveKey) + ''
            })}
            key={'TabKey' + inx}
            onClick={() => {
              setTabActiveKey(tabProps.tabKey!)
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

interface TabPaneProps {
  /** 选项卡头显示文字 */
  title: string

  /** 对应 activeKey */
  tabKey?: string

  /** 子组件 */
  children?: React.ReactNode
}

const TabPane = (props: TabPaneProps) => {
  return (
    <div
      style={{ display: (props as any).show ? 'block' : 'none' }}
      className="pui-tabs-content"
    >
      {props.children}
    </div>
  )
}

TabPane.displayName = 'TabPane'
export { Tabs, TabPane }
