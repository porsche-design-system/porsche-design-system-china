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
        <div className="title">Types</div>
        <div className="show-case">
          <Button type="default" icon={IconArrowHeadRight}>
            Default Button
          </Button>
          <Button type="primary">Primary Button</Button>
          <Button type="secondary">Secondary Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="primary" icon={<IconChat />} />
        </div>
      </div>

      <div className="group">
        <div className="title">Sizes</div>
        <div className="show-case">
          <Button size="default">Default Size Button</Button>
          <Button size="small">Small Size Button</Button>
          <Button size="small">中文小按钮</Button>
          <Button size="small" type="primary">
            Small Size Primary Button
          </Button>
        </div>
      </div>

      <div className="group">
        <div className="title">Icon Button</div>
        <br />
        <div className="show-case">
          <Button icon={IconArrowRight} />
          <Button type="primary" icon={IconAdd} />
          <Button type="secondary" icon={IconEdit} />
          <Button type="text" icon={IconArrowRight} />
        </div>
        <br />
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
      </div>

      <div className="group">
        <div className="title">Small Size Icon Button</div>
        <div className="show-case">
          <Button icon={IconArrowRight} size="small" />
          <Button type="primary" icon={IconAdd} size="small" />
          <Button type="secondary" icon={IconEdit} size="small" />
          <Button type="text" icon={IconArrowRight} size="small" />
        </div>
        <br />
        <div className="show-case">
          <Button type="primary" icon={IconAdd} size="small">
            添加
          </Button>
          <Button type="secondary" icon={IconEdit} size="small">
            编辑
          </Button>
          <Button type="text" icon={IconBell} size="small">
            提醒
          </Button>
          <Button type="primary" icon={IconArrowRight} size="small">
            提交
          </Button>
        </div>
      </div>

      <div className="group">
        <div className="title">Loading Button</div>
        <div className="show-case">
          <Button
            loading={loading}
            type="primary"
            icon={IconArrowHeadRight}
            onClick={() => {
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
              }, 2000)
            }}
          >
            提交
          </Button>
          <Button
            loading={loading}
            type="secondary"
            icon={IconArrowRight}
            size="small"
            onClick={() => {
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
              }, 2000)
            }}
          >
            提交
          </Button>
        </div>
      </div>

      <div className="group">
        <div className="title">Styles</div>
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
    </div>
  )
}

ButtonStoryBook2.storyName = '按钮类型'

export const ButtonStoryBook3 = () => {
  return (
    <div>
      <Button size="small" marginRight="10px">
        Small Button
      </Button>
      <Button type="secondary" marginRight="10px">
        Default Size
      </Button>
    </div>
  )
}

ButtonStoryBook3.storyName = '按钮大小'

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

ButtonStoryBook4.storyName = '图标按钮'
