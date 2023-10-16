import React, { useState } from 'react'
import { IconCheck } from '@pui-cn/icons'
import { InputNumber } from '../..'
import './input-number.stories.scss'

export default {
  title: 'Data Entry/InputNumber',
  component: InputNumber
}

export const InputNumberStoryBook = () => {
  const [value, setValue] = useState<number | string>(0)
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
            width="130px"
            marginRight="30px"
            onValueChange={val => {
              console.log(val)
              setValue(val)
            }}
            step={1}
            value={value}
          />
          <InputNumber
            defaultValue="3"
            label="购买数量"
            min={0}
            max={10}
            width="130px"
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
            width="130px"
            min={0}
            max={10}
            marginRight="30px"
            onValueChange={val => console.log(val)}
          />
          <InputNumber
            type="arrow"
            defaultValue="3"
            label="购买数量"
            width="130px"
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

export const InputNumberStoryBook2 = () => {
  return (
    <div className="input-number-story">
      <div className="group">
        <div className="title">隐藏递增按钮</div>
        <div className="show-case">
          <InputNumber
            defaultValue="3"
            label="购买数量"
            width="130px"
            min={0}
            max={10}
            marginRight="30px"
            hideStepBtn
            onValueChange={val => console.log(val)}
          />
          <InputNumber
            type="arrow"
            defaultValue="3"
            label="购买数量"
            width="130px"
            min={0}
            max={10}
            marginRight="30px"
            hideStepBtn
            style={{ marginLeft: 20 }}
          />
        </div>
      </div>
    </div>
  )
}

InputNumberStoryBook2.storyName = 'Hide Step Button InputNumber'

export const InputNumberStoryBook3 = () => {
  return (
    <div className="input-number-story">
      <div className="group">
        <div className="title">后缀显示</div>
        <div className="show-case">
          <InputNumber
            defaultValue="3"
            label="购买数量"
            width="150px"
            min={0}
            max={10}
            marginRight="30px"
            suffixIcon={<IconCheck />}
            onValueChange={val => console.log(val)}
          />
          <InputNumber
            type="arrow"
            defaultValue="3"
            label="购买数量"
            width="150px"
            min={0}
            max={10}
            marginRight="30px"
            suffixIcon={<span className="custom-day">天</span>}
            onValueChange={val => console.log(val)}
            style={{ marginLeft: 20 }}
          />
          <InputNumber
            type="arrow"
            defaultValue="3"
            label="购买单价"
            width="150px"
            min={0}
            max={10}
            disabled
            hideStepBtn
            suffixIcon={<span className="custom-money">元</span>}
            onValueChange={val => console.log(val)}
            style={{ marginLeft: 20 }}
          />
        </div>
      </div>
    </div>
  )
}

InputNumberStoryBook3.storyName = 'InputNumber Suffix'

export const InputNumberStoryBook4 = () => {
  return (
    <div className="input-number-story">
      <div className="group">
        <div className="title">Tiny Size</div>
        <div className="show-case">
          <InputNumber
            defaultValue="3"
            label="购买数量"
            width="92px"
            min={0}
            max={10}
            marginRight="30px"
            size="tiny"
          />
          <InputNumber
            defaultValue="3"
            label="购买数量"
            width="92px"
            min={0}
            max={10}
            marginRight="30px"
            size="tiny"
            type="arrow"
          />
          <InputNumber
            defaultValue="3"
            label="购买数量"
            width="92px"
            min={0}
            max={10}
            marginRight="30px"
            suffixIcon={<IconCheck />}
            size="tiny"
          />
          <InputNumber
            type="arrow"
            defaultValue="3"
            label="购买数量"
            width="92px"
            min={0}
            max={10}
            suffixIcon={
              <span className="custom-day" style={{ fontSize: 14 }}>
                天
              </span>
            }
            size="tiny"
          />
        </div>
      </div>
    </div>
  )
}

InputNumberStoryBook4.storyName = 'Tiny Size'
