import { IconArrowHeadRight } from '@pui/icons';
import React from 'react';
import { Pane, Input, Col, Row, Button } from '../..';

export default {
  title: 'Data Display/Pane',
  component: Pane
};

export const RadioStoryBook = () => {
  return (
    <div>
      <Row>
        <Col span={4} style={{ backgroundColor: '#666', padding: '20px' }}>
          个人信息
        </Col>
        <Col>
          <Pane>
            <Row>
              <Col>
                <Input label="姓名" labelPosition="left" labelWidth="80px" />
                <Input label="手机号码" labelPosition="left" labelWidth="80px" required />
                <Input label="邮箱地址" labelPosition="left" labelWidth="80px" />
              </Col>
              <Col>
                <Input label="国家" labelPosition="left" labelWidth="80px" />
                <Input label="邮编" labelPosition="left" labelWidth="80px" />
                <Input label="公司名称" labelPosition="left" labelWidth="80px" />
              </Col>
            </Row>
          </Pane>
          <Pane padding="10px" style={{ backgroundColor: '#4A4E51', textAlign: 'right' }}>
            <Button icon={IconArrowHeadRight}>返回</Button>
            <Button icon={IconArrowHeadRight} type="primary">
              提交
            </Button>
          </Pane>
        </Col>
      </Row>
    </div>
  );
};

RadioStoryBook.storyName = 'Pane';
