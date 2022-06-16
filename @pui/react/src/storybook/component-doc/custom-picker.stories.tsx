import React, { useState } from 'react'
import { CustomPicker, createCustomPicker, Form } from '../..'

import './col.stories.scss'

export default {
  title: 'Data Entry/CustomPicker',
  component: CustomPicker
}

export const CustomPickerStoryBook = () => {
  const colors = ['red', 'blue', 'green', 'yellow']

  const ColorPicker = createCustomPicker({
    label: '颜色选择',
    placeHolder: '请选择',
    width: '300px',
    displayRender(value: string, onValueChange, size) {
      if (value) {
        return (
          <div style={{ display: 'inline-block' }}>
            <div
              style={{
                backgroundColor: value,
                width: size === 'small' ? '15px' : '20px',
                height: size === 'small' ? '15px' : '20px',
                float: 'left',
                marginTop: size === 'small' ? '9px' : '13px',
                marginRight: '5px'
              }}
            />{' '}
            {value.toUpperCase()}
          </div>
        )
      }
      return null
    },
    popRender(value, onValueChange, hide) {
      return (
        <div style={{ padding: '10px' }}>
          <div>车身颜色：</div>
          <div style={{ marginTop: '5px' }}>
            {colors.map(c => (
              <div
                key={c}
                onClick={() => {
                  onValueChange(c)
                  hide()
                }}
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: c,
                  display: 'inline-block',
                  marginRight: '5px',
                  cursor: 'pointer',
                  border: value === c ? '3px solid black' : ''
                }}
              />
            ))}
          </div>
        </div>
      )
    }
  })

  return (
    <div>
      <div>使用 createCustomPicker 创建自定义选择器</div>
      <br />
      <ColorPicker />
      <br /> <br />
      <ColorPicker label="禁用状态" disabled />
      <br /> <br />
      <ColorPicker label="颜色选择" filterMode showClearButton />
      <br /> <br />
      <ColorPicker label="颜色选择(禁用)" filterMode disabled />
    </div>
  )
}

export const CustomPickerStoryBook2 = () => {
  const model = ['911', '718', 'cayenne', 'panamera']
  const imgPrefix = 'https://static.porsche-preview.cn/static/car-model/'
  return (
    <div>
      <div>直接使用 &lt;CustomPicker /&gt;</div>
      <CustomPicker
        width="300px"
        popRender={(value: string, onValueChange, hide) => {
          return (
            <div>
              {model.map(m => (
                <div
                  style={{
                    padding: '10px',
                    cursor: 'pointer',
                    lineHeight: '30px'
                  }}
                  onClick={() => {
                    onValueChange(m)
                    hide()
                  }}
                >
                  <img height="30px" src={`${imgPrefix}${m}.jpg`} alt="" />{' '}
                  {m.toUpperCase()}
                </div>
              ))}
            </div>
          )
        }}
      />
    </div>
  )
}

CustomPickerStoryBook2.storyName = '<CustomPicker />'

export const CustomPickerStoryBook3 = () => {
  const model = ['911', '718', 'cayenne', 'panamera']
  const imgPrefix = 'https://static.porsche-preview.cn/static/car-model/'

  const [data, setData] = useState({ model: '911' })

  return (
    <div>
      <div>使用Form绑定</div>
      <Form data={data} onDataChange={setData}>
        <CustomPicker
          name="model"
          width="300px"
          popRender={(value: string, onValueChange, hide) => {
            return (
              <div>
                {model.map(m => (
                  <div
                    style={{
                      padding: '10px',
                      cursor: 'pointer',
                      lineHeight: '30px'
                    }}
                    onClick={() => {
                      onValueChange(m)
                      hide()
                    }}
                  >
                    <img
                      width="65px"
                      height="30px"
                      src={`${imgPrefix}${m}.jpg`}
                      alt=""
                    />{' '}
                    {m.toUpperCase()}
                  </div>
                ))}
              </div>
            )
          }}
        />
      </Form>
      {JSON.stringify(data)}
    </div>
  )
}

CustomPickerStoryBook3.storyName = 'Bind with <Form/>'
