import React from 'react'
import { Tooltip, Button, Row, Col, Divider } from '../..'
import './tooltip.stories.scss'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip
}

const cardContent = (
  <div>
    <h3 className="title">标题</h3>
    <Divider type="horizontal" contrast="medium" />
    <p>提供按钮、操作的文案解释</p>
  </div>
)

export const TooltipStoryBook = () => {

  const onClick = () => {
    console.log('clicked!');
  }
  return (
    <div className="tooltip-story">
      <div className="group">
        <div className="title">基本-最简单的用法，浮层大小由内容自动撑开，默认最大宽度250px</div>
        <div className="show-case">
          <Tooltip content="this is test text">
            Tooltip will show on mouse enter.
          </Tooltip>
        </div>
      </div>
      <div className="group">
        <div className="title">位置-12种位置</div>
        <div className="show-case">
          <Row>
            <Col span={5}></Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="topLeft">
                <Button size="small" className="demo-button">topLeft</Button>
              </Tooltip>
            </Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="topCenter">
                <Button size="small" className="demo-button">topCenter</Button>
              </Tooltip>
            </Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="topRight">
                <Button size="small" className="demo-button">topRight</Button>
              </Tooltip>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={2}></Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="leftTop">
                <Button size="small" className="demo-button">leftTop</Button>
              </Tooltip>
            </Col>
            <Col span={9}></Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="rightTop">
                <Button size="small" className="demo-button">rightTop</Button>
              </Tooltip>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={2}></Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="leftCenter">
                <Button size="small" className="demo-button">leftCenter</Button>
              </Tooltip>
            </Col>
            <Col span={9}></Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="rightCenter">
                <Button size="small" className="demo-button">rightCenter</Button>
              </Tooltip>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={2}></Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="leftBottom">
                <Button size="small" className="demo-button">leftBottom</Button>
              </Tooltip>
            </Col>
            <Col span={9}></Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="rightBottom">
                <Button size="small" className="demo-button">rightBottom</Button>
              </Tooltip>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={5}></Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="bottomLeft">
                <Button size="small" className="demo-button">bottomLeft</Button>
              </Tooltip>
            </Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="bottomCenter">
                <Button size="small" className="demo-button">bottomCenter</Button>
              </Tooltip>
            </Col>
            <Col span={3}>
              <Tooltip content="prompt text" placement="bottomRight">
                <Button size="small" className="demo-button">bottomRight</Button>
              </Tooltip>
            </Col>
          </Row>
        </div>
      </div>
      <div className="group">
        <div className="title">触发方式-鼠标移入、点击</div>
        <div className="show-case">
          <Row>
            <Col span={2}></Col>
            <Col span={3}>
              <Tooltip content="prompt text" trigger='click'>
                <Button size="small" className="demo-button" onClick={onClick}>click me</Button>
              </Tooltip>
            </Col>
            <Col span={3}>
              <Tooltip content="prompt text" trigger='hover'>
                <Button size="small" className="demo-button">hover me</Button>
              </Tooltip>
            </Col>
          </Row>
        </div>
      </div>
      <div className="group">
        <div className="title">复杂结构示例-含标题文字提示</div>
        <div className="show-case">
          <Row>
            <Col span={2}></Col>
            <Col span={6}>
              <Tooltip content={cardContent} trigger='hover'>
                <Button size="small" className="demo-button">hover me</Button>
              </Tooltip>
            </Col>
          </Row>
        </div>
      </div>
      <div className="group">
        <div className="title">注意</div>
        <div className="show-case">
          <p>请确保 Tooltip 的子元素能接受 onMouseEnter、onMouseLeave、onClick 事件。</p>
        </div>
      </div>
    </div>
  )
}

TooltipStoryBook.storyName = 'Tooltip'
