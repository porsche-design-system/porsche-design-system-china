import React from 'react';
import { Input, Row, Col } from '../..';

import './input.stories.scss';

export default {
  title: 'Data Entry/Input',
  component: Input
};

export const InputsStoryBook = () => {
  return (
    <Row>
      <Col span={12}>
        <div className="states">Default</div>
        <div>
          <Input placeholder="请输入" />
        </div>
        <br />
        <div className="states">Disabled</div>
        <div>
          <Input placeholder="请输入" disabled />
        </div>
        <br />
        <div className="states">Max Length</div>
        <div>
          <Input placeholder="最多输入50个字符" maxLength={50} />
        </div>
        <br />
        <div className="states">Label Top</div>
        <div>
          <Input
            label="姓名"
            placeholder="请输入"
            error={{ show: true, text: '输入信息有误' }}
            required
          />
        </div>
        <br />
        <div className="states">Label Left</div>
        <div>
          <Input
            label="姓名"
            labelPosition="left"
            placeholder="请输入"
            required
            labelWidth="100px"
            style={{ width: '300px' }}
          />
          <Input
            label="家庭地址"
            labelPosition="left"
            placeholder="请输入"
            required
            error={{ show: true, text: '输入信息有误' }}
            labelWidth="100px"
            style={{ width: '300px' }}
          />
        </div>
        <div className="states">Password</div>
        <div>
          <Input type="password" placeholder="请输入" />
        </div>
      </Col>
    </Row>
  );
};
