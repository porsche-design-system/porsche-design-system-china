import React from 'react'
import { IconArrowHeadDown, IconArrowHeadRight } from '@pui-cn/icons'

import { Button, Tabs, TabPane, Menu, Dropdown } from '../..'
import './button.stories.scss'

export default {
  title: 'Foundation/Button',
  component: Button
}

export const ButtonStoryBook = () => {
  return (
    <div>
      <Button type="primary" marginRight="40px">
        Primary
      </Button>
      <Button type="primary" marginRight="40px" icon={IconArrowHeadRight}>
        Secondary
      </Button>
      <Button type="primary" marginRight="40px" icon={IconArrowHeadRight} />
      <Button type="text" marginRight="40px">
        Text
      </Button>
      <Button type="link" marginRight="40px">
        Link
      </Button>
    </div>
  )
}

ButtonStoryBook.storyName = 'Button'

export interface DropdownButtonProps {
  size?: 'medium' | 'small' | 'tiny'
  type?: 'default' | 'primary' | 'secondary' | 'text' | 'link'
  disabled?: boolean
  loading?: boolean
}

const DropdownButton = ({
  size,
  type = 'primary',
  disabled = false,
  loading = false
}: DropdownButtonProps) => {
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
      <div style={{ display: 'flex', marginRight: '40px' }}>
        <Dropdown
          overlay={defaultMenu}
          trigger="click"
          disabled={disabled || loading}
        >
          <Button
            type={type}
            suffixIcon={IconArrowHeadDown}
            disabled={disabled || loading}
            size={size}
            loading={loading}
          >
            更多
          </Button>
        </Dropdown>
      </div>
    </>
  )
}

export const ButtonStoryBook2 = () => {
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
    return (
      <>
        <div className="flex">
          <DropdownButton /> <DropdownButton type="secondary" />{' '}
          <DropdownButton type="default" /> <DropdownButton type="text" />{' '}
          <DropdownButton type="link" />{' '}
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
        <TabPane tabKey="Dropdown" title="the Drop-down Button">
          <Tab4 />
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
        <br />
        <br />
        <div className="flex">
          <DropdownButton disabled />
        </div>
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
        <br />
        <br />
        <div className="flex">
          <DropdownButton loading />
        </div>
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
      <br />

      <div className="flex">
        <DropdownButton size="tiny" />
        <DropdownButton size="tiny" disabled />
        <DropdownButton size="tiny" loading />
      </div>
    </div>
  )
}

ButtonStoryBook4.storyName = 'Tiny Size'
