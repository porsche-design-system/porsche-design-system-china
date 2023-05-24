import React, { useEffect, useState } from 'react'
import { addMonth } from '../../shared/date-utils'
import { DateRangePicker, Form } from '../..'

export default {
  title: 'Data Entry/DateRangePicker',
  component: DateRangePicker
}

export const DateRangePickerStoryBook = () => {
  const [val, setVal] = useState<string[]>(['2020-01-01', '2020-01-02'])
  return (
    <div>
      <Form>
        <DateRangePicker
          value={val}
          width="330px"
          label="来访日期"
          showClearButton
          placeholderStartDate="请选择开始日期"
          placeholderEndDate="请选择结束日期"
          onValueChange={v => {
            console.log(v)
            setVal(v)
          }}
        />
        <br />
        <div>禁用状态</div>
        <DateRangePicker
          width="330px"
          label="来访日期"
          value={val}
          showClearButton
          placeholderStartDate="请选择开始日期"
          placeholderEndDate="请选择结束日期"
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
DateRangePickerStoryBook.storyName = 'DateRangePicker'

export const DateRangePickerStoryBook1 = () => {
  const [dates, setDates] = useState(['', ''])
  const [range, setRange] = useState<any>([null, null])
  useEffect(() => {
    const rangeStart = dates[1] !== '' ? addMonth(new Date(dates[1]), -5) : null
    const rangeEnd = dates[0] !== '' ? addMonth(new Date(dates[0]), 5) : null
    setRange([rangeStart, rangeEnd])
  }, [dates])
  return (
    <div>
      <DateRangePicker
        filterMode
        width="330px"
        label="来访日期(年月日)"
        showClearButton
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        nameStartDate="startDate"
        nameEndDate="endDate"
        value={dates}
        range={range}
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
        label="限定日期 2022-05-01 ~ 2022-05-31"
        showClearButton
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        range={['2022-05-01', '2022-05-31']}
      />

      <br />
      <br />

      <DateRangePicker
        width="330px"
        label="限定结束日期 2022-10-12"
        showClearButton
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        range={[null, '2022-10-12']}
      />

      <br />
      <br />

      <DateRangePicker
        width="330px"
        label="限定开始日期 2022-03-12"
        showClearButton
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        range={['2022-03-12', null]}
      />
    </div>
  )
}
DateRangePickerStoryBook2.storyName = 'Limited Date'

export const DateRangePickerStoryBook3 = () => {
  const [val, setVal] = useState<string[]>(['2020-01-01', '2020-01-02'])
  return (
    <div>
      <Form>
        <DateRangePicker
          value={val}
          label="保修时间"
          showClearButton
          placeholderStartDate="开始日期"
          placeholderEndDate="结束日期"
          filterMode
          onValueChange={setVal}
        />
        <br />
        <div>禁用状态</div>
        <DateRangePicker
          value={val}
          label="保修时间"
          showClearButton
          placeholderStartDate="开始日期"
          placeholderEndDate="结束日期"
          filterMode
          onValueChange={setVal}
          disabled
        />
      </Form>
    </div>
  )
}
DateRangePickerStoryBook3.storyName = 'Filter Mode'

export const DateRangePickerStoryBook4 = () => {
  return (
    <div>
      <DateRangePicker
        label="保修时间"
        showClearButton
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        filterMode
        mustPickStartEnd
      />
      <br /> <br />
      <DateRangePicker
        label="保修时间"
        showClearButton
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        mustPickStartEnd
        width="300px"
      />
    </div>
  )
}
DateRangePickerStoryBook4.storyName = 'Force to pick start and end'
