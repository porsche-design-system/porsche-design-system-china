import React from 'react'
import { Col, Row, TextArea } from '../../'

import './textareas.stories.scss'

export default {
  title: 'Data Entry/TextArea'
}

export const InputsStoryBook = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">Default</div>
        <div>
          <TextArea placeholder="请输入" />
        </div>
        <br />
        <div className="states">Disabled</div>
        <div>
          <TextArea placeholder="请输入" disabled />
        </div>
        <br />
        <div className="states">Max Length</div>
        <div>
          <TextArea placeholder="最多输入200个字符" maxLength={200} />
        </div>
        <br />
        <div className="states">Label Top</div>
        <div>
          <TextArea
            label="备注"
            placeholder="请输入"
            error={{ show: true, message: '输入信息有误' }}
          />
        </div>
        <br />
        <div className="states">Label Left</div>
        <div>
          <TextArea
            label={{ text: '备注', position: 'left' }}
            placeholder="请输入"
          />
        </div>
        <div className="states">Label Left / Text Align Right</div>
        <div>
          <TextArea
            label={{ text: '备注', textAlign: 'right', position: 'left' }}
            placeholder="请输入"
          />
        </div>
      </Col>
    </Row>
  )
}
