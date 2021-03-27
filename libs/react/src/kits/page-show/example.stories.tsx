import React from 'react';
import { Button, Col, Input, Row, TextArea } from '../../';

export default {
  title: 'Page Show/Example'
};

export const ExampleStoryBook = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <Input label="姓名" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Input label="年龄" />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextArea label="家庭地址" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="primary">提交</Button>
          <Button type="default">取消</Button>
        </Col>
      </Row>
    </div>
  );
};
