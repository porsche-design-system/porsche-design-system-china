import { IconArrowHeadRight } from '@pui/icons';
import React from 'react';
import { Pane, Input, Col, Row, Button, Form } from '../..';

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
            <Form>
              <Row>
                <Col>
                  <Input label="姓名" />
                  <Input label="手机号码" required />
                  <Input label="邮箱地址" />
                </Col>
                <Col style={{ paddingLeft: '10px' }}>
                  <Input label="国家" />
                  <Input label="邮编" />
                  <Input label="公司名称" />
                </Col>
              </Row>
            </Form>
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
