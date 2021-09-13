import React, { useState } from 'react'
import { MultiSelect, Form, Button } from '../..'

export default {
  title: 'Data Entry/MultiSelect',
  component: MultiSelect
}

export const SelectStoryBook = () => {
  const [val, setVal] = useState<any>(['dog'])
  return (
    <div style={{ height: '400px', width: '300px' }}>
      <Form>
        <MultiSelect
          value={val}
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="动物"
          placeholder="请选择"
          onValueChange={setVal}
          width="200px"
        />
        <br />
        <div>禁用状态</div>
        <MultiSelect options="狗,猫,狮子,老虎,鲸鱼" disabled />
      </Form>
    </div>
  )
}

SelectStoryBook.storyName = 'MultiSelect'

export const SelectStoryBook1 = () => {
  return (
    <div style={{ height: '400px', width: '300px' }}>
      <Form>
      <div>-----</div>
        <MultiSelect
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="测试"
          placeholder="请选择"
          width="200px"
        />
      </Form>
    </div>
  )
}
SelectStoryBook1.storyName = 'String Options'

export const SelectStoryBook2 = () => {
  return (
    <div style={{ height: '400px', width: '300px' }}>
      <Form>
        <div>出错状态</div>
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼"
          error={{ show: true, message: '未选择' }}
        />
      </Form>
    </div>
  )
}
SelectStoryBook2.storyName = 'Error'

export const SelectStoryBook3 = () => {
  return (
    <div style={{ height: '400px', width: '300px' }}>
      <Form>
        <div>显示过滤输入框</div>
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          filterInput
        />
      </Form>
    </div>
  )
}
SelectStoryBook3.storyName = 'Show filter Input'
