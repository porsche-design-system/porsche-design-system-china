import React from 'react';
import { Input } from './input';
import './input.stories.scss';

export default {
  title: 'General/Input',
  component: Input
};

export const InputStoryBook = () => {
  return (
    <div>
      <div>
        <Input label="姓名" placeHolder="请输入" />
      </div>
      <br />
      <div>
        <Input
          label="姓名"
          placeHolder="请输入"
          error={{ show: true, text: '输入信息有误' }}
          required
        />
      </div>
      <br />
      <div>
        <Input label="姓名" labelPosition="left" placeHolder="请输入" required />
      </div>
    </div>
  );
};

InputStoryBook.storyName = 'Input';
