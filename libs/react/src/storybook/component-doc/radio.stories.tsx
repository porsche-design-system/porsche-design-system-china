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
RadioStoryBook2.storyName = 'Cancellable'

export const RadioStoryBook3 = () => (
  <div>
    <RadioGroup
      label={{ text: '职业', position: 'left' }}
      options="教师,医生,警察,律师"
    />
  </div>
)
RadioStoryBook3.storyName = 'With Label'

export const RadioStoryBook4 = () => {
  return (
    <div>
      <RadioGroup
        error={{ show: true, message: '请选择' }}
        options="教师,医生,警察,律师"
      />
    </div>
  )
}
RadioStoryBook4.storyName = 'Error'

export const RadioStoryBook5 = () => {
  return (
    <div>
      <RadioGroup options="教师:Teacher,医生:Doctor,警察:Policeman,律师:Lawyer" />
    </div>
  )
}
RadioStoryBook5.storyName = 'String Options'
