import { IconArrowHeadRight, IconClose } from '@pui/icons';
import React, { useState } from 'react';

import {
  Select,
  Button,
  Input,
  TextArea,
  RadioGroup,
  Radio,
  Row,
  Col,
  Form,
  ButtonGroup,
  CheckBoxGroup,
  CheckBox,
  DatePicker,
  Switch
} from '../..';

export default {
  title: 'Data Entry/Form',
  component: Form
};

export const ExampleStoryBook = () => {
  const [labelLayout, setLabelLayout] = useState({});
  const [buttonAlign, setButtonAlign] = useState('left');
  const [data, setData] = useState({ lastName: '李' });

  return (
    <div>
      <RadioGroup
        label={{ text: '表单标签显示方式', style: { fontWeight: 'bold' } }}
        onValueChange={value => {
          setLabelLayout(JSON.parse(value));
        }}
        value={JSON.stringify({ position: 'top' })}
      >
        <Radio text="标签文字在上面" value={JSON.stringify({ position: 'top' })} />
        <Radio
          text="标签文字在左边"
          value={JSON.stringify({
            position: 'left',
            textAlign: 'left'
          })}
        />
        <Radio
          text="标签文字在左边，文字向右对齐"
          value={JSON.stringify({ position: 'left', textAlign: 'right' })}
        />
      </RadioGroup>
      <br /> <br />
      <RadioGroup
        label={{ text: '底部按钮位置', style: { fontWeight: 'bold' } }}
        onValueChange={value => {
          setButtonAlign(value);
        }}
        value={buttonAlign}
      >
        <Radio text="左" value="left" />
        <Radio text="中" value="center" />
        <Radio text="右" value="right" />
      </RadioGroup>
      <br />
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
            <Input
              label="姓"
              name="lastName"
              width="44%"
              rules={{ required: true, message: '必须填写' }}
              marginRight="2%"
            />
            <Input
              label="名"
              name="firstName"
              width="54%"
              rules={{ required: true, message: '必须填写' }}
            />
            <DatePicker name="birthday" label="生日" width="44%" marginRight="2%" />
            <Select options="男:male,女:female" label="性别" width="54%" name="gender" />
            <Input
              label="电子邮件"
              name="email"
              rules={{ type: 'email', message: '邮件格式不正确' }}
            />
            <Input
              label="手机号"
              name="mobile"
              rules={[
                { required: true, message: '必须填写' },
                { type: 'number', message: '手机号必须是数字' }
              ]}
            />
            <Switch label="保时捷车主" name="ownCar" />
            <RadioGroup name="job" label="职业">
              <Radio text="教师" />
              <Radio text="医生" />
              <Radio text="警察" />
              <Radio text="律师" />
            </RadioGroup>
            <CheckBoxGroup
              label="兴趣爱好"
              name="hobbies"
              rules={[
                {
                  validator: (_, val) => {
                    return val.length >= 3;
                  },
                  message: '请选择至少3个爱好'
                }
              ]}
            >
              <CheckBox text="唱歌" />
              <CheckBox text="玩游戏" />
              <CheckBox text="跳舞" />
              <CheckBox text="游泳" />
            </CheckBoxGroup>
            <TextArea
              label="家庭地址"
              rules={{ required: true, message: '必须填写' }}
              name="address"
            />
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
        <Col span={9} style={{ paddingLeft: '15px', whiteSpace: 'pre' }}>
          {JSON.stringify(data, null, 2)}
        </Col>
      </Row>
    </div>
  );
};
