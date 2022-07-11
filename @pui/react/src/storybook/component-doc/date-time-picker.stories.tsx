import React, { useState } from 'react'
import { DateTimePicker, Form } from '../..'

export default {
  title: 'Data Entry/DateTimePicker',
  component: DateTimePicker
}

export const DateTimePickerStoryBook = () => {
  const [val, setVal] = useState<string>('2020-01-01')
  return (
    <div>
      <Form>
        <div>只显示年</div>
        <DateTimePicker
          width="300px"
          placeholder="请输入日期"
          showStyle="OnlyYear"
          componentId="testafdsdatatime"
        />
        <br />
        <div>只显示年和月</div>
        <DateTimePicker
          width="300px"
          placeholder="请输入日期"
          showStyle="YearAndMonth"
          componentId="testTime2"
        />

        <br />
        <div>显示年月日</div>
        <DateTimePicker
          width="300px"
          placeholder="请输入日期"
          showStyle="Common"
          componentId="testTime3"
        />

        <br />
        <div>显示年月日时分</div>
        <DateTimePicker
          width="300px"
          placeholder="请输入日期"
          showStyle="CommonHHMMSS"
          componentId="testTime4"
        /> 

        <br />
        <div>时分秒</div>
        <DateTimePicker
          width="300px"
          placeholder="请输入日期"
          showStyle="HHMMSS"
          componentId="testTime5"
        />

        <div>时分</div>
        <DateTimePicker
          width="300px"
          placeholder="请输入日期"
          showStyle="HHMM"
          componentId="testTime8"
        />

        <div>disabled</div>
        <DateTimePicker
          width="300px"
          disabled
          placeholder="请输入日期"
          showStyle="Common"
          componentId="testTime6"
        />

        <br />

        <DateTimePicker
          label="label在左边"
          labelPosition="left"
          width="300px"
          placeholder="请输入日期"
          showStyle="Common"
          componentId="testTime7"
        />

        <div>filterMode</div>
        <DateTimePicker
          label="到港日期"
          placeholder="请输入日期"
          filterMode={true}
          // width="300px"
          labelPosition="left"
          showStyle="Common"
          componentId="testTime5cb"
        ></DateTimePicker>
      </Form>
    </div>
  )
}

DateTimePickerStoryBook.storyName = 'DateTimePicker'

export const DateTimePickerStoryBook2 = () => {
  const [val, setVal] = useState<string>('2020-01-01')
  return (
    <div>
       <Form>
       <div>只显示年</div>
       <DateTimePicker isRange width="300px" placeholderStartDate="开始日期"
              placeholderEndDate="结束日期"
               showStyle="OnlyYear"
        componentId="testTime2a" />
       <br />
      <div>只显示年和月</div>
       <DateTimePicker isRange width="300px" placeholderStartDate="开始日期"
              placeholderEndDate="结束日期"
               showStyle="YearAndMonth"
        componentId="testTime2b" />

      <br />
      <div>显示年月日</div>
       <DateTimePicker isRange width="300px" placeholderStartDate="开始日期"
              placeholderEndDate="结束日期"
               showStyle="Common"
        componentId="testTime3b" />

      <br />
      <div>显示年月日时分</div>
       <DateTimePicker isRange width="300px" placeholderStartDate="开始日期"
              placeholderEndDate="结束日期"
               showStyle="CommonHHMMSS"
          componentId="testTime4b" />

        <br />
      <div>时分秒</div>
       <DateTimePicker isRange width="300px" placeholderStartDate="开始日期"
              placeholderEndDate="结束日期"
               showStyle="HHMMSS"
          componentId="testTime5b" />
          <br />
        <div>disabled</div>
       <DateTimePicker disabled isRange width="300px" placeholderStartDate="开始日期"
              placeholderEndDate="结束日期"
               showStyle="HHMMSS"
          componentId="testTime5c" />

        <br />
        <div>filterMode / allowNullDate</div>
        <DateTimePicker label="到港日期" placeholder="请输入日期"  placeholderStartDate="开始日期"
              placeholderEndDate="结束日期"
              isRange
              filterMode={true}
          allowNullDate={true}
              labelPosition="left" showStyle="Common"
              componentId="testTime6cb"></DateTimePicker>
        </Form>
    </div>
  )
}

DateTimePickerStoryBook2.storyName = 'DateTimePicker 范围选择面板'
