import React, { useEffect } from 'react'
import {
  IconArrowHeadDown,
  IconArrowHeadRight,
  IconEdit,
  IconUpload
} from '@pui/icons'

import { Button, Tabs, TabPane, Menu, Dropdown } from '../..'
import './button.stories.scss'

export default {
  title: 'Foundation/Button',
  component: Button
}

export const ButtonStoryBook = () => {
  useEffect(() => {
    const mainStory = document.getElementById(
      'anchor--foundation-button--button-story-book'
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

ButtonStoryBook.storyName = 'Button'

export const ButtonStoryBook2 = () => {
  // const defaultMenu = (
  //   <Menu>
  //     <Menu.Item
  //       index="upload1"
  //       onClick={() => {
  //         console.log('PVMS订单号导入')
  //       }}
  //     >
  //       PVMS订单号导入
  //     </Menu.Item>
  //     <Menu.Item
  //       index="upload2"
  //       onClick={() => {
  //         console.log('Excel导入')
  //       }}
  //     >
  //       Excel导入
  //     </Menu.Item>
  //   </Menu>
  // )
  const Tab1 = () => {
    return (
      <>
        <div>
          <Button type="primary" marginRight="40px" icon={IconArrowHeadRight}>
            Primary
          </Button>
          <Button type="secondary" marginRight="40px" icon={IconArrowHeadRight}>
            Secondary
          </Button>
          <Button type="default" marginRight="40px" icon={IconArrowHeadRight}>
            Default
          </Button>
          <Button type="text" marginRight="40px" icon={IconArrowHeadRight}>
            Text
          </Button>
          <Button type="link" marginRight="40px">
            Link
          </Button>
        </div>
        <br />
        <div>
          <Button
            type="primary"
            marginRight="40px"
            suffixIcon={IconArrowHeadDown}
          >
            Primary
          </Button>
          <Button
            type="secondary"
            marginRight="40px"
            suffixIcon={IconArrowHeadDown}
          >
            Secondary
          </Button>
          <Button
            type="default"
            marginRight="40px"
            suffixIcon={IconArrowHeadDown}
          >
            Default
          </Button>
          <Button type="text" marginRight="40px" suffixIcon={IconArrowHeadDown}>
            Text
          </Button>
        </div>
        {/* <br />
        <div style={{ width: '200px' }}>
          <Dropdown overlay={defaultMenu} trigger="click">
            <Button
              type="default"
              icon={IconUpload}
              suffixIcon={IconArrowHeadDown}
            >
              导入
            </Button>
          </Dropdown>
        </div> */}
      </>
    )
  }

  const Tab2 = () => {
    return (
      <>
        <Button type="primary" marginRight="40px" icon={IconArrowHeadRight} />
        <Button type="secondary" marginRight="40px" icon={IconArrowHeadRight} />
        <Button type="default" marginRight="40px" icon={IconArrowHeadRight} />
        <Button type="text" marginRight="40px" icon={IconArrowHeadRight} />
      </>
    )
  }

  const Tab3 = () => {
    return (
      <>
        <Button type="primary" marginRight="40px">
          Primary
        </Button>
        <Button type="secondary" marginRight="40px">
          Secondary
        </Button>
        <Button type="default" marginRight="40px">
          Default
        </Button>
        <Button type="text" marginRight="40px">
          Text
        </Button>
        <Button type="link" marginRight="40px">
          Link
        </Button>
      </>
    )
  }

  const Tab4 = () => {
    const [index, setIndex] = React.useState('sign')
    const defaultMenu = (
      <Menu activeIndex={index} onSelect={setIndex}>
        <Menu.Item
          selectAfter
          index="sign"
          onClick={() => {
            console.log('电子签署')
          }}
        >
          电子签署
        </Menu.Item>
        <Menu.Item
          selectAfter
          index="item2"
          onClick={() => {
            console.log(' 2nd Item')
          }}
        >
          2nd Item
        </Menu.Item>
        <Menu.Item
          selectAfter
          index="item3"
          onClick={() => {
            console.log(' 3nd Item')
          }}
        >
          3rd Item
        </Menu.Item>
        <Menu.Item
          selectAfter
          index="item4"
          onClick={() => {
            console.log(' 4nd Item')
          }}
        >
          4th Item
        </Menu.Item>
      </Menu>
    )

    return (
      <>
        <div style={{ width: '180px', display: 'flex' }}>
          <Button type="primary" icon={IconEdit}>
            电子签署
          </Button>

          <div className="afterAddon">
            <Dropdown overlay={defaultMenu} trigger="click">
              <Button type="primary" icon={IconArrowHeadDown} />
            </Dropdown>
          </div>
        </div>
      </>
    )
  }

  const Tab5 = () => {
    const [index, setIndex] = React.useState('link1')
    const defaultMenu = (
      <Menu activeIndex={index} onSelect={setIndex}>
        <Menu.Item
          index="link1"
          onClick={() => {
            console.log('link 1')
          }}
        >
          1st Link
        </Menu.Item>
        <Menu.Item
          index="link2"
          onClick={() => {
            console.log(' link 2')
          }}
        >
          2nd Link
        </Menu.Item>
        <Menu.Item
          index="link3"
          onClick={() => {
            console.log('link 3')
          }}
        >
          3rd Link
        </Menu.Item>
        <Menu.Item
          index="link4"
          onClick={() => {
            console.log('link4')
          }}
        >
          4th Link
        </Menu.Item>
      </Menu>
    )

    return (
      <>
        <div style={{ width: '180px', display: 'flex' }}>
          <Dropdown overlay={defaultMenu} trigger="click">
            <Button type="primary" suffixIcon={IconArrowHeadDown}>
              更多
            </Button>
          </Dropdown>
        </div>
      </>
    )
  }
  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="IconText" title="Icon + Text">
          <Tab1 />
        </TabPane>
        <TabPane tabKey="Icon" title="Icon">
          <Tab2 />
        </TabPane>
        <TabPane tabKey="Text" title="Text">
          <Tab3 />
        </TabPane>
        <TabPane tabKey="Split" title="the Split Button">
          <Tab4 />
        </TabPane>
        <TabPane tabKey="Dropdown" title="the Drop-down Button">
          <Tab5 />
        </TabPane>
      </Tabs>
    </div>
  )
}

ButtonStoryBook2.storyName = 'Types'

export const ButtonStoryBook3 = () => {
  const Tab1 = () => {
    return (
      <>
        <Button
          type="primary"
          marginRight="40px"
          icon={IconArrowHeadRight}
          disabled
        >
          Primary
        </Button>
        <Button
          type="secondary"
          marginRight="40px"
          icon={IconArrowHeadRight}
          disabled
        >
          Secondary
        </Button>
        <Button
          type="default"
          marginRight="40px"
          icon={IconArrowHeadRight}
          disabled
        >
          Default
        </Button>
        <Button
          type="text"
          marginRight="40px"
          icon={IconArrowHeadRight}
          disabled
        >
          Text
        </Button>
        <Button type="link" marginRight="40px" disabled>
          Link
        </Button>
      </>
    )
  }

  const Tab2 = () => {
    return (
      <>
        <Button
          type="primary"
          marginRight="40px"
          icon={IconArrowHeadRight}
          loading
        >
          Primary
        </Button>
        <Button
          type="secondary"
          marginRight="40px"
          icon={IconArrowHeadRight}
          loading
        >
          Secondary
        </Button>
        <Button
          type="default"
          marginRight="40px"
          icon={IconArrowHeadRight}
          loading
        >
          Default
        </Button>
        <Button
          type="text"
          marginRight="40px"
          icon={IconArrowHeadRight}
          loading
        >
          Text
        </Button>
        <Button type="link" marginRight="40px" loading>
          Link
        </Button>
      </>
    )
  }

  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="Disabled" title="Disabled">
          <Tab1 />
        </TabPane>
        <TabPane tabKey="Loading" title="Loading">
          <Tab2 />
        </TabPane>
      </Tabs>
    </div>
  )
}

ButtonStoryBook3.storyName = 'Status'

export const ButtonStoryBook4 = () => {
  return (
    <div>
      <div>
        <Button
          size="tiny"
          type="primary"
          marginRight="40px"
          icon={IconArrowHeadRight}
        >
          Primary
        </Button>
        <Button
          size="tiny"
          type="secondary"
          marginRight="40px"
          icon={IconArrowHeadRight}
        >
          Secondary
        </Button>
        <Button
          size="tiny"
          type="default"
          marginRight="40px"
          icon={IconArrowHeadRight}
        >
          Default
        </Button>
        <Button
          size="tiny"
          type="text"
          marginRight="40px"
          icon={IconArrowHeadRight}
        >
          Text
        </Button>
        <Button size="tiny" type="link" marginRight="40px">
          Link
        </Button>
      </div>
      <br />
      <div>
        <Button size="tiny" type="primary" marginRight="40px" loading>
          Primary
        </Button>
        <Button size="tiny" type="secondary" marginRight="40px" loading>
          Secondary
        </Button>
        <Button size="tiny" type="default" marginRight="40px" loading>
          Default
        </Button>
        <Button size="tiny" type="text" marginRight="40px" loading>
          Text
        </Button>
        <Button size="tiny" type="text" marginRight="40px">
          Link
        </Button>
      </div>
      <br />
      <div>
        <Button size="tiny" type="primary" marginRight="40px" disabled>
          Primary
        </Button>
        <Button size="tiny" type="secondary" marginRight="40px" disabled>
          Secondary
        </Button>
        <Button size="tiny" type="default" marginRight="40px" disabled>
          Default
        </Button>
        <Button size="tiny" type="text" marginRight="40px" disabled>
          Text
        </Button>
        <Button size="tiny" type="text" marginRight="40px" disabled>
          Link
        </Button>
      </div>
      <br />
      <div>
        <Button
          size="tiny"
          type="primary"
          marginRight="40px"
          icon={IconArrowHeadRight}
        />
        <Button
          size="tiny"
          type="secondary"
          marginRight="40px"
          icon={IconArrowHeadRight}
        />
        <Button
          size="tiny"
          type="default"
          marginRight="40px"
          icon={IconArrowHeadRight}
        />
        <Button
          size="tiny"
          type="text"
          marginRight="40px"
          icon={IconArrowHeadRight}
        />
      </div>
    </div>
  )
}

ButtonStoryBook4.storyName = 'Tiny Size'
