import React, { useEffect } from 'react'
import { IconArrowHeadRight, IconConfigurate } from '@pui/icons'

import { Button, Row, Col } from '../..'
import './button.stories.scss'
import { MobileFrame } from '../utils/mobileFrame'
import { Title } from '../utils/title'
import { Center } from '../utils/center'
import { Space } from '../utils/space'

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

interface ButtonsProps {
  type: 'default' | 'primary' | 'text'
}
const Buttons = ({ type }: ButtonsProps) => {
  return (
    <MobileFrame>
      <Title>Medium Size</Title>
      <Row>
        <Col span={12}>
          <Center>
            <Title>Default</Title>
            <Button size="medium" type={type}>
              默认按钮样式
            </Button>
            <Space />
            <Button size="medium" type={type} icon={IconConfigurate}>
              默认按钮
            </Button>
            <Space />
            <Button size="medium" type={type} suffixIcon={IconArrowHeadRight}>
              默认按钮
            </Button>
          </Center>
        </Col>
        <Col span={12}>
          <Center>
            <Title>Disable</Title>
            <Button disabled size="medium" type={type}>
              默认按钮样式
            </Button>
            <Space />
            <Button size="medium" type={type} icon={IconConfigurate} disabled>
              默认按钮
            </Button>
            <Space />
            <Button
              disabled
              size="medium"
              type={type}
              suffixIcon={IconArrowHeadRight}
            >
              默认按钮
            </Button>
          </Center>
        </Col>
      </Row>
      <Title>Small Size</Title>
      <Row>
        <Col span={12}>
          <Center>
            <Title>Default</Title>
            <Button size="small" type={type}>
              默认按钮样式
            </Button>
            <Space />
            <Button size="small" type={type} icon={IconConfigurate}>
              默认按钮
            </Button>
            <Space />
            <Button size="small" type={type} suffixIcon={IconArrowHeadRight}>
              默认按钮
            </Button>
          </Center>
        </Col>
        <Col span={12}>
          <Center>
            <Title>Disable</Title>
            <Button size="small" type={type} disabled>
              默认按钮样式
            </Button>
            <Space />
            <Button disabled size="small" type={type} icon={IconConfigurate}>
              默认按钮
            </Button>
            <Space />
            <Button
              disabled
              size="small"
              type={type}
              suffixIcon={IconArrowHeadRight}
            >
              默认按钮
            </Button>
          </Center>
        </Col>
      </Row>

      <Title>Tiny Size</Title>
      <Row>
        <Col span={12}>
          <Center>
            <Title>Default</Title>
            <Button size="tiny" type={type}>
              迷你按钮
            </Button>
          </Center>
        </Col>
        <Col span={12}>
          <Center>
            <Title>Disable</Title>

            <Button disabled size="tiny" type={type}>
              迷你按钮
            </Button>
          </Center>
        </Col>
      </Row>
    </MobileFrame>
  )
}

export const ButtonStoryBook1 = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Buttons type="default" />
        </Col>
      </Row>
    </div>
  )
}

ButtonStoryBook1.storyName = 'Default'

export const ButtonStoryBook2 = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Buttons type="primary" />
        </Col>
      </Row>
    </div>
  )
}

ButtonStoryBook2.storyName = 'Primary'

export const ButtonStoryBook3 = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Buttons type="text" />
        </Col>
      </Row>
    </div>
  )
}

ButtonStoryBook3.storyName = 'Text'
