import React, { useState } from 'react'

import { Input, TextArea, Button } from '../..'

export default {
  title: 'Test/Component Test'
}

export const InputTestStoryBook = () => {
  const [props, setProps] = useState('{ "value": "文字" }')
  let parsedProp = {}
  try {
    parsedProp = JSON.parse(props)
  } catch (e) {}

  return (
    <div className="form-wrap">
      <div>Input</div>
      <TextArea value={props} onValueChange={setProps} />
      <br /> <br />
      <Input {...parsedProp} />
    </div>
  )
}

export const ButtonTestStoryBook = () => {
  const [props, setProps] = useState('{ "type": "primary" }')
  let parsedProp = {}
  try {
    parsedProp = JSON.parse(props)
  } catch (e) {}

  return (
    <div className="form-wrap">
      <div>Button</div>
      <TextArea value={props} onValueChange={setProps} />
      <br /> <br />
      <Button {...parsedProp}>按钮</Button>
    </div>
  )
}
