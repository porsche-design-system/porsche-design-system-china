import React, { useState } from 'react'
import { DateRangePicker } from '../..'

export default {
  title: 'Data Entry/DateRangePicker',
  component: DateRangePicker
}

export const DateRangePickerStoryBook = () => {
  return (
    <div>
      <DateRangePicker
        width="400px"
        label="来访日期"
        placeholderStartDate="请选择开始日期"
        placeholderEndDate="请选择结束日期"
        onValueChange={v => {
          console.log(v)
        }}
      />
    </div>
  )
}
DateRangePickerStoryBook.storyName = 'DateRangePicker'

export const DateRangePickerStoryBook1 = () => {
  const [dates, setDates] = useState(['', ''])
  return (
    <div>
      <DateRangePicker
        width="330px"
        label="来访日期"
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        nameStartDate="startDate"
        nameEndDate="endDate"
        value={dates}
        onValueChange={setDates}
      />
      <br />
      输出值：{JSON.stringify(dates)}
    </div>
  )
}
DateRangePickerStoryBook1.storyName = 'Data Binding'

export const DateRangePickerStoryBook2 = () => {
  return (
    <div>
      <DateRangePicker
        width="330px"
        label="限定日期"
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        range="2012-10-12,2012-12-12"
      />
    </div>
  )
}
DateRangePickerStoryBook2.storyName = 'Limited Date'

export const DateRangePickerStoryBook3 = () => {
  return (
    <div>
      <DateRangePicker
        label="保修时间"
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        range="2012-10-12,2012-12-12"
        filterMode
      />
    </div>
  )
}
DateRangePickerStoryBook3.storyName = 'Filter Mode'
