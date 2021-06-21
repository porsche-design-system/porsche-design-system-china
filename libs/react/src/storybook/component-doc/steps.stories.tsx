import React from 'react'
import { Steps, Row, Col } from '../..'

const Step = Steps.Step

export default {
  title: 'Navigation/Steps',
  component: Steps,
  subcomponents: { Step }
}

export const StepsStoryBook = () => {
  const handleCurrentChange = (current: number) => {
    console.log(current)
  }
  return (
    <div className="steps-story">
      <div className="group">
        <div className="title">基础横向步骤条</div>
        <div className="show-case">
          <div className="states">size Default</div>
          <Row>
            <Col span={1} />
            <Col span={10}>
              <Steps current={2}>
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
            <Col span={2} />
            <Col span={10}>
              <Steps current={2} labelPlacement="left">
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
          </Row>
          <div className="states">size small</div>
          <Row>
            <Col span={1} />
            <Col span={10}>
              <Steps current={2} size="small">
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
            <Col span={2} />
            <Col span={10}>
              <Steps current={2} labelPlacement="left" size="small">
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
          </Row>
        </div>
      </div>
      <div className="group">
        <div className="title">可点击横向步骤条</div>
        <div className="show-case">
          <Row>
            <Col span={1} />
            <Col span={22}>
              <Steps
                current={2}
                type="navigation"
                onCurrentChange={handleCurrentChange}
              >
                <Step title="步骤1" />
                <Step title="步骤2" />
                <Step title="步骤3" />
                <Step title="步骤4" />
              </Steps>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

StepsStoryBook.storyName = 'Steps'
