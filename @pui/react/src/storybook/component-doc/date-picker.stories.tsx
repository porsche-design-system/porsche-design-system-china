import React, { useState } from 'react'
import { DatePicker, Form } from '../..'

export default {
  title: 'Data Entry/DatePicker',
  component: DatePicker
}

export const DatePickerStoryBook = () => {
  const [val, setVal] = useState<string>('2020-01-01')
  return (
    <div>
      <Form>
        <DatePicker
          width="300px"
          label="来访日期"
          placeholder="请选择"
          value={val}
          onValueChange={v => {
            console.log(v)
            setVal(v)
          }}
        />
        <br />
        <div>禁用状态（禁用状态不再校验日期选择访问等限制）</div>
        <DatePicker
          width="300px"
          label="来访日期"
          placeholder="请选择"
          value={val}
          onValueChange={v => {
            console.log(v)
            setVal(v)
          }}
          disabled
        />
      </Form>
    </div>
  )
}

DatePickerStoryBook.storyName = 'DatePicker'

export const DatePickerStoryBook1 = () => {
  return (
    <div>
      <div>出错状态</div>
      <DatePicker
        width="300px"
        label="来访日期"
        placeholder="请选择"
        error={{ show: true, message: '请选择' }}
      />
    </div>
  )
}

DatePickerStoryBook1.storyName = 'Error'

export const DatePickerStoryBook3 = () => {
  return (
    <div>
      <div>限定时间各种写法</div>
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
        label="限定时间，Date数组写法{[new Date(2020, 5, 1), new Date(2020, 5, 21)]}(5是六月)"
        placeholder="请选择"
        range={[new Date(2020, 5, 1), new Date(2020, 5, 21)]}
      />
      <br /> <br />
      <DatePicker
        width="600px"
        label="限定开始时间 2022-04-04"
        placeholder="请选择"
        range={['2022-04-04', null]}
      />
      <br /> <br />
      <DatePicker
        width="600px"
        label="限定结束时间 2022-10-13"
        placeholder="请选择"
        range={[null, '2022-10-13']}
      />
      <br /> <br />
    </div>
  )
}

DatePickerStoryBook3.storyName = 'Limited Time'

export const DatePickerStoryBook4 = () => {
  const [val, setVal] = useState<string>('2020-01-01')
  return (
    <div>
      <div>过滤器模式</div>
      <Form>
        <DatePicker
          value={val}
          width="600px"
          label="来访日期"
          placeholder="请选择"
          filterMode
          showClearButton
          onValueChange={setVal}
        />
        <br />
        <div>禁用状态</div>
        <DatePicker
          value={val}
          width="600px"
          label="来访日期"
          placeholder="请选择"
          filterMode
          showClearButton
          onValueChange={setVal}
          disabled
        />
      </Form>
    </div>
  )
}

DatePickerStoryBook4.storyName = 'Limited Time'

export const DatePickerStoryBook5 = () => {
  return (
    <div>
      <div>禁用日期</div>
      <div>
        传参形式可以是3种
        <br />
        1. 日期string数组 disableDates=
        {"{['2021-07-01', '2021-06-01']}"}
        <br />
        2. Date数组 disableDates=
        {'{[new Date(),new Date()]}'}
        <br />
        3. 方法，返回true为禁用 disableDates=
        {'{d => (  d.getDay() === 0 || d.getDay() === 6  )}'}
      </div>
      <Form>
        <DatePicker
          disableDates={['2022-07-01', '2022-06-01']}
          width="600px"
          label="来访日期（7月1日，6月1日不可选）"
          placeholder="请选择"
        />

        <DatePicker
          disableDates={d => d.getDay() === 0 || d.getDay() === 6}
          width="600px"
          label="来访日期（周六周日不可选）"
          placeholder="请选择"
        />
      </Form>
    </div>
  )
}

DatePickerStoryBook5.storyName = 'Disabled Dates'
