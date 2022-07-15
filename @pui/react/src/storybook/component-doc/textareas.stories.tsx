import React from 'react'
import { TextArea } from '../..'

import './textareas.stories.scss'

export default {
  title: 'Data Entry/TextArea',
  component: TextArea
}

export const TextAreaStoryBook = () => {
  return (
    <div>
      <div className="states">Default</div>
      <div>
        <TextArea
          placeholder="请输入"
          width="400px"
          onValueChange={val => {
            console.log(val)
          }}
          onBlur={evt => {
            console.log(evt)
          }}
        />
      </div>
      <br />
      <div className="states">Disabled</div>
      <div>
        <TextArea placeholder="请输入" width="400px" disabled />
      </div>
      <br />
    </div>
  )
}

TextAreaStoryBook.storyName = 'TextArea'

export const TextAreaStoryBook1 = () => {
  return (
    <div>
      <TextArea
        defaultValue="默认文字"
        placeholder="最多输入200个字符"
        maxLength={200}
        width="400px"
      />
    </div>
  )
}

TextAreaStoryBook1.storyName = 'MAX LENGTH'

export const TextAreaStoryBook2 = () => {
  return (
    <div>
      <TextArea
        label="备注"
        placeholder="请输入"
        error={{ show: true, message: '输入信息有误' }}
        width="400px"
      />
    </div>
  )
}

TextAreaStoryBook2.storyName = 'Error'

export const TextAreaStoryBook3 = () => {
  return (
    <div>
      <TextArea
        label="备注"
        placeholder="请输入"
        error={{ show: true, message: '输入信息有误' }}
        width="400px"
      />
    </div>
  )
}

TextAreaStoryBook3.storyName = 'LABEL TOP'

export const TextAreaStoryBook4 = () => {
  return (
    <div>
      <TextArea
        label={{ text: '备注', position: 'left' }}
        placeholder="请输入"
        width="400px"
      />
    </div>
  )
}

TextAreaStoryBook4.storyName = 'LABEL LEFT'

export const TextAreaStoryBook5 = () => {
  return (
    <div>
      <TextArea
        label={{ text: '备注', textAlign: 'right', position: 'left' }}
        placeholder="请输入"
        width="400px"
      />
    </div>
  )
}

TextAreaStoryBook5.storyName = 'Label Left / Text Align Right'

export const TextAreaStoryBook6 = () => {
  return (
    <div>
      <TextArea
        label="自动调节高度"
        placeholder="请输入"
        width="400px"
        autoAdjustHeight
        defaultHeightOfRow={1}
      />
      <br /> <br /> <br />
      <TextArea
        label="自动调节高度(默认3行高度)"
        placeholder="请输入"
        width="400px"
        autoAdjustHeight
        defaultHeightOfRow={3}
        maxLength={300}
      />
    </div>
  )
}

TextAreaStoryBook6.storyName = 'Auto Adjust Height'

export const TextAreaStoryBook7 = () => {
  return (
    <div>
      <TextArea
        label="只有获得焦点才显示计数器"
        placeholder="请输入"
        width="400px"
        maxLength={100}
        showCharCountOnFocus
      />
    </div>
  )
}

TextAreaStoryBook7.storyName = 'Show Char Count On Focus'
