import React, { useState } from 'react'
import { MultiSelect, Form, Button } from '../..'

export default {
  title: 'Data Entry/MultiSelect',
  component: MultiSelect
}

export const SelectStoryBook = () => {
  const [val, setVal] = useState<any>(['dog'])
  return (
    <div style={{ height: '600px', width: '300px' }}>
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
        <Button
          onClick={() => {
            setVal(undefined)
          }}
        >
          重置
        </Button>
        <Button
          marginLeft="20px"
          onClick={() => {
            setVal(['dog', '猫'])
          }}
        >
          载入数据
        </Button>
        <div>{JSON.stringify(val)}</div>

        <div>-----</div>
        <MultiSelect
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="测试"
          placeholder="请选择"
          width="200px"
        />

        <div>禁用状态</div>
        <MultiSelect options="狗,猫,狮子,老虎,鲸鱼" disabled />

        <div>出错状态</div>
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼"
          error={{ show: true, message: '未选择' }}
        />

        <div>显示过滤输入框</div>
        <MultiSelect
          options="狗,猫,狮子,老虎,鲸鱼,牛,鸡,长颈鹿,Wolf,Deer,Tiger"
          filterInput
        />
        <div style={{ height: '400px' }}>&nbsp;</div>
      </Form>
    </div>
  )
}

SelectStoryBook.storyName = 'Select'
