import { IconArrowHeadDown } from '@pui/icons'
import React from 'react'

import { Menu, Button } from '../..'
import './menu.stories.scss'

const { Item, ItemGroup, SubMenu } = Menu

export default {
  title: 'Feedback/Menu',
  component: Menu,
  subcomponents: { Item, ItemGroup, SubMenu }
}

export const MenuStoryBook1 = () => {
  const [index, setIndex] = React.useState('submit-test')
  const [hiddenItem, setHiddenItem] = React.useState(true)
  return (
    <div className="menu-demo">
      <h1>使用 Menu 与 MenuItem 构建基础菜单</h1>
      <div className="test-one">
        <Menu activeIndex={index} onSelect={setIndex}>
          <Menu.Item
            index="test"
            onClick={() => console.log('onClick事件', '点击了 test')}
          >
            test
          </Menu.Item>
          <Menu.Item
            index="test visible"
            visible={hiddenItem}
            onClick={() => console.log('onClick事件', '点击了 test')}
          >
            test visible
          </Menu.Item>
          <Menu.Item index="about">about</Menu.Item>
          <Menu.Item disabled index="prod">
            prod
          </Menu.Item>
        </Menu>
      </div>
      <br />
      <Button onClick={() => setHiddenItem(!hiddenItem)}>菜单是否显示</Button>
    </div>
  )
}

MenuStoryBook1.storyName = 'Menu Horizontal'

export const MenuStoryBook2 = () => {
  const [index, setIndex] = React.useState('test')
  const [hiddenItem, setHiddenItem] = React.useState(true)
  return (
    <div className="menu-demo">
      <h1>使用 Menu 、SubMenu、MenuItem 构建下拉菜单</h1>
      <div className="test-one">
        <Menu activeIndex={index} onSelect={setIndex}>
          <Menu.Item
            index="test"
            onClick={() => console.log('onClick事件', '点击了 test')}
          >
            test
          </Menu.Item>

          <Menu.SubMenu
            title={
              <>
                Submit <IconArrowHeadDown />
              </>
            }
            index="submit"
            disabled
            onClick={() => console.log('onClick事件', '点击了子标题')}
          >
            <Menu.Item index="submit-test" visible={hiddenItem}>
              test visible1
            </Menu.Item>
            <Menu.Item index="submit-about">about2</Menu.Item>
            <Menu.Item disabled index="submit-prod">
              prod3
            </Menu.Item>
            <Menu.Item index="submit-test1">submit-test1</Menu.Item>
            <Menu.Item index="submit-about2" visible={hiddenItem}>
              submit-visible
            </Menu.Item>
            <Menu.Item disabled index="submit-prod3">
              prod3
            </Menu.Item>
            <Menu.SubMenu title="submit-submit" index="submit-submit">
              <Menu.Item index="submit-submit-test1">test1</Menu.Item>
              <Menu.Item index="submit-submit-about2">about2</Menu.Item>
              <Menu.Item index="submit-submit-visible" visible={hiddenItem}>
                submit-visible
              </Menu.Item>
              <Menu.Item visible={hiddenItem} index="submit-submit-prod3">
                prod3
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu
            title={
              <>
                Submit <IconArrowHeadDown />
              </>
            }
            index="submit-submit4"
          >
            <Menu.Item selectAfter index="submit-submit-test14">
              test1
            </Menu.Item>
            <Menu.Item selectAfter index="submit-submit-about24">
              about2
            </Menu.Item>
            <Menu.Item disabled index="submit-submit-prod34">
              prod4
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <br />
        <br />
        <h2>使用 Menu trigger: `click` 点击下拉菜单</h2>
        <Menu activeIndex={index} onSelect={setIndex} trigger="click">
          <Menu.SubMenu
            title={
              <>
                Submit <IconArrowHeadDown />
              </>
            }
            index="submit"
            onClick={() => console.log('onClick事件', '点击了子标题')}
          >
            <Menu.Item index="submit-test" visible={hiddenItem}>
              test visible1
            </Menu.Item>
            <Menu.Item index="submit-about">about2</Menu.Item>
            <Menu.Item disabled index="submit-prod">
              prod3
            </Menu.Item>
            <Menu.Item index="submit-test1">submit-test1</Menu.Item>
            <Menu.Item index="submit-about2" visible={hiddenItem}>
              submit-visible
            </Menu.Item>
            <Menu.Item disabled index="submit-prod3">
              prod3
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            title={
              <>
                Submit <IconArrowHeadDown />
              </>
            }
            index="submit-submit4"
          >
            <Menu.Item selectAfter index="submit-submit-test14">
              test1
            </Menu.Item>
            <Menu.Item selectAfter index="submit-submit-about24">
              about2
            </Menu.Item>
            <Menu.Item disabled index="submit-submit-prod34">
              prod4
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <br />
        <br />
        <Button onClick={() => setIndex('submit-submit-test14')}>
          {' '}
          设置默认值{' '}
        </Button>
        <br />
        <br />
        <Button onClick={() => setHiddenItem(!hiddenItem)}>菜单是否显示</Button>
      </div>
    </div>
  )
}

MenuStoryBook2.storyName = 'SubMenu '
export const MenuStoryBook3 = () => {
  const [index, setIndex] = React.useState('test')
  return (
    <div className="menu-demo">
      <h1>small menu</h1>
      <div className="test-one">
        <Menu activeIndex={index} onSelect={setIndex} size="small">
          <Menu.Item
            index="test"
            onClick={() => console.log('onClick事件', '点击了 test')}
          >
            test
          </Menu.Item>
          <Menu.Item index="test2">test2</Menu.Item>
          <Menu.Item index="test3">test3</Menu.Item>
          <Menu.SubMenu title="submit-submit4" index="submit-submit4">
            <Menu.Item selectAfter index="submit-submit-test14">
              test1
            </Menu.Item>
            <Menu.Item selectAfter index="submit-submit-about24">
              about2
            </Menu.Item>
            <Menu.Item disabled index="submit-submit-prod34">
              prod4
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </div>
  )
}

MenuStoryBook3.storyName = 'Small Menu '
