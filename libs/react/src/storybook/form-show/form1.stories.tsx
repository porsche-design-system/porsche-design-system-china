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

  return (
    <div>
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
        type="text"
      >
        Load Data
      </Button>
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
          placeholder=""
        />
        <Input label="Mobile" name="mobile" width="45%" placeholder="" />
        <Select
          label="Dealer"
          name="dealer"
          width="45%"
          options="Shanghai PuDong:PD,Shanghai PuXi:PC"
          rules={{ required: true, message: 'Required' }}
          placeholder=""
          marginRight="10%"
        />
        <DatePicker
          label="Visit Date"
          name="date"
          width="45%"
          rules={{ required: true, message: 'Required' }}
          placeholder=""
        />
        <DateRangePicker
          label="Repair Date"
          nameStartDate="repairStartDate"
          nameEndDate="repairEndDate"
          rules={{ required: true, message: 'Required' }}
          placeholderStartDate="Start"
          placeholderEndDate="End"
        />
        <CheckBoxGroup
          label="Service Type"
          name="services"
          options="Repair,Paint,Change Wheel,Lubrication"
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
        />
        <RadioGroup
          disabled={data.invoice === 'no'}
          label="Invoice Type"
          name="invoiceType"
          options="Paper-Invoice,E-Invoice"
        />
        <TextArea
          label="Address"
          rules={{ required: true, message: 'Required' }}
          name="address"
          placeholder=""
        />
        <ButtonGroup align="right">
          <Button type="default" icon={IconArrowHeadLeft}>
            Prev
          </Button>
          <Button type="primary" icon={IconArrowHeadRight} submit>
            Submit
          </Button>
        </ButtonGroup>
      </Form>
      <Button
        type="primary"
        onClick={() => {
          Form.findById['form1'].submit()
        }}
      >
        Submit
      </Button>
      <div style={{ whiteSpace: 'pre' }}>{JSON.stringify(data, null, 2)}</div>
    </div>
  )
}
