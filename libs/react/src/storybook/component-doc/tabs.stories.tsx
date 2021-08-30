import React from 'react'
import { Tabs, TabPane, Input } from '../..'

export default {
  title: 'Data Display/Tabs',
  component: Tabs,
  subcomponents: { TabPane }
}

export const TabsStoryBook = () => {
  return (
    <div className="group">
      <div className="showcase">
        <Tabs>
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
