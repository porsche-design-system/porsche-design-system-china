import React, { useState } from 'react'
import { Tabs, TabPane, Input } from '../..'

import './tabs.stories.scss'

export default {
  title: 'Data Display/Tabs',
  component: Tabs,
  subcomponents: { TabPane }
}

export const TabsStoryBook = () => {
  const [currentTab, setCurrentTab] = useState('Tab3')
  const [currentTab2, setCurrentTab2] = useState('Tab18')
  const tabArray = new Array(30).fill(1).map((_, index) => `Tab${index + 1}`)

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

      <br />
      <br />

      <div className="showcase">
        <div className="tabs-session-title">受控Tab</div>
        <Tabs hasLine activeKey={currentTab} onActiveKeyChange={setCurrentTab}>
          <TabPane title="标题一" tabKey="Tab1">
            内容一
          </TabPane>
          <TabPane title="标题二" tabKey="Tab2">
            内容二
          </TabPane>
          <TabPane title="标题三" tabKey="Tab3">
            <Input label="用户名" />
          </TabPane>
        </Tabs>
      </div>

      <br />
      <br />

      <div className="showcase">
        <div className="tabs-session-title">溢出Tab</div>
        <Tabs
          scrollable
          hasLine
          activeKey={currentTab2}
          onActiveKeyChange={setCurrentTab2}
        >
          {tabArray.map((tab, index) => (
            <TabPane title={`标题${index + 1}`} tabKey={tab}>
              内容{index + 1}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

TabsStoryBook.storyName = 'Tabs'
