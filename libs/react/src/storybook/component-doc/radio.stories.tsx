import React from 'react';
import { Radio, RadioGroup } from '../..';

export default {
  title: 'General/Radio',
  component: Radio
};

export const RadioStoryBook = () => {
  return (
    <div>
      <RadioGroup
        onChange={evt => {
          console.log(evt.target.value);
        }}
        value="val3"
      >
        <Radio label="选项1" value="val1" checked />
        <Radio label="选项2" value="val2" />
        <Radio label="选项3" value="val3" />
        <Radio label="选项4" value="val4" disabled />
      </RadioGroup>

      <RadioGroup>
        <Radio label="选项1" />
        <Radio label="选项2" />
        <Radio label="选项3" />
        <Radio label="选项4" disabled />
      </RadioGroup>

      <RadioGroup disabled>
        <Radio label="选项1" />
        <Radio label="选项2" />
        <Radio label="选项3" />
        <Radio label="选项4" disabled />
      </RadioGroup>
    </div>
  );
};

RadioStoryBook.storyName = 'Radio';
