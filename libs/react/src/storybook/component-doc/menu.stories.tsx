import React from 'react'
import { Menu } from '../..'
import {
  IconChat,
  IconArrowHeadRight,
  IconArrowRight,
  IconEdit,
  IconAdd,
  IconBell,
  IconClose
} from '@pui/icons'
import './menu.stories.scss'

export default {
  title: 'Feedback/Menu',
  component: Menu
}

export const ProgressStoryBook = () => {
  return (
    <div className="menu-demo">
      <div className="test-one">
        <Menu>
          <Menu.Item>test</Menu.Item>
          <Menu.Item>about</Menu.Item>
          <Menu.Item disabled>prod</Menu.Item>
          <Menu.SubMenu title="submit">
            <Menu.Item>test1</Menu.Item>
            <Menu.Item>about2</Menu.Item>
            <Menu.Item disabled>prod3</Menu.Item>
            <Menu.SubMenu title="submit-submit">
              <Menu.Item>test1</Menu.Item>
              <Menu.Item>about2</Menu.Item>
              <Menu.Item disabled>prod3</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu>
      </div>
      <div className="test-two">
        <Menu mode="vertical">
          <Menu.Item icon={<IconEdit />} selectAfter>test</Menu.Item>
          <Menu.Item icon={<IconAdd />} selectAfter>about</Menu.Item>
          <Menu.Item disabled icon={<IconEdit />} selectAfter>prod</Menu.Item>
          <Menu.SubMenu title="submit">
            <Menu.Item icon={<IconEdit />} selectAfter>test1</Menu.Item>
            <Menu.Item icon={<IconBell />} selectAfter>about2</Menu.Item>
            <Menu.Item disabled icon={<IconEdit />} selectAfter>prod3</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </div>
  )
}

ProgressStoryBook.storyName = 'Menu'
