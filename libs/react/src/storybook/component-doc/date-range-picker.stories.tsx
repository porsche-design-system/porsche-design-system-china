import React, { useState } from 'react'
import { DateRangePicker } from '../..'

export default {
  title: 'Data Entry/DateRangePicker',
  component: DateRangePicker
}

export const DateRangePickerStoryBook = () => {
  const [dates, setDates] = useState(['', ''])
  return (
    <div style={{ height: '600px' }}>
      <DateRangePicker
        width="400px"
        label="来访日期"
        placeholders={['请选择开始日期', '请选择结束日期']}
        onValuesChange={v => {
          console.log(v)
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DateRangePicker
        width="400px"
        label="来访日期"
        placeholders={['开始日期', '结束日期']}
        values={dates}
        onValuesChange={setDates}
      />
      <br />
      输出值：{JSON.stringify(dates)}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DateRangePicker
        width="400px"
        label="限定日期"
        placeholders={['开始日期', '结束日期']}
        range="2012-10-12,2012-12-12"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
