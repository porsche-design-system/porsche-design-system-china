import React from 'react';
import { Input } from '../../';

import '../../styles/index.scss';

export default {
  title: 'General/Input',
  component: Input
};

export const InputStoryBook = () => {
  return (
    <div>
      <div>
        <Input label="姓名" placeholder="请输入" />
      </div>
      <br />
      <div>
        <Input
          label="姓名"
          placeholder="请输入"
          error={{ show: true, text: '输入信息有误' }}
          required
        />
      </div>
      <br />
      <div>
        <Input label="姓名" labelPosition="left" placeholder="请输入" required />
      </div>
    </div>
  );
};

InputStoryBook.storyName = 'Input';
