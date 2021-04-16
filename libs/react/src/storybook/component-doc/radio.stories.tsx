import React, { useState } from 'react';
import { Radio, RadioGroup } from '../..';

export default {
  title: 'Data Entry/Radio',
  component: Radio
};

export const RadioStoryBook = () => {
  const [showError, setShowError] = useState(true);
  const [pickedValue, setPickedValue] = useState('医生');

  return (
    <div>
      <RadioGroup
        onValueChange={value => {
          console.log(value);
        }}
        value="val3"
      >
        <Radio text="选项1" value="val1" />
        <Radio text="选项2" value="val2" />
        <Radio text="选项3" value="val3" />
        <Radio text="选项4" value="val4" disabled />
      </RadioGroup>

      <br />

      <RadioGroup disabled>
        <Radio text="选项1" />
        <Radio text="选项2" />
        <Radio text="选项3" />
        <Radio text="选项4" disabled />
      </RadioGroup>

      <br />

      <div>Small Size</div>
      <RadioGroup>
        <Radio text="选项1" size="small" />
        <Radio text="选项2" size="small" />
        <Radio text="选项3" size="small" />
      </RadioGroup>

      <br />

      <div>Error</div>
      <RadioGroup
        label={{ text: '职业', position: 'left' }}
        error={{ show: showError, message: '请选择' }}
        onValueChange={() => {
          setShowError(false);
        }}
      >
        <Radio text="教师" />
        <Radio text="医生" />
        <Radio text="警察" />
        <Radio text="律师" />
      </RadioGroup>

      <br />

      <div>With Label</div>
      <RadioGroup
        label={{ text: '职业', position: 'left' }}
        value={pickedValue}
        onValueChange={value => {
          setPickedValue(value);
        }}
      >
        <Radio text="教师" value="教师" />
        <Radio text="医生" value="医生" />
        <Radio text="警察" value="警察" />
        <Radio text="律师" value="律师" />
      </RadioGroup>
      {pickedValue}
    </div>
  );
};

RadioStoryBook.storyName = 'Radio';
