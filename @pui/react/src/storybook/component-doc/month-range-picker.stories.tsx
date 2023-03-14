import React, { useEffect, useState } from 'react'
import { addMonth } from '../../shared/date-utils'
import { MonthRangePicker, Form } from '../..'

export default {
  title: 'Data Entry/MonthRangePicker',
  component: MonthRangePicker
}

export const MonthRangePickerStoryBook = () => {
  const [val, setVal] = useState<string[]>(['2020-01', '2020-01'])
  return (
    <div>
      <Form>
        <MonthRangePicker
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
        <MonthRangePicker
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
MonthRangePickerStoryBook.storyName = 'MonthRangePicker'

export const MonthRangePickerStoryBook1 = () => {
  const [dates, setDates] = useState(['', ''])
  const [range, setRange] = useState<any>([null, null])
  useEffect(() => {
    const rangeStart = dates[1] !== '' ? addMonth(new Date(dates[1]), -5) : null
    const rangeEnd = dates[0] !== '' ? addMonth(new Date(dates[0]), 5) : null
    setRange([rangeStart, rangeEnd])
  }, [dates])
  return (
    <div>
      <MonthRangePicker
        filterMode
        width="330px"
        label="来访日期(年月)"
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
MonthRangePickerStoryBook1.storyName = 'Data Binding'

export const MonthRangePickerStoryBook2 = () => {
  return (
    <div>
      <MonthRangePicker
        width="330px"
        label="限定日期 2022-05 ~ 2022-09"
        showClearButton
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        range={['2022-05', '2022-09']}
      />

      <br />
      <br />

      <MonthRangePicker
        width="330px"
        label="限定结束日期 2022-10"
        showClearButton
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        range={[null, '2022-10']}
      />

      <br />
      <br />

      <MonthRangePicker
        width="330px"
        label="限定开始日期 2022-03"
        showClearButton
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        range={['2022-03', null]}
      />
    </div>
  )
}
MonthRangePickerStoryBook2.storyName = 'Limited Date'

export const MonthRangePickerStoryBook3 = () => {
  const [val, setVal] = useState<string[]>(['2020-01', '2020-01'])
  return (
    <div>
      <Form>
        <MonthRangePicker
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
        <MonthRangePicker
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
MonthRangePickerStoryBook3.storyName = 'Filter Mode'

export const MonthRangePickerStoryBook4 = () => {
  return (
    <div>
      <MonthRangePicker
        label="保修时间"
        showClearButton
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        filterMode
        mustPickStartEnd
      />
      <br /> <br />
      <MonthRangePicker
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
MonthRangePickerStoryBook4.storyName = 'Force to pick start and end'
