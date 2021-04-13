import { IconArrowHeadRight, IconClose } from '@pui/icons';
import React, { useState } from 'react';
import {
  Button,
  Input,
  TextArea,
  RadioGroup,
  Radio,
  Row,
  Col,
  Form,
  ButtonGroup,
  Divider
} from '../..';

export default {
  title: 'Data Entry/Form',
  component: Form
};

export const ExampleStoryBook = () => {
  const [labelLayout, setLabelLayout] = useState({});
  const [buttonAlign, setButtonAlign] = useState('left');
  const [data, setData] = useState({});

  return (
    <div>
      <RadioGroup
        label={{ text: '表单标签显示方式', style: { fontWeight: 'bold' } }}
        onChange={evt => {
          setLabelLayout(JSON.parse(evt.target.value));
        }}
      >
        <Radio
          label="标签文字在上面"
          value={JSON.stringify({ position: 'top' })}
          checked
          size="small"
        />
        <Radio
          label="标签文字在左边"
          value={JSON.stringify({ position: 'left', textAlign: 'left' })}
          size="small"
        />
        <Radio
          label="标签文字在左边，文字向右对齐"
          value={JSON.stringify({ position: 'left', textAlign: 'right' })}
          size="small"
        />
      </RadioGroup>
      <Divider contrast="medium" />
      <br />
      <RadioGroup
        label={{ text: '按钮位置', style: { fontWeight: 'bold' } }}
        onChange={evt => {
          setButtonAlign(evt.target.value);
        }}
      >
        <Radio label="左" value="left" checked size="small" />
        <Radio label="中" value="center" size="small" />
        <Radio label="右" value="right" size="small" />
      </RadioGroup>
      <Divider contrast="medium" />
      <br />
      <Row>
        <Col span={15}>
          <Form
            labelLayout={labelLayout}
            data={data}
            onDataChange={d => {
              setData(d);
            }}
            onSubmit={(data, error) => {
              console.log('submit', data);
            }}
          >
            <Input label="姓名" name="userName" required />
            <Input label="年龄" name="age" />
            <RadioGroup name="job" label="职业" required>
              <Radio label="教师" value="教师" />
              <Radio label="医生" value="医生" />
              <Radio label="警察" value="警察" />
              <Radio label="律师" value="律师" />
            </RadioGroup>
            <TextArea label="家庭地址" required name="address" />
            <ButtonGroup align={buttonAlign as any}>
              <Button type="primary" icon={IconArrowHeadRight} formSubmit>
                提交
              </Button>
              <Button type="default" icon={IconClose}>
                取消
              </Button>
            </ButtonGroup>
          </Form>
        </Col>
        <Col span={9} style={{ padding: '15px', whiteSpace: 'pre' }}>
          {JSON.stringify(data, null, 2)}
        </Col>
      </Row>
    </div>
  );
};
