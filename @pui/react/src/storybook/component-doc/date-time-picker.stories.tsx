import React, { useState } from 'react'
import { DateTimePicker, Form } from '../..'

export default {
  title: 'Data Entry/DateTimePicker',
  component: DateTimePicker
}

export const DateTimePickerStoryBookTime = () => {
  return (
    <div>
      <Form>
        <DateTimePicker
          width="300px"
          label="年月日时分"
          placeholder="年月日时分"
          showStyle="CommonHHMMSS"
          componentId="testTime4"
          size="small"
        />
        <br />
        <DateTimePicker
          width="300px"
          label="时分秒"
          placeholder="时分秒"
          showStyle="HHMMSS"
          componentId="testTime5"
        />
        <br />
        <div>时分</div>
        <DateTimePicker
          width="300px"
          placeholder="时分"
          showStyle="HHMM"
          componentId="testTime8"
        />
      </Form>
    </div>
  )
}

DateTimePickerStoryBookTime.storyName = 'DateTimePicker 时间'

export const DateTimePickerStoryBook = () => {
  return (
    <div>
      <Form>
        <div>年</div>
        <DateTimePicker
          width="300px"
          placeholder="年"
          showStyle="OnlyYear"
          componentId="testTime001"
        />
        <br />
        <div>年月</div>
        <DateTimePicker
          width="300px"
          placeholder="年月"
          showStyle="YearAndMonth"
          componentId="testTime2"
        />

        <br />
        <div>年月日</div>
        <DateTimePicker
          width="300px"
          placeholder="年月日"
          showStyle="Common"
          componentId="testTime3"
        />

        <div>禁用状态</div>
        <DateTimePicker
          width="300px"
          disabled
          placeholder="请输入日期"
          showStyle="Common"
          componentId="testTime6"
          value="2023-01-23"
        />

        <br />

        {/* <DateTimePicker
          label="label在左边"
          labelPosition="left"
          width="300px"
          placeholder="label在左边"
          showStyle="Common"
          componentId="testTime7"
        /> */}

        <div>过滤器模式</div>
        <DateTimePicker
          label="到港日期"
          // placeholder="到港日期"
          filterMode
          // width="200px"
          labelPosition="left"
          showStyle="HHMM"
          componentId="testTime5cb"
          // value="15:48"
        />
      </Form>
    </div>
  )
}

DateTimePickerStoryBook.storyName = 'DateTimePicker'

export const DateTimePickerStoryBook2 = () => {
  const [minDate] = useState()
  const [maxDate] = useState()

  const addMonths = (yearMonthDay: string, monthNum: number) => {
    const arr = yearMonthDay.split('-') // 2020-08-19或2020-08
    let year = parseInt(arr[0])
    let month: number = parseInt(arr[1])
    month += monthNum
    if (month > 12) {
      // 月份加
      const yearNum = parseInt((month - 1) / 12)
      month = month % 12 === 0 ? 12 : month % 12
      year += yearNum
    } else if (month <= 0) {
      // 份减月
      month = Math.abs(month)
      const yearNum = parseInt((month + 12) / 12)
      year -= yearNum
    }
    month = month === 0 ? 1 : month
    const month2: string = month < 10 ? '0' + month : month + ''
    return year + '-' + month2
  }

  const clearFun = () => {
    console.log('clearFun')
  }
  const valueChange = (val: any) => {
    console.log('valueChange', val)
  }
  const monthItemClickFun = (data: any) => {
    let eDate = addMonths(data[0].YYYY + '-' + data[0].MM, 5)
    let min =
      data[0].YYYY + '-' + (data[0].MM < 10 ? '0' + data[0].MM : data[0].MM)
    if (data.length > 1) {
      min = addMonths(data[1].YYYY + '-' + data[1].MM, -5)
      eDate =
        data[1].YYYY + '-' + (data[1].MM < 10 ? '0' + data[1].MM : data[1].MM)
    }

    sessionStorage.setItem('pui-month-min', min)
    sessionStorage.setItem('pui-month-max', eDate)
  }
  return (
    <div>
      <Form>
        <div>年</div>
        <DateTimePicker
          isRange
          width="300px"
          placeholderStartDate="开始年份"
          placeholderEndDate="结束年份"
          showStyle="OnlyYear"
          componentId="testTime2a"
        />
        <br />
        <div>年月</div>
        <DateTimePicker
          isRange
          width="300px"
          placeholderStartDate="开始年月"
          placeholderEndDate="结束年月"
          showStyle="YearAndMonth"
          componentId="testTime2testId"
        />

        <br />
        <div>动态范围年月</div>
        <DateTimePicker
          isRange
          width="300px"
          placeholderStartDate="开始年月"
          placeholderEndDate="结束年月"
          showStyle="YearAndMonth"
          componentId="testTime2b"
          monthItemClickFun={monthItemClickFun}
          minDate={minDate}
          maxDate={maxDate}
          dynamicRangeDate
          minSession="pui-month-min"
          maxSession="pui-month-max"
        />

        <br />
        <div>年月日</div>
        <DateTimePicker
          isRange
          width="300px"
          placeholderStartDate="开始日期"
          placeholderEndDate="结束日期"
          showStyle="Common"
          componentId="testTime3b"
        />

        <br />
        <div>年月日时分</div>
        <DateTimePicker
          isRange
          width="300px"
          placeholderStartDate="开始时间"
          placeholderEndDate="结束时间"
          showStyle="CommonHHMMSS"
          componentId="testTime4b"
        />
        <br />
        <div>年月日时分 最大/最小日期</div>
        <DateTimePicker
          isRange
          width="300px"
          placeholderStartDate="开始时间"
          placeholderEndDate="结束时间"
          showStyle="CommonHHMMSS"
          componentId="testTime4bTest"
          minDate="2022-12-16 10:20:25"
          maxDate="2023-01-10 18:30:35"
        />

        <br />
        <div>时分秒</div>
        <DateTimePicker
          isRange
          width="300px"
          placeholderStartDate="开始时间"
          placeholderEndDate="结束时间"
          showStyle="HHMMSS"
          componentId="testTime5b"
        />
        <br />
        <div>禁用状态</div>
        <DateTimePicker
          disabled
          isRange
          width="300px"
          placeholderStartDate="开始日期"
          placeholderEndDate="结束日期"
          showStyle="HHMMSS"
          componentId="testTime5c"
          value={['13:29', '15:49']}
        />

        <br />
        <div>过滤器模式 / 可以为空</div>
        <DateTimePicker
          label="到港日期"
          placeholder="请输入日期"
          width="200px"
          isRange
          filterMode
          allowNullDate
          labelPosition="left"
          showStyle="CommonHHMMSS"
          componentId="testTime6cb"
        />
        <br />
        <DateTimePicker
          label="到港日期"
          placeholder="请输入日期"
          width="200px"
          isRange
          filterMode
          // allowNullDate
          labelPosition="left"
          showStyle="HHMM"
          componentId="testTime6cbafda"
          value={['13:29', '15:49']}
          clearFun={clearFun}
          onValueChange={valueChange}
        />
      </Form>
    </div>
  )
}

DateTimePickerStoryBook2.storyName = 'DateTimePicker 范围选择面板'
