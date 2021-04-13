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
            error={{ show: true, message: '输入信息有误' }}
            required
          />
        </div>
        <br />
        <div className="states">Label Left</div>
        <div>
          <Input label={{ text: '姓名', position: 'left' }} placeholder="请输入" required />
          <Input
            label={{ text: '家庭地址', position: 'left' }}
            placeholder="请输入"
            required
            error={{ show: true, message: '输入信息有误' }}
          />
        </div>
        <div className="states">Label Left / Text Align Right</div>
        <div>
          <Input
            label={{ text: '姓名', textAlign: 'right', position: 'left' }}
            placeholder="请输入"
            required
          />
          <Input
            label={{ text: '家庭地址', textAlign: 'right', position: 'left' }}
            placeholder="请输入"
            required
            error={{ show: true, message: '输入信息有误' }}
          />
        </div>
        <div className="states">Password</div>
        <div>
          <Input type="password" placeholder="请输入密码" />
        </div>
      </Col>
    </Row>
  );
};
