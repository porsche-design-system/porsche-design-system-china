import React, { useState } from 'react'
import { Select, Form, Button } from '../..'
import './select.stories.scss'

export default {
  title: 'Data Entry/Select',
  component: Select
}

export const SelectStoryBook = () => {
  return (
    <div style={{ height: '350px', width: '300px' }}>
      <Form>
        <Select
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="动物"
          placeholder="请选择"
          width="200px"
        />
        <div>禁用状态</div>
        <Select options="狗,猫,狮子,老虎,鲸鱼" disabled />
      </Form>
    </div>
  )
}

SelectStoryBook.storyName = 'Select'

export const SelectStoryBook1 = () => {
  return (
    <div style={{ height: '350px', width: '300px' }}>
      <Form>
        <Select
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="动物"
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
    <div style={{ height: '350px', width: '300px' }}>
      <Form>
        <div>出错状态</div>
        <Select
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
    <div style={{ height: '500px', width: '300px' }}>
      <Form>
        <div>显示过滤输入框</div>
        <Select
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          filterInput
        />
      </Form>
    </div>
  )
}

SelectStoryBook3.storyName = 'Show filter Input'

export const SelectStoryBook4 = () => {
  const [val, setVal] = useState<any>('dog')
  const [open, setOpen] = useState(true)
  return (
    <div style={{ height: '350px', width: '300px' }}>
      <Form>
        <div>控制菜单显示</div>
        <div className="select-story">
          <Select
            open={open}
            value={val}
            options="狗:dog,猫,狮子,老虎,鲸鱼"
            label="动物"
            placeholder="请选择"
            onValueChange={val => {
              setVal(val)
              setOpen(false)
            }}
            width="200px"
          />
          <Button
            className="select-story_button"
            marginLeft="20px"
            onClick={() => {
              setVal(undefined)
            }}
          >
            重置
          </Button>
        </div>
      </Form>
    </div>
  )
}

SelectStoryBook4.storyName = 'Menu Control'
