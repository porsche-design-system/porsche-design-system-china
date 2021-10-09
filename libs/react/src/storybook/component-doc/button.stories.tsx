import React, { useEffect, useState } from 'react'
import { IconArrowHeadRight } from '@pui/icons'

import { Button, Radio, RadioGroup } from '../..'
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
