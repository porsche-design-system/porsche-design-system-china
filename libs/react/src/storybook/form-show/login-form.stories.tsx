import React, { useState } from 'react'
import { IconArrowHeadRight } from '@pui/icons'
import { Button, Input, Form, TextArea } from '../..'

import './login-form.stories.scss'

export default {
  title: 'Form Example/Login Form'
}

export const LoginStoryBook = () => {
  const [formData, setFormData] = useState({})

  return (
    <div className="form-wrap">
      <div className="top-title">用户登录</div>
      <Form
        data={formData}
        onDataChange={v => {
          console.log(v)
          setFormData(v)
        }}
      >
        <div>
          <Input name="user" placeholder="用户名" />
          <Input name="password" placeholder="密码" type="password" />
          <Button
            submit
            type="primary"
            icon={IconArrowHeadRight}
            style={{ width: '100%' }}
          >
            提 交
          </Button>
        </div>
      </Form>
      <div>{JSON.stringify(formData)}</div>
    </div>
  )
}
