import React, { useEffect } from 'react'
import { IconArrowHeadRight } from '@pui/icons'

import { Button } from '../..'
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

export const ButtonStoryBook1 = () => {
  return (
    <div>
      <Button
        size="tiny"
        type="default"
        marginRight="40px"
        icon={IconArrowHeadRight}
      >
        Default
      </Button>
    </div>
  )
}

ButtonStoryBook1.storyName = 'Default'

export const ButtonStoryBook2 = () => {
  return (
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
        type="primary"
        marginRight="40px"
        disabled
        icon={IconArrowHeadRight}
      >
        disabled
      </Button>
    </div>
  )
}

ButtonStoryBook2.storyName = 'Primary'

export const ButtonStoryBook3 = () => {
  return (
    <div>
      <Button
        size="tiny"
        type="text"
        marginRight="40px"
        icon={IconArrowHeadRight}
      >
        Primary
      </Button>
    </div>
  )
}

ButtonStoryBook3.storyName = 'Text'
