import React from 'react';
import { Radio } from '../../';

export default {
  title: 'General/Radio',
  component: Radio
};

export const RadioStoryBook = () => {
  return (
    <div>
      <Radio label="选项1" />
      <Radio label="选项2" />
      <Radio label="选项3" />
      <Radio label="选项4" disabled />
    </div>
  );
};

RadioStoryBook.storyName = 'Radio';
