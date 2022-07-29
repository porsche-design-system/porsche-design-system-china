import React, { useState } from 'react'
import { Radio, RadioGroup, Form } from '../..'

export default {
  title: 'Data Entry/Radio',
  component: Radio,
  subcomponents: { RadioGroup }
}

export const RadioStoryBook = () => {
  return (
    <div>
      <Form>
        <RadioGroup
          onValueChange={value => {
            console.log(value)
          }}
          defaultValue="val3"
        >
          <Radio text="选项1" value="val1" />
          <Radio text="选项2" value="val2" />
          <Radio text="选项3" value="val3" />
          <Radio text="选项4" value="val4" disabled />
        </RadioGroup>

        <br />

        <RadioGroup disabled>
          <Radio text="选项1" />
          <Radio text="选项2" />
          <Radio text="选项3" />
          <Radio text="选项4" disabled />
        </RadioGroup>
      </Form>
    </div>
  )
}

RadioStoryBook.storyName = 'Radio'

export const RadioStoryBook2 = () => {
  const [val, setVal] = useState(1)
  return (
    <div>
      <div>value值支持使用number型，options必须写成object形式</div>
      <br />
      <RadioGroup
        value={val}
        onValueChange={setVal}
        options={[
          { text: '选择1', value: 1 },
          { text: '选择2', value: 2 },
          { text: '选择3', value: 0 }
        ]}
      />
      <br /> <br />
      <div>选定值: {JSON.stringify(val)}</div>
    </div>
  )
}
RadioStoryBook2.storyName = 'Number Value'

export const RadioStoryBook3 = () => {
  const [val, setVal] = useState('选项1')
  return (
    <div>
      <div>点击已选定Radio可以去掉选择</div>
      <br />
      <RadioGroup
        value={val}
        onValueChange={setVal}
        options="选项1,选项2,选项3,选项4"
        allowCancelSelection
      />
    </div>
  )
}
RadioStoryBook3.storyName = 'Cancellable'

export const RadioStoryBook4 = () => (
  <div>
    <RadioGroup
      label={{ text: '职业', position: 'left' }}
      options="教师,医生,警察,律师"
    />
  </div>
)
RadioStoryBook4.storyName = 'With Label'

export const RadioStoryBook5 = () => {
  return (
    <div>
      <RadioGroup
        error={{ show: true, message: '请选择' }}
        options="教师,医生,警察,律师"
      />
    </div>
  )
}
RadioStoryBook5.storyName = 'Error'

export const RadioStoryBook6 = () => {
  return (
    <div>
      <RadioGroup options="教师:Teacher,医生:Doctor,警察:Policeman,律师:Lawyer" />
    </div>
  )
}
RadioStoryBook6.storyName = 'String Options'

export const RadioStoryBook7 = () => {
  return (
    <div>
      <RadioGroup
        itemsDistance={{ x: '1px', y: '10px' }}
        options="教师:Teacher,医生:Doctor,警察:Policeman,律师:Lawyer"
      />
    </div>
  )
}
RadioStoryBook7.storyName = 'Items Distance'
