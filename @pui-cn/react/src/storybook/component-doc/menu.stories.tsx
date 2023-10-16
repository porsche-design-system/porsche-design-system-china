import React, { useEffect } from 'react'
import { IconArrowHeadDown } from '@pui-cn/icons'
import { Menu, Button } from '../..'
import './menu.stories.scss'

const { Item, ItemGroup, SubMenu } = Menu

export default {
  title: 'Feedback/Menu',
  component: Menu,
  subcomponents: { Item, ItemGroup, SubMenu }
}
export const MenuStoryBook = () => {
  useEffect(() => {
    const mainStory = document.getElementById(
      'anchor--feedback-menu--menu-story-book'
    )
    if (mainStory) {
      mainStory.style.display = 'none'
    }
    const mainTitles = document.getElementsByClassName('sbdocs-title')
    if (mainTitles.length > 0) {
      const mainTitle = mainTitles[0] as HTMLElement
      mainTitle.style.marginBottom = '48px'
    }
  })
  return <div />
}

MenuStoryBook.storyName = 'Menu'
export const MenuStoryBook1 = () => {
  const [index, setIndex] = React.useState('submit-test')
  const [hiddenItem, setHiddenItem] = React.useState(true)
  return (
    <div className="menu-demo base-menu">
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
      <Button onClick={() => setHiddenItem(!hiddenItem)} marginLeft="24px">
        菜单是否显示
      </Button>
    </div>
  )
}

MenuStoryBook1.storyName = '使用 Menu 与 MenuItem 构建基础菜单'

export const MenuStoryBook2 = () => {
  const [index, setIndex] = React.useState('test')
  const [hiddenItem, setHiddenItem] = React.useState(true)
  return (
    <div className="menu-demo">
      <div className="test-submenu">
        <div className="btn-group">
          <Button
            onClick={() => setIndex('submit-submit-test14')}
            marginRight="12px"
          >
            设置默认值{' '}
          </Button>
          <Button onClick={() => setHiddenItem(!hiddenItem)}>
            菜单是否显示
          </Button>
        </div>
        <h3>使用 Menu trigger: `hover` 点击下拉菜单</h3>
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
                  Submit 1<IconArrowHeadDown />
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
                  SubMenu 2 <IconArrowHeadDown />
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
        </div>
        <h3>使用 Menu trigger: `click` 点击下拉菜单</h3>
        <div className="test-one">
          <Menu activeIndex={index} onSelect={setIndex} trigger="click">
            <Menu.SubMenu
              title={
                <>
                  SubMenu 3 <IconArrowHeadDown />
                </>
              }
              index="click-submit"
              onClick={() => console.log('onClick事件', '点击了子标题')}
            >
              <Menu.Item index="click-submit-test" visible={hiddenItem}>
                test visible1
              </Menu.Item>
              <Menu.Item index="click-submit-about">about2</Menu.Item>
              <Menu.Item disabled index="click-submit-prod">
                prod3
              </Menu.Item>
              <Menu.Item index="click-submit-test1">submit-test1</Menu.Item>
              <Menu.Item index="click-submit-about2" visible={hiddenItem}>
                submit-visible
              </Menu.Item>
              <Menu.Item disabled index="click-submit-prod3">
                prod3
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              title={
                <>
                  SubMenu 4 <IconArrowHeadDown />
                </>
              }
              index="click-submit-submit4"
            >
              <Menu.Item selectAfter index="click-submit-submit-test14">
                test1
              </Menu.Item>
              <Menu.Item selectAfter index="click-submit-submit-about24">
                about2
              </Menu.Item>
              <Menu.Item disabled index="click-submit-submit-prod34">
                prod4
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    </div>
  )
}

MenuStoryBook2.storyName = '使用 Menu 、SubMenu、MenuItem 构建下拉菜单 '
