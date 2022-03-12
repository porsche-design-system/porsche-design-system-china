import React, { useState } from 'react'
import { IconCar, IconHome } from '@pui/icons'
import { Breadcrumb, Tabs, TabPane } from '../..'

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb
}

export const BreadcrumbStoryBook = () => {
  const Tab1 = () => {
    const [clickedItem, setClickedItem] = useState('')
    return (
      <div>
        <Breadcrumb
          separator="-"
          onClick={item => {
            setClickedItem(JSON.stringify(item))
          }}
          items={[
            { text: '首页', path: '/home' },
            {
              text: '车辆订单列表',
              path: '/order-list'
            },
            { text: '订单详情' }
          ]}
        />
        <br />
        {clickedItem}
      </div>
    )
  }

  const Tab2 = () => {
    const [clickedItem, setClickedItem] = useState('')
    return (
      <div>
        <Breadcrumb
          onClick={item => {
            setClickedItem(JSON.stringify(item))
          }}
          items={[
            { text: '首页', icon: IconHome, path: '/home' },
            {
              icon: IconCar,
              text: '车辆订单列表',
              path: '/order-list'
            },
            { text: '订单详情' }
          ]}
        />
        <br />
        {clickedItem}
      </div>
    )
  }

  const Tab3 = () => {
    const [clickedItem, setClickedItem] = useState('')
    return (
      <div>
        <Breadcrumb
          separator=">"
          onClick={item => {
            setClickedItem(JSON.stringify(item))
          }}
          items={[
            { text: '首页', path: '/home' },
            {
              text: '车辆订单列表',
              path: '/order-list'
            },
            { text: '订单详情' }
          ]}
        />
        <br />
        {clickedItem}
      </div>
    )
  }
  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="Text" title="Default">
          <Tab1 />
        </TabPane>
        <TabPane tabKey="Icon" title="Icon">
          <Tab2 />
        </TabPane>
        <TabPane tabKey="Separator" title="Separator">
          <Tab3 />
        </TabPane>
      </Tabs>
    </div>
  )
}
BreadcrumbStoryBook.storyName = ''
