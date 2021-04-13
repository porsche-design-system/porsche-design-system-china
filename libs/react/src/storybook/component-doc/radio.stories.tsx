import React, { useState } from 'react';
import { Radio, RadioGroup } from '../..';

export default {
  title: 'Data Entry/Radio',
  component: Radio
};

export const RadioStoryBook = () => {
  const [showError, setShowError] = useState(true);

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

      <RadioGroup disabled>
        <Radio label="选项1" />
        <Radio label="选项2" />
        <Radio label="选项3" />
        <Radio label="选项4" disabled />
      </RadioGroup>

      <br />

      <div>Small Size</div>
      <RadioGroup>
        <Radio label="选项1" size="small" />
        <Radio label="选项2" size="small" />
        <Radio label="选项3" size="small" />
      </RadioGroup>

      <br />

      <div>Error</div>
      <RadioGroup
        label={{ text: '职业', position: 'left' }}
        required
        error={{ show: showError, message: '请选择' }}
        onChange={() => {
          setShowError(false);
        }}
      >
        <Radio label="教师" />
        <Radio label="医生" />
        <Radio label="警察" />
        <Radio label="律师" />
      </RadioGroup>

      <br />

      <div>With Label</div>
      <RadioGroup label={{ text: '职业', position: 'left' }} required>
        <Radio label="教师" />
        <Radio label="医生" />
        <Radio label="警察" />
        <Radio label="律师" />
      </RadioGroup>
    </div>
  );
};

RadioStoryBook.storyName = 'Radio';
