import React, { useState } from 'react'
import { Radio, RadioGroup, Form } from '../..'

export default {
  title: 'Data Entry/Radio',
  component: Radio,
  subcomponents: { RadioGroup }
}

export const RadioStoryBook = () => {
  const [showError, setShowError] = useState(true)

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

export const RadioStoryBook2 = () => (
  <div>
    <div>点击已选定Radio可以去掉选择</div>
    <br />
    <RadioGroup allowCancelSelection>
      <Radio text="选项1" />
      <Radio text="选项2" />
      <Radio text="选项3" />
      <Radio text="选项4" />
    </RadioGroup>
  </div>
)
RadioStoryBook2.storyName = 'Cancellable'

export const RadioStoryBook3 = () => (
  <div>
    <RadioGroup label={{ text: '职业', position: 'left' }}>
      <Radio text="教师" value="教师" />
      <Radio text="医生" value="医生" />
      <Radio text="警察" value="警察" />
      <Radio text="律师" value="律师" />
    </RadioGroup>
  </div>
)
RadioStoryBook3.storyName = 'With Label'


export const RadioStoryBook4 = () => {
  return(
  <div>
    <RadioGroup
      error={{show:true, message: '请选择'}}
    >
      <Radio text="教师" value="教师" />
      <Radio text="医生" value="医生" />
      <Radio text="警察" value="警察" />
      <Radio text="律师" value="律师" />
    </RadioGroup>
  </div>
  )
}
RadioStoryBook4.storyName = 'Error'

export const RadioStoryBook5 = () => {
  return(
  <div>
   <RadioGroup options="教师,医生,警察,律师" />
  </div>
  )
}
RadioStoryBook5.storyName = 'String Options'
