import { IconArrowHeadLeft, IconArrowHeadRight, IconClose } from '@pui/icons';
import React, { useState } from 'react';
import { Button, Input, TextArea, Row, Col, Form, ButtonGroup } from '../..';

export default {
  title: 'Form Example/Form 1',
  component: Form
};

export const ExampleStoryBook = () => {
  const [labelLayout, setLabelLayout] = useState({});
  const [buttonAlign, setButtonAlign] = useState('left');
  const [data, setData] = useState({});

  return (
    <Form
      labelLayout={{ textAlign: 'right', position: 'left' }}
      data={data}
      width="80%"
      onDataChange={d => {
        setData(d);
      }}
      onSubmit={(data, error) => {
        console.log('submit', data);
      }}
    >
      <Input
        label="联系人"
        name="contact"
        width="45%"
        rules={{ required: true, message: '必须填写' }}
        marginRight="10%"
        placeholder="请填写"
      />
      <Input label="手机号" name="mobile" width="45%" placeholder="请填写" />
      <Input
        label="勘察地址"
        name="address"
        width="45%"
        rules={{ required: true, message: '必须填写' }}
        placeholder="请填写"
      />
      <br />
      <Input label="小区/写字楼" name="area" width="45%" placeholder="请填写" />
      <br />
      <TextArea
        label="详细地址"
        rules={{ required: true, message: '必须填写' }}
        name="detailAddress"
        placeholder="请填写"
      />
      <Input label="勘察日期" name="date" width="45%" marginRight="10%" placeholder="请填写" />
      <Input label="勘察时间" name="date" width="45%" placeholder="请填写" />
      <ButtonGroup align="right">
        <Button type="default" icon={IconArrowHeadLeft}>
          上一步
        </Button>
        <Button type="primary" icon={IconArrowHeadRight} formSubmit>
          保存
        </Button>
      </ButtonGroup>
    </Form>
  );
};
