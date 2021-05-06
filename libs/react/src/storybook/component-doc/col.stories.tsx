import React from 'react'
import { Col, Row } from '../../'

import './col.stories.scss'

export default {
  title: 'Layout/Col',
  component: Col
}

export const ColStoryBook = () => {
  return (
    <div>
      <Row>
        <Col span={6} className="col1">
          6
        </Col>
        <Col span={18} className="col2">
          18
        </Col>
      </Row>
      <Row>
        <Col span={4} className="col1">
          4
        </Col>
        <Col span={20} className="col2">
          20
        </Col>
      </Row>
      <Row>
        <Col span={4} className="col1">
          4
        </Col>
        <Col className="col2">自动宽度</Col>
      </Row>
      <Row>
        <Col className="col2">自动宽度</Col>
      </Row>
    </div>
  )
}
