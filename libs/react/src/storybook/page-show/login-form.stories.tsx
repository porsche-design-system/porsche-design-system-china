import React from 'react';
import { IconArrowHeadRight } from '@pui/icons';
import { Button, Input } from '../../';

import './login-form.stories.scss';

export default {
  title: 'Page Show/Login Form'
};

export const LoginStoryBook = () => {
  return (
    <div className="form-wrap">
      <div className="top-title">用户登录</div>
      <Input placeholder="用户名" />
      <Input placeholder="密码" />
      <Button type="primary" icon={IconArrowHeadRight}>
        提 交
      </Button>
    </div>
  );
};
