import React, { useState } from 'react';
import { CheckBox } from '../../';

import './checkbox.stories.scss';

export default {
  title: 'Data Entry/CheckBox',
  component: CheckBox
};

export const CheckBoxStoryBook = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <div>
      <CheckBox
        label="选项1"
        checked={checked1}
        onChange={evt => {
          setChecked1(evt.target.checked);
        }}
      />
      <CheckBox
        label="选项2"
        checked={checked2}
        onChange={evt => {
          setChecked2(evt.target.checked);
        }}
      />
      <CheckBox label="失效选项" disabled />
    </div>
  );
};
