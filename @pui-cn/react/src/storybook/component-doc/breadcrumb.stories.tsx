import React, { useState } from 'react'
import { IconCar, IconHome, IconCalendar } from '@pui-cn/icons'
import { Breadcrumb, Tabs, TabPane } from '../..'

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb
}

export const BreadcrumbStoryBook = () => {
  const Tab1 = () => {
    const [clickedItem, setClickedItem] = useState('')
    return (
      <>
        <Breadcrumb
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
      </>
    )
  }

  const Tab2 = () => {
    const [clickedItem, setClickedItem] = useState('')
    return (
      <>
        <Breadcrumb
          onClick={item => {
            setClickedItem(JSON.stringify(item))
          }}
          items={[
            {
              text: '首页',
              icon: IconHome,
              path: '/home'
            },
            {
              icon: IconCar,
              text: '车辆订单列表',
              path: '/order-list'
            },
            {
              icon: IconCalendar,
              text: '订单详情'
            }
          ]}
        />
        <br />
        {clickedItem}
      </>
    )
  }

  const Tab3 = () => {
    const [clickedItem, setClickedItem] = useState('')
    return (
      <>
        <Breadcrumb
          separator=">"
          onClick={item => {
            setClickedItem(JSON.stringify(item))
          }}
          items={[
            { text: '首页', path: '/home' },
            {
              text: '车辆订单列表',
              path: '/order-list',
              separator: ':'
            },
            { text: '订单详情' }
          ]}
        />
        <br />
        {clickedItem}
      </>
    )
  }

  const routeList = [
    {
      path: '/',
      title: '建站流程',
      element: null,
      children: [
        {
          path: 'stations',
          title: '场站管理',
          element: null,
          children: [
            {
              path: 'detail',
              title: '场站详情',
              element: null
            },
            {
              path: 'create',
              title: '新建场站',
              element: null
            }
          ]
        },
        {
          path: 'test',
          title: '测试路由',
          element: null,
          children: [
            {
              path: 'detail',
              title: '测试路由子页面',
              element: <div>测试子页面</div>
            }
          ]
        },
        {
          path: '*',
          title: '未知',
          element: null
        }
      ]
    }
  ]

  const Tab4 = () => {
    const [clickedItem, setClickedItem] = useState('')
    return (
      <>
        <small style={{ color: '#666' }}>
          通过传入路由嵌套结构与当前路由匹配：
        </small>
        <br />
        <br />
        <Breadcrumb
          separator=">"
          onClick={item => {
            setClickedItem(JSON.stringify(item))
          }}
          routes={routeList}
          currentPath="/stations/detail"
        />
        <br />
        <Breadcrumb
          separator=">"
          onClick={item => {
            setClickedItem(JSON.stringify(item))
          }}
          routes={routeList}
          currentPath="/stations/detail"
          current
        />
        <br />
        {clickedItem}
      </>
    )
  }
  return (
    <>
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
        <TabPane tabKey="Routes" title="Routes">
          <Tab4 />
        </TabPane>
      </Tabs>
    </>
  )
}
BreadcrumbStoryBook.storyName = 'Breadcrumb'
