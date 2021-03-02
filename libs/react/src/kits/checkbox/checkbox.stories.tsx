import React from 'react';
import { CheckBox } from './checkbox';
import './checkbox.stories.scss';

export default {
  title: 'General/CheckBox',
  component: CheckBox
};

export const CheckBoxStoryBook = () => {
  return (
    <div>
      <CheckBox />
    </div>
  );
};
