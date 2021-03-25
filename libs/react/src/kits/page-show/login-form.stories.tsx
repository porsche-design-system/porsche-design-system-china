import React from 'react';
import { Button } from '../button/button';
import { Input } from '../input/input';

import '../../styles/index.scss';
import './login-form.stories.scss';

export default {
  title: 'Page Show/Login Form'
};

export const LoginStoryBook = () => {
  return (
    <div className="form-wrap">
      <div className="top-title">用户登录</div>
      <Input placeholder="用户名" className="full-width" />
      <br />
      <Input placeholder="密码" className="full-width" />
      <br />
      <Button type="primary" className="full-width">
        提交
      </Button>
    </div>
  );
};
