import React, { useEffect } from 'react'
import { IconArrowHeadRight } from '@pui/icons'

import { Button, Tabs, TabPane } from '../..'
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
  const Tab1 = () => {
    return (
      <>
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
