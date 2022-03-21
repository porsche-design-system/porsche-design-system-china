import React, { useState } from 'react'
import { MultiSelect, Form } from '../..'

export default {
  title: 'Data Entry/MultiSelect',
  component: MultiSelect
}

export const SelectStoryBook = () => {
  const [val, setVal] = useState<any>(['dog'])
  return (
    <div style={{ width: '300px' }}>
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
        <MultiSelect
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="动物"
          placeholder="请选择"
          disabled
        />
      </Form>
    </div>
  )
}

SelectStoryBook.storyName = 'MultiSelect'

export const SelectStoryBook1 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <div>-----</div>
        <MultiSelect
          options="狗:dog,猫,狮子,老虎,非常长非常长非常长非常长非常长非常长鲸鱼"
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
    <div style={{ width: '300px' }}>
      <Form>
        <div>出错状态</div>
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼"
          placeholder="请选择"
          error={{ show: true, message: '未选择' }}
        />
      </Form>
    </div>
  )
}
SelectStoryBook2.storyName = 'Error'

export const SelectStoryBook3 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <div>显示过滤输入框</div>
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger,动物"
          placeholder="请选择"
          filterInput
          filterInputPlaceholder="查找动物"
        />
      </Form>
    </div>
  )
}
SelectStoryBook3.storyName = 'Filter Input'

export const SelectStoryBook4 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <div>显示清除按钮</div>
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          placeholder="动物"
          filterInput
          filterInputPlaceholder="查找动物"
          showClearButton
        />
      </Form>
    </div>
  )
}
SelectStoryBook4.storyName = 'Show Clear Button'

export const SelectStoryBook5 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <div>filterMode</div>
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          filterInput
          filterMode
          showClearButton
          label="动物"
          maxWidth="300px"
          optionsStyle={{ minWidth: '200px' }}
        />
      </Form>
    </div>
  )
}
SelectStoryBook5.storyName = 'Filter Mode'

export const SelectStoryBook6 = () => {
  return (
    <div style={{ width: '300px' }}>
      <Form>
        <div>去掉全选按钮</div>
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          placeholder="动物"
          filterInput
          filterInputPlaceholder="查找动物"
          showClearButton
          showCheckAll={false}
        />
      </Form>
    </div>
  )
}
SelectStoryBook6.storyName = 'Remove [全选] option'
