import React from 'react';
import { TextArea } from './textarea';
import './textarea.stories.scss';

export default {
  title: 'General/TextArea',
  component: TextArea
};

export const TextAreaStoryBook = () => {
  return (
    <div>
      <TextArea placeHolder="请输入内容" />
      <br />
      <TextArea placeHolder="请输入内容" label="详细地址:" required />
      <br />
      <TextArea
        placeHolder="请输入内容"
        label="详细地址:"
        labelPosition="left"
        error={{ show: true, text: '您输入的地址有误' }}
      />
      <br />
    </div>
  );
};

TextAreaStoryBook.storyName = 'TextArea';
