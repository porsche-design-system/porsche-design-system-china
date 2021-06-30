import React from 'react'
import { InputNumber } from '../..'
import './input-number.stories.scss'

export default {
  title: 'Data Entry/InputNumber',
  component: InputNumber
}

export const InputNumberStoryBook = () => {
  return (
    <div className="input-number-story">
      <div className="group">
        <div className="title">默认数字加减器</div>
        <div className="show-case">
          <InputNumber defaultValue='3' min={0} max={10} />
          <InputNumber defaultValue='3' min={0} max={10} disabled style={{ marginLeft: 20 }} />
        </div>
      </div>
      <div className="group">
        <div className="title">箭头数字加减器</div>
        <div className="show-case">
          <InputNumber type='arrow' defaultValue='3' min={0} max={10} />
          <InputNumber type='arrow' defaultValue='3' min={0} max={10} disabled style={{ marginLeft: 20 }} />
        </div>
      </div>
    </div>
  )
}

InputNumberStoryBook.storyName = 'InputNumber'
