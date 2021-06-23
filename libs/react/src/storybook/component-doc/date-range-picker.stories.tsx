import React from 'react'
import { DateRangePicker } from '../..'

export default {
  title: 'Data Entry/DateRangePicker',
  component: DateRangePicker
}

export const DateRangePickerStoryBook = () => {
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
    </div>
  )
}
