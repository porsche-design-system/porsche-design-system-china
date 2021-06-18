import React from 'react'
import { DatePicker } from '../..'

export default {
  title: 'Data Entry/DatePicker',
  component: DatePicker
}

export const DatePickerStoryBook = () => {
  return (
    <div style={{ height: '600px' }}>
      <DatePicker
        width="300px"
        label="来访日期"
        placeholder="请选择"
        onValueChange={v => {
          console.log(v)
        }}
      />
      <br />
      <br />
      <div>禁用状态</div>
      <DatePicker
        width="300px"
        label="来访日期"
        placeholder="请选择"
        disabled
      />
      <br /> <br /> <br />
      <div>出错状态</div>
      <DatePicker
        width="300px"
        label="来访日期"
        placeholder="请选择"
        error={{ show: true, message: '请选择' }}
      />
      <br /> <br /> <br />
      <DatePicker
        width="600px"
        label="来访日期(限定时间，In{num}Days 写法)"
        placeholder="请选择"
        range="In5Days"
      />
      <br /> <br /> <br />
      <DatePicker
        width="600px"
        label="来访日期(限定时间，字符串写法 '2021-05-01,2021-05-21' )"
        placeholder="请选择"
        range="2021-05-01,2021-05-21"
      />
      <br /> <br /> <br />
      <DatePicker
        width="600px"
        label="来访日期(限定时间，字符串数组 {['2021-05-01','2021-05-21']} )"
        placeholder="请选择"
        range={['2021-05-01', '2021-05-21']}
      />
      <br /> <br /> <br />
      <DatePicker
        width="600px"
        label="来访日期(限定时间，Date数组写法{[new Date(2020, 5, 1), new Date(2021, 5, 21)]} )"
        placeholder="请选择"
        range={[new Date(2020, 5, 1), new Date(2021, 5, 21)]}
      />
      <br /> <br /> <br />
    </div>
  )
}
