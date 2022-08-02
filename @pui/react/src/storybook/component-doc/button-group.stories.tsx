import React from 'react'
import { IconClose, IconArrowHeadRight } from '@pui/icons'
import { ButtonGroup, Button, Row, Col } from '../..'
import './button-group.stories.scss'

export default {
  title: 'Data Entry/ButtonGroup',
  component: ButtonGroup
}

export const ButtonGroupStoryBook = () => {
  return (
    <Row>
      <Col>
        <div className="states">不同位置</div>
        <div>
          <ButtonGroup align="left">
            <Button icon={IconClose}>取消</Button>
            <Button type="primary" icon={IconArrowHeadRight}>
              确定
            </Button>
          </ButtonGroup>
          <ButtonGroup align="center">
            <Button icon={IconClose}>取消</Button>
            <Button type="primary" icon={IconArrowHeadRight}>
              确定
            </Button>
          </ButtonGroup>
          <ButtonGroup align="right">
            <Button icon={IconClose}>取消</Button>
            <Button type="primary" icon={IconArrowHeadRight}>
              确定
            </Button>
          </ButtonGroup>
        </div>
        <br />
        <div className="states">Disabled</div>
        <div>
          <ButtonGroup align="right" disabled>
            <Button icon={IconClose}>取消</Button>
            <Button type="primary" icon={IconArrowHeadRight}>
              确定
            </Button>
          </ButtonGroup>
        </div>
        <br />
      </Col>
    </Row>
  )
}
ButtonGroupStoryBook.storyName = 'ButtonGroup'
