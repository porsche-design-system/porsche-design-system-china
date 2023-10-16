import React, { useState } from 'react'
import {
  IconEdit,
  IconAdd,
  IconDelete,
  IconSend,
  IconDownload,
  IconEmail,
  IconQq,
  IconWechat
} from '@pui-cn/icons'
import { Dropdown, Menu, Button, Tabs, TabPane, Form } from '../..'

import './dropdown.stories.scss'

export default {
  title: 'Feedback/Dropdown',
  component: Dropdown
}

export const DropdownStoryBook = () => {
  const defaultMenu = (
    <Menu>
      <Menu.Item
        index="add"
        onClick={() => {
          console.log('test1111')
        }}
      >
        新增
      </Menu.Item>
      <Menu.Item
        index="test1"
        onClick={() => {
          console.log('test1111')
        }}
      >
        编辑
      </Menu.Item>
      <Menu.Item index="test2" onClick={() => console.log('test2')}>
        分享
      </Menu.Item>
      <Menu.Item divider disabled index="test3">
        下载
      </Menu.Item>
      <Menu.Item index="delete">删除</Menu.Item>
    </Menu>
  )
  const iconMenu = (
    <Menu>
      <Menu.ItemGroup title="操作选项">
        <Menu.Item
          icon={<IconAdd />}
          index="add"
          onClick={() => {
            console.log('test1111')
          }}
        >
          新增
        </Menu.Item>
        <Menu.Item
          index="test1"
          icon={<IconEdit />}
          onClick={() => {
            console.log('test1111')
          }}
        >
          编辑
        </Menu.Item>
        <Menu.Item
          icon={<IconSend />}
          index="test2"
          onClick={() => console.log('test2')}
        >
          分享
        </Menu.Item>
        <Menu.Item icon={<IconDownload />} disabled index="test3">
          下载
        </Menu.Item>
        <Menu.Item icon={<IconDelete />} index="delete">
          删除
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="内容分组">
        <Menu.Item icon={<IconSend />} index="test3">
          test1
        </Menu.Item>
        <Menu.Item icon={<IconSend />} index="about2">
          about2
        </Menu.Item>
        <Menu.Item icon={<IconSend />} index="prod3">
          prod3
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )

  const subMenu = (
    <Menu>
      <Menu.Item
        icon={<IconAdd />}
        index="add"
        onClick={() => {
          console.log('test1111')
        }}
      >
        新增
      </Menu.Item>
      <Menu.Item
        index="test1"
        icon={<IconEdit />}
        onClick={() => {
          console.log('test1111')
        }}
      >
        编辑
      </Menu.Item>
      <Menu.SubMenu divider icon={<IconSend />} title="分享" index="submit">
        <Menu.Item icon={<IconEmail />} index="submit1">
          邮件
        </Menu.Item>
        <Menu.Item icon={<IconQq />} index="submit2">
          短信
        </Menu.Item>
        <Menu.Item icon={<IconWechat />} disabled index="submit3">
          微信
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item icon={<IconDelete />} index="delete">
        删除
      </Menu.Item>
    </Menu>
  )

  const Tab1 = () => (
    <Form>
      <br />
      <Dropdown overlay={defaultMenu} trigger="click">
        <Button type="primary">嵌套按钮</Button>
      </Dropdown>
      <br />
      <div>
        <Dropdown overlay={defaultMenu} trigger="click">
          无图标样式
        </Dropdown>
      </div>
    </Form>
  )
  const Tab2 = () => (
    <Dropdown overlay={iconMenu} trigger="click">
      图标+分组
    </Dropdown>
  )
  const Tab3 = () => (
    <Dropdown trigger="click" overlay={subMenu}>
      图标+子菜单
    </Dropdown>
  )
  const Tab4 = () => {
    const [visible, setVisible] = useState(false)
    return (
      <Dropdown
        trigger="click"
        overlay={defaultMenu}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <Button type="primary" onClick={() => setVisible(!visible)}>
          受控显示
        </Button>
      </Dropdown>
    )
  }
  return (
    <div>
      <Tabs hasLine>
        <TabPane tabKey="IconText" title="Default + Dropdown">
          <div className="dropdown-demo">
            <Tab1 />
          </div>
        </TabPane>
        <TabPane tabKey="Icon" title="Icon + Dropdown">
          <div className="dropdown-demo">
            <Tab2 />
          </div>
        </TabPane>
        <TabPane tabKey="Text" title="SubMenu + Dropdown">
          <div className="dropdown-demo">
            <Tab3 />
          </div>
        </TabPane>
        <TabPane tabKey="Controlled" title="Controlled">
          <div className="dropdown-demo">
            <Tab4 />
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}
DropdownStoryBook.storyName = 'DropdownStoryBook'
