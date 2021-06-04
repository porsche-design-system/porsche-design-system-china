import React from 'react'
import {
  IconChat,
  IconArrowHeadRight,
  IconArrowRight,
  IconEdit,
  IconAdd,
  IconBell,
  IconClose
} from '@pui/icons'
import { Dropdown, Menu } from '../..'

import './dropdown.stories.scss'

export default {
  title: 'Feedback/Dropdown',
  component: Dropdown
}
const oneMenu = (
  <Menu>
    <Menu.Item icon={<IconEdit />} selectAfter>
      test
    </Menu.Item>
    <Menu.Item icon={<IconAdd />} selectAfter divider>
      <a href="https://baidu.com">百度</a>
    </Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.SubMenu title="submit" subStyle={{ right: -208 }}>
      <Menu.Item selectAfter>test1</Menu.Item>
      <Menu.Item selectAfter>about2</Menu.Item>
      <Menu.Item disabled>prod3</Menu.Item>
    </Menu.SubMenu>
  </Menu>
)
const twoMenu = (
  <Menu>
    <Menu.ItemGroup title="ItemGroup">
      <Menu.Item icon={<IconEdit />} selectAfter>
        test
      </Menu.Item>
      <Menu.Item icon={<IconAdd />} selectAfter>
        <a href="https://baidu.com">百度</a>
      </Menu.Item>
      <Menu.Item disabled>disabled</Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup title="ItemGroup">
      <Menu.Item selectAfter>test1</Menu.Item>
      <Menu.Item selectAfter>about2</Menu.Item>
      <Menu.Item disabled>prod3</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
)
export const ProgressStoryBook = () => {
  return (
    <div className="dropdown-demo">
      <div className="test-one">
        <Dropdown overlay={oneMenu} trigger="click">
          下拉菜单
        </Dropdown>
      </div>
      <div className="test-two">
        <Dropdown overlay={twoMenu} trigger="click">
          分组下拉菜单
        </Dropdown>
      </div>
    </div>
  )
}

ProgressStoryBook.storyName = 'Menu'
