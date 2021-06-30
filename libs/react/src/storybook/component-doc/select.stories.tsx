import React, { useState } from 'react'
import { Select, Form, Button } from '../..'

export default {
  title: 'Data Entry/Select',
  component: Select
}

export const SelectStoryBook = () => {
  const [val, setVal] = useState<any>('dog')
  return (
    <div style={{ height: '600px', width: '300px' }}>
      <Form>
        <Select
          value={val}
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="动物"
          placeholder="请选择"
          onValueChange={setVal}
          width="200px"
        />
        <Button
          marginLeft="20px"
          onClick={() => {
            setVal(undefined)
          }}
        >
          重置
        </Button>
        <div>禁用状态</div>
        <Select options="狗,猫,狮子,老虎,鲸鱼" disabled />

        <div>出错状态</div>
        <Select
          options="狗,猫,狮子,老虎,鲸鱼"
          error={{ show: true, message: '未选择' }}
        />
      </Form>
    </div>
  )
}

SelectStoryBook.storyName = 'Select'
