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
          showClearButton
          value={val}
          onValueChange={v => {
            console.log(v)
            setVal(v)
          }}
        />
        &nbsp;&nbsp;
        <DatePicker
          width="300px"
          label="年月"
          placeholder="请选择"
          showClearButton
          pickerType="month"
        />
        <br />
        <div>禁用状态（禁用状态不再校验日期选择范围等限制）</div>
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
        &nbsp;&nbsp;
        <DatePicker
          width="300px"
          label="年月"
          placeholder="请选择"
          value={val}
          showClearButton
          pickerType="month"
          disabled
        />
        <br />
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
      &nbsp;&nbsp;
      <DatePicker
        width="300px"
        label="年月"
        pickerType="month"
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
        width="300px"
        label="来访日期(限定时间，In{num}Days 写法)"
        placeholder="请选择"
        range="In15Days"
      />
      &nbsp;&nbsp;
      <DatePicker
        width="300px"
        label="来访日期(限定时间，In{num}Days 写法)"
        placeholder="请选择"
        pickerType="month"
        range="In15Days"
      />
      <br /> <br /> <br />
      <DatePicker
        width="300px"
        label="来访日期(限定时间，字符串写法 '2021-05-01,2021-05-21' )"
        placeholder="请选择"
        range="2021-05-01,2021-05-21"
      />
      &nbsp;&nbsp;
      <DatePicker
        width="300px"
        label="来访日期(限定时间，字符串写法 '2021-05,2021-06' )"
        placeholder="请选择"
        pickerType="month"
        range="2021-05,2021-06"
      />
      <br /> <br /> <br />
      <DatePicker
        width="300px"
        label="来访日期(限定时间，字符串数组 {['2021-05-01','2021-05-21']} )"
        placeholder="请选择"
        range={['2021-05-01', '2021-05-21']}
      />
      &nbsp;&nbsp;
      <DatePicker
        width="300px"
        label="来访日期(限定时间，字符串数组 {['2021-05','2021-07']} )"
        placeholder="请选择"
        pickerType="month"
        range={['2021-05', '2021-07']}
      />
      <br /> <br /> <br />
      <DatePicker
        width="300px"
        label="限定时间，Date数组写法{[new Date(2020, 5, 1), new Date(2020, 5, 21)]}(5是六月)"
        placeholder="请选择"
        range={[new Date(2020, 5, 1), new Date(2020, 5, 21)]}
      />
      &nbsp;&nbsp;
      <DatePicker
        width="300px"
        label="限定时间，Date数组写法{[new Date(2020, 5), new Date(2020, 6)]}(5是六月)"
        placeholder="请选择"
        pickerType="month"
        range={[new Date(2020, 5), new Date(2020, 6)]}
      />
      <br /> <br />
      <DatePicker
        width="300px"
        label="限定开始时间 2022-04-04"
        placeholder="请选择"
        range={['2022-04-04', null]}
      />
      &nbsp;&nbsp;
      <DatePicker
        width="300px"
        label="限定开始时间 2022-04-04"
        placeholder="请选择"
        pickerType="month"
        range={['2022-04-04', null]}
      />
      <br /> <br />
      <DatePicker
        width="300px"
        label="限定结束时间 2022-10-13"
        placeholder="请选择"
        range={[null, '2022-10-13']}
      />
      &nbsp;&nbsp;
      <DatePicker
        width="300px"
        label="限定结束时间 2022-10"
        placeholder="请选择"
        pickerType="month"
        range={[null, '2022-10']}
      />
      <br /> <br />
    </div>
  )
}

DatePickerStoryBook3.storyName = 'Limited Time'

export const DatePickerStoryBook4 = () => {
  const [val, setVal] = useState<string>('2020-01-01')
  const [monthVal, setMonthVal] = useState<string>('2020-01')
  return (
    <div>
      <div>过滤器模式</div>
      <Form>
        <DatePicker
          value={val}
          width="400px"
          label="来访日期"
          placeholder="请选择"
          filterMode
          showClearButton
          onValueChange={setVal}
        />
        &nbsp;&nbsp;
        <DatePicker
          value={monthVal}
          width="400px"
          label="来访日期"
          placeholder="请选择"
          filterMode
          showClearButton
          pickerType="month"
          onValueChange={setMonthVal}
        />
        <br />
        <div>禁用状态</div>
        <DatePicker
          value={val}
          width="400px"
          label="来访日期"
          placeholder="请选择"
          filterMode
          showClearButton
          onValueChange={setVal}
          disabled
        />
        &nbsp;&nbsp;
        <DatePicker
          value={monthVal}
          width="400px"
          label="来访日期"
          placeholder="请选择"
          filterMode
          showClearButton
          pickerType="month"
          onValueChange={setMonthVal}
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
          width="300px"
          label="来访日期（7月1日，6月1日不可选）"
          placeholder="请选择"
        />
        &nbsp;&nbsp;
        <DatePicker
          disableDates={['2022-07', '2022-04']}
          width="300px"
          label="来访日期（7月，4月不可选）"
          placeholder="请选择"
          pickerType="month"
        />
        <br />
        <DatePicker
          disableDates={d => d.getDay() === 0 || d.getDay() === 6}
          width="300px"
          label="来访日期（周六周日不可选）"
          placeholder="请选择"
        />
        &nbsp;&nbsp;
        <DatePicker
          disableDates={d => [1, 3, 5].includes(d.getMonth() + 1)}
          width="300px"
          label="来访日期（1, 3, 5月不可选）"
          placeholder="请选择"
          pickerType="month"
        />
      </Form>
    </div>
  )
}

DatePickerStoryBook5.storyName = 'Disabled Dates'
