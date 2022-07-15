import React from 'react'
import { TextArea, FashionTextArea } from '../..'

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

export const DefaultHideMaxLengthTextarea = () => {
  return (
    <div>
      <FashionTextArea placeholder="最多输入20个字符" maxLength={20} />
    </div>
  )
}

DefaultHideMaxLengthTextarea.storyName = 'Default HIDE MAX LENGTH'

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
