import React from 'react'
import { IconEdit, IconAdd } from '@pui/icons'
import { Dropdown, Menu } from '../..'

import './dropdown.stories.scss'

export default {
  title: 'Feedback/Dropdown',
  component: Dropdown
}
const oneMenu = (
  <Menu>
    <Menu.Item
      icon={<IconEdit />}
      selectAfter
      index="test1"
      onClick={() => {
        console.log('test1111')
      }}
    >
      test
    </Menu.Item>
    <Menu.Item
      icon={<IconAdd />}
      index="test2"
      onClick={() => console.log('test2')}
      selectAfter
      divider
    >
      test2
    </Menu.Item>
    <Menu.Item disabled index="test3">
      disabled
    </Menu.Item>
    <Menu.SubMenu title="submit" index="submit">
      <Menu.Item selectAfter index="submit1">
        test1
      </Menu.Item>
      <Menu.Item selectAfter index="submit2">
        about2
      </Menu.Item>
      <Menu.Item disabled index="submit3">
        prod3
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
)
const twoMenu = (
  <Menu>
    <Menu.ItemGroup title="ItemGroup">
      <Menu.Item index="test" icon={<IconEdit />} selectAfter>
        test
      </Menu.Item>
      <Menu.Item icon={<IconAdd />} selectAfter index="test2">
        <a href="http://react-dev.qa4.porsche-preview.cn/">PUI</a>
      </Menu.Item>
      <Menu.Item disabled index="disabled">
        disabled
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup title="ItemGroup">
      <Menu.Item selectAfter index="test3">
        test1
      </Menu.Item>
      <Menu.Item selectAfter index="about2">
        about2
      </Menu.Item>
      <Menu.Item disabled index="prod3">
        prod3
      </Menu.Item>
    </Menu.ItemGroup>
  </Menu>
)

export const ProgressStoryBook = () => {
  return (
    <div className="dropdown-demo dropdown-demo-one">
      <div className="test-one">
        <Dropdown overlay={oneMenu} trigger="click">
          <span>click: 下拉菜单</span>
        </Dropdown>
        <br />
        <Dropdown overlay={oneMenu} trigger="hover">
          <span>hover: 下拉菜单</span>
        </Dropdown>
      </div>
    </div>
  )
}

ProgressStoryBook.storyName = 'Menu'

export const ProgressStoryBook1 = () => {
  return (
    <div className="dropdown-demo">
      <div className="test-two">
        <Dropdown overlay={twoMenu} trigger="click">
          分组下拉菜单
        </Dropdown>
      </div>
    </div>
  )
}

ProgressStoryBook1.storyName = 'Grouping Menu'
