import React, { useState } from 'react'
import { IconCar, IconHome } from '@pui/icons'
import { Breadcrumb } from '../..'

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb
}

export const BreadcrumbStoryBook = () => {
  const [clickedItem, setClickedItem] = useState('')

  return (
    <div>
      <Breadcrumb
        onClick={item => {
          setClickedItem(JSON.stringify(item))
        }}
        items={[
          { text: '首页', icon: IconHome, iconSize: 24, path: '/home' },
          {
            text: '车辆订单列表',
            icon: IconCar,
            iconSize: 28,
            path: '/order-list'
          },
          { text: '订单详情' }
        ]}
      />
      <br />
      <Breadcrumb
        size="small"
        onClick={item => {
          setClickedItem(JSON.stringify(item))
        }}
        items={[
          { text: '首页', icon: IconHome, iconSize: 18, path: '/home' },
          {
            text: '车辆订单列表',
            icon: IconCar,
            iconSize: 24,
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
