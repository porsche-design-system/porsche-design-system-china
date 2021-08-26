/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React from 'react'
import './tabs.scss'

export interface TabPaneProps {
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
export { TabPane }
