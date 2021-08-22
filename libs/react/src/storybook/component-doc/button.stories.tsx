import React, { useEffect, useState } from 'react'
import {
  IconArrowRight,
  IconArrowHeadRight,
  IconEdit,
  IconAdd,
  IconBell,
  IconClose
} from '@pui/icons'

import { Button, Col, Row, Radio, RadioGroup } from '../..'
import './button.stories.scss'

export default {
  title: 'Action/Button',
  component: Button
}

export const ButtonStoryBook = () => {
  useEffect(() => {
    const mainStory = document.getElementById(
      'anchor--action-button--button-story-book'
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
      <div className="radio-group">
        <RadioGroup value={buttonType} onValueChange={setButtonType}>
          <Radio text="Icon + Text" value="IconText" />
          <Radio text="Icon" value="Icon" />
          <Radio text="Text" value="Text" />
        </RadioGroup>
      </div>
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
      <div className="radio-group">
        <RadioGroup value={status} onValueChange={setStatus}>
          <Radio text="Disabled" value="Disable" />
          <Radio text="Loading" value="Loading" />
        </RadioGroup>
      </div>
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
      </div>
    </div>
  )
}

ButtonStoryBook3.storyName = 'Status'
