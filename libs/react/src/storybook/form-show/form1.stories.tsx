import { IconArrowHeadLeft, IconArrowHeadRight } from '@pui/icons';
import React, { useState } from 'react';

import {
  Button,
  RadioGroup,
  Switch,
  Input,
  TextArea,
  Form,
  ButtonGroup,
  DatePicker,
  Select,
  CheckBoxGroup,
  Modal
} from '../..';

export default {
  title: 'Form Example/Form 1',
  component: Form
};

interface FormData {
  contact: string;
  address: string;
  mobile: string;
  dealer: string;
  date: string;
  services: string[];
  invoice: boolean;
  invoiceType: string;
}

export const ExampleStoryBook = () => {
  const [data, setData] = useState<FormData>({} as any);

  return (
    <div>
      <Button
        onClick={() => {
          setData({
            contact: '李云',
            address: '上海东方路123号',
            mobile: '15000232222',
            dealer: 'PC',
            date: '2021-12-12',
            services: ['上漆'],
            invoice: true,
            invoiceType: '电子发票'
          });
        }}
        type="text"
      >
        测试载入数据
      </Button>
      <br />
      <br />
      <br />
      <Form
        labelLayout={{ textAlign: 'right', position: 'left' }}
        data={data}
        width="80%"
        onDataChange={setData}
        onSubmit={(data, error) => {
          if (!error) {
            Modal.confirm('确定吗?', () => {});
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('');
              }, 2000);
            });
          }
          return;
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
        <Select
          label="经销商"
          name="dealer"
          width="45%"
          options="上海浦东保时捷中心:PD,上海浦西保时捷中心:PC"
          rules={{ required: true, message: '必须填写' }}
          placeholder="请填写"
          marginRight="10%"
        />
        <DatePicker
          label="来访日期"
          name="date"
          width="45%"
          rules={{ required: true, message: '必须填写' }}
          placeholder="请填写"
        />
        <CheckBoxGroup
          label="服务类型"
          name="services"
          options="维修,上漆,更换轮胎,轮轴润滑,机车整装"
        />
        <Switch
          label="开具发票"
          name="invoice"
          onValueChange={val => {
            if (!val) {
              data.invoiceType = '';
              data.invoice = val;
              setData({ ...data });
            }
          }}
        />
        <RadioGroup
          disabled={!data.invoice}
          label="发票类型"
          name="invoiceType"
          options="纸质发票,电子发票"
        />
        <TextArea
          label="详细地址"
          rules={{ required: true, message: '必须填写' }}
          name="address"
          placeholder="请填写"
        />
        <ButtonGroup align="right">
          <Button type="default" icon={IconArrowHeadLeft}>
            上一步
          </Button>
          <Button type="primary" icon={IconArrowHeadRight} submit>
            保存
          </Button>
        </ButtonGroup>
      </Form>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
