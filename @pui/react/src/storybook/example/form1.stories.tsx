import React, { useState } from 'react'
import { IconArrowHeadLeft, IconArrowHeadRight } from '@pui/icons'

import {
  Button,
  RadioGroup,
  Switch,
  Input,
  TextArea,
  Form,
  ButtonGroup,
  DatePicker,
  DateRangePicker,
  Select,
  CheckBoxGroup
} from '../..'

export default {
  title: 'Example/Form 1',
  component: Form
}

interface FormData {
  contact: string
  address: string
  mobile: string
  dealer: string
  repairStartDate: string
  repairEndDate: string
  date: string
  services: string[]
  invoice: string
  invoiceType: string
}

export const ExampleStoryBook = () => {
  const [data, setData] = useState<FormData>({} as any)
  const [disabled, setDisabled] = useState(false)

  return (
    <div>
      <ButtonGroup>
        <Button
          onClick={() => {
            setData({
              contact: 'Paul',
              address: 'Shanghai DongFang Road 100',
              mobile: '15000232222',
              dealer: 'PC',
              repairStartDate: '2021-01-12',
              repairEndDate: '2021-05-33',
              date: '2021-12-12',
              services: ['Repair'],
              invoice: 'yes',
              invoiceType: 'E-Invoice'
            })
          }}
        >
          Load Data
        </Button>
        <Button
          onClick={() =>
            setData({
              contact: '',
              address: '',
              mobile: '',
              dealer: '',
              repairStartDate: '',
              repairEndDate: '',
              date: '',
              services: [],
              invoice: '',
              invoiceType: ''
            })
          }
        >
          清空数据
        </Button>
        <Button onClick={() => setDisabled(!disabled)}>
          {disabled ? '启用' : '禁用'}表单
        </Button>
      </ButtonGroup>
      <br />
      <br />
      <br />
      <Form
        name="form1"
        labelLayout={{ textAlign: 'right', position: 'left' }}
        data={data}
        onDataChange={setData}
        width="80%"
        onSubmit={(_data, errors) => {
          if (!errors) {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('')
              }, 2000)
            })
          }
          // eslint-disable-next-line consistent-return,no-useless-return
          return
        }}
      >
        <Input
          label="Name"
          name="contact"
          width="45%"
          rules={{ required: true, message: 'Required' }}
          marginRight="10%"
          placeholder="请输入姓名"
          disabled={disabled}
        />
        <Input
          label="Mobile"
          name="mobile"
          width="45%"
          placeholder="请输入手机号"
          disabled={disabled}
        />
        <Select
          label="Dealer"
          name="dealer"
          width="45%"
          options="Shanghai PuDong:PD,Shanghai PuXi:PC"
          rules={{ required: true, message: 'Required' }}
          placeholder="请选择"
          marginRight="10%"
          disabled={disabled}
        />
        <DatePicker
          label="Visit Date"
          name="date"
          width="45%"
          rules={{ required: true, message: 'Required' }}
          placeholder="请选择"
          disabled={disabled}
        />
        <DateRangePicker
          label="Repair Date"
          nameStartDate="repairStartDate"
          nameEndDate="repairEndDate"
          rules={{ required: true, message: 'Required' }}
          placeholderStartDate="Start"
          placeholderEndDate="End"
          disabled={disabled}
        />
        <CheckBoxGroup
          label="Service Type"
          name="services"
          options="Repair,Paint,Change Wheel,Lubrication"
          disabled={disabled}
        />
        <Switch
          label="Send Invoice"
          name="invoice"
          alterValues="no,yes"
          onValueChange={val => {
            if (val === 'no') {
              data.invoiceType = ''
              data.invoice = val
              setData({ ...data })
            }
          }}
          disabled={disabled}
        />
        <RadioGroup
          disabled={disabled || data.invoice === 'no'}
          label="Invoice Type"
          name="invoiceType"
          options="Paper-Invoice,E-Invoice"
        />
        <TextArea
          label="Address"
          rules={{ required: true, message: 'Required' }}
          name="address"
          placeholder="请输入地址"
          disabled={disabled}
        />
        <ButtonGroup align="right">
          <Button type="default" icon={IconArrowHeadLeft} disabled={disabled}>
            Prev
          </Button>
          <Button
            type="primary"
            icon={IconArrowHeadRight}
            submit
            disabled={disabled}
          >
            Submit
          </Button>
        </ButtonGroup>
      </Form>
      <Button
        type="primary"
        onClick={() => {
          Form.findByName('form1').submit()
        }}
        disabled={disabled}
      >
        Submit
      </Button>
      <div style={{ whiteSpace: 'pre' }}>{JSON.stringify(data, null, 2)}</div>
    </div>
  )
}
