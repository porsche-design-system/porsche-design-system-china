import React from 'react';
import { Radio, RadioGroup } from '../..';

export default {
  title: 'Data Entry/Radio',
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

      <br />

      <RadioGroup>
        <Radio label="选项1" />
        <Radio label="选项2" />
        <Radio label="选项3" />
        <Radio label="选项4" disabled />
      </RadioGroup>

      <br />

      <RadioGroup disabled>
        <Radio label="选项1" />
        <Radio label="选项2" />
        <Radio label="选项3" />
        <Radio label="选项4" disabled />
      </RadioGroup>

      <br />

      <RadioGroup label={{ text: '职业' }} required>
        <Radio label="教师" />
        <Radio label="医生" />
        <Radio label="警察" />
        <Radio label="律师" />
      </RadioGroup>
    </div>
  );
};

RadioStoryBook.storyName = 'Radio';
