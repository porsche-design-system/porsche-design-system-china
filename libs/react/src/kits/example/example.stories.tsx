import React from 'react';
import { Button } from '../button/button';
import { Col } from '../col/col';
import { Input } from '../input/input';
import { Row } from '../row/row';
import { TextArea } from '../textarea/textarea';
import './example.stories.scss';

export default {
  title: 'Example/Example'
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
          <Button type="dark">取消</Button>
        </Col>
      </Row>
    </div>
  );
};
