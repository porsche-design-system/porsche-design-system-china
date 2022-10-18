import React from 'react'
import { DateTimePicker, Form } from '../..'

export default {
  title: 'Data Entry/DateTimePicker',
  component: DateTimePicker
}

export const DateTimePickerStoryBookTime = () => {
  return (
    <div>
      <Form>
        <div>年月日时分</div>
        <DateTimePicker
          width="300px"
          placeholder="年月日时分"
          showStyle="CommonHHMMSS"
          componentId="testTime4"
        />

        <br />
        <div>时分秒</div>
        <DateTimePicker
          width="300px"
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
          placeholder="到港日期"
          filterMode
          // width="300px"
          labelPosition="left"
          showStyle="Common"
          componentId="testTime5cb"
        />
      </Form>
    </div>
  )
}

DateTimePickerStoryBook.storyName = 'DateTimePicker'

export const DateTimePickerStoryBook2 = () => {
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
          componentId="testTime2b"
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
        />

        <br />
        <div>过滤器模式 / 可以为空</div>
        <DateTimePicker
          label="到港日期"
          placeholder="请输入日期"
          // placeholderStartDate="开始日期"
          // placeholderEndDate="结束日期"
          isRange
          filterMode
          allowNullDate
          labelPosition="left"
          showStyle="Common"
          componentId="testTime6cb"
        />
      </Form>
    </div>
  )
}

DateTimePickerStoryBook2.storyName = 'DateTimePicker 范围选择面板'
