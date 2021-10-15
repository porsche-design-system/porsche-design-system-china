import React from 'react'
import { InputNumber } from '../..'

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
          <InputNumber
            defaultValue="3"
            label="购买数量"
            min={0}
            max={10}
            width="150px"
            marginRight="30px"
            onValueChange={val => console.log(val)}
          />
          <InputNumber
            defaultValue="3"
            label="购买数量"
            min={0}
            max={10}
            width="150px"
            disabled
            marginRight="30px"
            style={{ marginLeft: 20 }}
          />
        </div>
      </div>
    </div>
  )
}

InputNumberStoryBook.storyName = 'InputNumber'

export const InputNumberStoryBook1 = () => {
  return (
    <div className="input-number-story">
      <div className="group">
        <div className="title">箭头数字加减器</div>
        <div className="show-case">
          <InputNumber
            type="arrow"
            defaultValue="3"
            label="购买数量"
            width="150px"
            min={0}
            max={10}
            marginRight="30px"
            onValueChange={val => console.log(val)}
          />
          <InputNumber
            type="arrow"
            defaultValue="3"
            label="购买数量"
            width="150px"
            min={0}
            max={10}
            disabled
            marginRight="30px"
            style={{ marginLeft: 20 }}
          />
        </div>
      </div>
    </div>
  )
}

InputNumberStoryBook1.storyName = 'Arrow InputNumber'
