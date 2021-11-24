import React, { useEffect, useState } from 'react'
import { IconArrowHeadRight } from '@pui/icons'

import { Button, Radio, RadioGroup, Tabs, TabPane } from '../..'
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
  const [buttonType, setButtonType] = useState('IconText')
  const icon = buttonType.indexOf('Icon') >= 0 ? IconArrowHeadRight : undefined
  const showText = buttonType.indexOf('Text') >= 0

  return (
    <div>
      
        <Tabs
          size="small"
          hasLine
          onActiveKeyChange={key => {
            setButtonType(key)
          }}
        >
          <TabPane tabKey="IconText" title="Icon + Text" />
          <TabPane tabKey="Icon" title="Icon" />
          <TabPane tabKey="Text" title="Text" />
        </Tabs>
     
      <div>
        <Button type="primary" marginRight="40px" icon={icon}>
          {showText ? 'Primary' : ''}
        </Button>
        <Button type="secondary" marginRight="40px" icon={icon}>
          {showText ? 'Secondary' : ''}
        </Button>
        <Button type="default" marginRight="40px" icon={icon}>
          {showText ? 'Default' : ''}
        </Button>
        <Button type="text" marginRight="40px" icon={icon}>
          {showText ? 'Text' : ''}
        </Button>

        <Button type="link" marginRight="40px">
          {showText ? 'Link' : ''}
        </Button>
      </div>
    </div>
  )
}

ButtonStoryBook2.storyName = 'Types'

export const ButtonStoryBook3 = () => {
  const [status, setStatus] = useState('Disable')
  const isDisable = status === 'Disable'
  const isLoading = status === 'Loading'

  return (
    <div>
        <Tabs
          size="small"
          hasLine
          onActiveKeyChange={key => {
            setStatus(key)
          }}
        >
          <TabPane tabKey="Disabled" title="Disabled" />
          <TabPane tabKey="Loading" title="Loading" />
        </Tabs>
      <div>
        <Button
          type="primary"
          marginRight="40px"
          icon={IconArrowHeadRight}
          disabled={isDisable}
          loading={isLoading}
        >
          Primary
        </Button>
        <Button
          type="secondary"
          marginRight="40px"
          icon={IconArrowHeadRight}
          disabled={isDisable}
          loading={isLoading}
        >
          Secondary
        </Button>
        <Button
          type="default"
          marginRight="40px"
          icon={IconArrowHeadRight}
          disabled={isDisable}
          loading={isLoading}
        >
          Default
        </Button>
        <Button
          type="text"
          marginRight="40px"
          icon={IconArrowHeadRight}
          disabled={isDisable}
          loading={isLoading}
        >
          Text
        </Button>
        <Button
          type="link"
          marginRight="40px"
          disabled={isDisable}
          loading={isLoading}
        >
          Link
        </Button>
      </div>
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
