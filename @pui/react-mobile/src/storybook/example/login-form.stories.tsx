import React, { useState } from 'react'
import { IconArrowHeadRight } from '@pui/icons'
import { Button } from '../..'

import './login-form.stories.scss'

export default {
  title: 'Example/Login Form'
}

export const LoginStoryBook = () => {
  const [formData, setFormData] = useState({})

  return (
    <div className="form-wrap">
      <div className="top-title">用户登录</div>
      <Button
            submit
            type="primary"
            icon={IconArrowHeadRight}
            style={{ width: '100%' }}
          >
            提 交
          </Button>
    </div>
  )
}
