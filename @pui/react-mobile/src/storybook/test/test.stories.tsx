import React, { useState } from 'react'

import { Button } from '../..'

export default {
  title: 'Test/Component Test'
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
      <textarea
        value={props}
        onChange={e => {
          setProps(e.target.value)
        }}
      />
      <br /> <br />
      <Button {...parsedProp}>按钮</Button>
    </div>
  )
}
