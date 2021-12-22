import React from 'react'
import { Tabs, TabPane, Input } from '../..'

import './tabs.stories.scss'

export default {
  title: 'Data Display/Tabs',
  component: Tabs,
  subcomponents: { TabPane }
}

export const TabsStoryBook = () => {
  return (
    <div className="group">
      <div className="showcase">
        <div className="tabs-session-title">底部无线</div>
        <Tabs>
          <TabPane title="标题一">内容一</TabPane>
          <TabPane title="标题二">内容二</TabPane>
          <TabPane title="标题三">
            <Input label="用户名" />
          </TabPane>
        </Tabs>
      </div>
      <br />
      <br />

      <div className="showcase">
        <div className="tabs-session-title">底部有线</div>
        <Tabs hasLine>
          <TabPane title="标题一">内容一</TabPane>
          <TabPane title="标题二">内容二</TabPane>
          <TabPane title="标题三">
            <Input label="用户名" />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

TabsStoryBook.storyName = 'Tabs'
