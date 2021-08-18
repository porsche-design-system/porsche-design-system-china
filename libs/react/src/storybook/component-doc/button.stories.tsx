import React, { useState } from 'react'
import {
  IconChat,
  IconArrowHeadRight,
  IconArrowRight,
  IconEdit,
  IconAdd,
  IconBell,
  IconClose
} from '@pui/icons'

import { Button, Col, Row } from '../..'
import './button.stories.scss'

export default {
  title: 'Action/Button',
  component: Button
}

export const ButtonStoryBook = () => {
  const buttonTypes = ['default', 'primary', 'secondary', 'text']
  const [loading, setLoading] = useState(false)

  const renderButtonType = (type: any) => {
    return (
      <Row key={type} style={{ marginBottom: '10px', textAlign: 'center' }}>
        <Col className="type-name" span={4}>
          <div>{type}</div>
        </Col>
        <Col>
          <Button type={type}>按钮</Button>
        </Col>
        <Col>
          <Button type={type} className={'pui-button-type-' + type + '-hover'}>
            按钮
          </Button>
        </Col>
        <Col>
          <Button type={type} className={'pui-button-type-' + type + '-active'}>
            按钮
          </Button>
        </Col>
        <Col>
          <Button
            type={type}
            className={'pui-button-type-' + type + '-disabled'}
            disabled
          >
            按钮
          </Button>
        </Col>
        <Col>
          <Button type={type} loading>
            按钮
          </Button>
        </Col>
      </Row>
    )
  }

  return (
    <div>
      <div className="group">
        <Row className="headline" style={{ textAlign: 'center' }}>
          <Col span={4}>Type</Col>
          <Col>Default</Col>
          <Col>Hover</Col>
          <Col>Pressed</Col>
          <Col>Disabled</Col>
          <Col>Loading</Col>
        </Row>
        <br />
        {buttonTypes.map(type => {
          return renderButtonType(type)
        })}
      </div>
      <br />
    </div>
  )
}

ButtonStoryBook.storyName = 'Button'

export const ButtonStoryBook2 = () => {
  return (
    <div>
      <Button marginRight="10px">Button</Button>
      <Button type="primary" marginRight="10px">
        Primary Button
      </Button>
      <Button type="secondary" marginRight="10px">
        Secondary Button
      </Button>
      <Button type="text" marginRight="10px">
        Text Button
      </Button>
    </div>
  )
}

ButtonStoryBook2.storyName = 'Types'

export const ButtonStoryBook4 = () => {
  return (
    <div>
      <div className="show-case">
        <Button icon={IconArrowRight} marginRight="10px" />
        <Button type="primary" icon={IconAdd} marginRight="10px" />
        <Button type="secondary" icon={IconEdit} marginRight="10px" />
        <Button type="text" icon={IconArrowRight} marginRight="10px" />
      </div>
      <div className="show-case">
        <Button icon={IconArrowRight}>进入</Button>
        <Button icon={IconClose}>关闭</Button>
        <Button type="primary" icon={IconAdd}>
          添加
        </Button>
        <Button type="secondary" icon={IconEdit}>
          编辑
        </Button>
        <Button type="text" icon={IconBell}>
          提醒
        </Button>
      </div>
      <div className="show-case">
        <Button icon={IconArrowRight} size="small" marginRight="10px" />
        <Button type="primary" icon={IconAdd} size="small" marginRight="10px" />
        <Button
          type="secondary"
          icon={IconEdit}
          size="small"
          marginRight="10px"
        />
        <Button
          type="text"
          icon={IconArrowRight}
          size="small"
          marginRight="10px"
        />
      </div>
    </div>
  )
}

ButtonStoryBook4.storyName = 'Icon Buttons'
