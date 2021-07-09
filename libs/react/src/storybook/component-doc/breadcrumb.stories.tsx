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
          { text: '首页', icon: IconHome, iconSize: 20, path: '/home' },
          {
            text: '车辆订单列表',
            icon: IconCar,
            iconSize: 30,
            path: '/order-list'
          },
          { text: '订单详情' }
        ]}
      />
      <br />
      <br />
      {clickedItem}
    </div>
  )
}
