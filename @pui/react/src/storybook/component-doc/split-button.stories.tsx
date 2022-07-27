import React, { useEffect } from 'react'
import { Tabs, TabPane, SplitButton, Menu } from '../..'
import './split-button.stories.scss'

export default {
  title: 'Foundation/Split Button',
  component: SplitButton
}

export const SplitButtonStoryBook = () => {
  useEffect(() => {
    const mainStory = document.getElementById(
      'anchor--foundation-split-button--split-button-story-book'
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

SplitButtonStoryBook.storyName = 'SplitButton'

export const SplitButtonStoryBookBook2 = () => {
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

  const Tab1 = () => {
    return (
      <>
        <div className="flex">
          <SplitButton overlay={defaultMenu} type="primary" marginRight="20px">
            电子签署
          </SplitButton>
          <SplitButton
            overlay={defaultMenu}
            type="secondary"
            marginRight="20px"
          >
            电子签署
          </SplitButton>
          <SplitButton overlay={defaultMenu} type="default" marginRight="20px">
            电子签署
          </SplitButton>

          <SplitButton overlay={defaultMenu} type="text" marginRight="20px">
            电子签署
          </SplitButton>

          <SplitButton overlay={defaultMenu} type="link" marginRight="20px">
            电子签署
          </SplitButton>
        </div>
      </>
    )
  }

  const Tab2 = () => {
    return (
      <>
        <div className="flex">
          <SplitButton
            overlay={defaultMenu}
            type="primary"
            disabled
            marginRight="20px"
          >
            电子签署
          </SplitButton>
          <SplitButton
            overlay={defaultMenu}
            type="secondary"
            marginRight="20px"
          >
            电子签署
          </SplitButton>
          <SplitButton
            overlay={defaultMenu}
            type="default"
            disabled
            marginRight="20px"
          >
            电子签署
          </SplitButton>

          <SplitButton
            overlay={defaultMenu}
            type="text"
            disabled
            marginRight="20px"
          >
            电子签署
          </SplitButton>

          <SplitButton
            overlay={defaultMenu}
            type="link"
            disabled
            marginRight="20px"
          >
            电子签署
          </SplitButton>
        </div>
      </>
    )
  }

  const Tab3 = () => {
    return (
      <>
        <div className="flex">
          <SplitButton
            overlay={defaultMenu}
            type="primary"
            loading
            marginRight="20px"
          >
            电子签署
          </SplitButton>
          <SplitButton
            overlay={defaultMenu}
            type="secondary"
            marginRight="20px"
          >
            电子签署
          </SplitButton>
          <SplitButton
            overlay={defaultMenu}
            type="default"
            loading
            marginRight="20px"
          >
            电子签署
          </SplitButton>

          <SplitButton
            overlay={defaultMenu}
            type="text"
            loading
            marginRight="20px"
          >
            电子签署
          </SplitButton>

          <SplitButton
            overlay={defaultMenu}
            type="link"
            loading
            marginRight="20px"
          >
            电子签署
          </SplitButton>
        </div>
      </>
    )
  }

  const Tab4 = () => {
    return (
      <>
        <div className="flex">
          <SplitButton
            overlay={defaultMenu}
            type="primary"
            size="tiny"
            marginRight="20px"
          >
            电子签署
          </SplitButton>
          <SplitButton
            overlay={defaultMenu}
            type="secondary"
            marginRight="20px"
            size="tiny"
          >
            电子签署
          </SplitButton>
          <SplitButton
            overlay={defaultMenu}
            type="default"
            size="tiny"
            marginRight="20px"
          >
            电子签署
          </SplitButton>

          <SplitButton
            overlay={defaultMenu}
            type="text"
            size="tiny"
            marginRight="20px"
          >
            电子签署
          </SplitButton>

          <SplitButton
            overlay={defaultMenu}
            type="link"
            size="tiny"
            marginRight="20px"
          >
            电子签署
          </SplitButton>
        </div>
      </>
    )
  }

  return (
    <div>
      <Tabs size="small" hasLine>
        <TabPane tabKey="split" title="the Split Button">
          <Tab1 />
        </TabPane>

        <TabPane tabKey="disabled" title="disabled">
          <Tab2 />
        </TabPane>

        <TabPane tabKey="loading" title="loading">
          <Tab3 />
        </TabPane>

        <TabPane tabKey="tiny" title="tiny">
          <Tab4 />
        </TabPane>
      </Tabs>
    </div>
  )
}

SplitButtonStoryBookBook2.storyName = 'Split Button'
