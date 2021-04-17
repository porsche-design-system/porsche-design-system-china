import React from 'react';
import { DatePicker } from '../../';

export default {
  title: 'Data Entry/DatePicker',
  component: DatePicker
};

export const DatePickerStoryBook = () => {
  return (
    <div style={{ height: '500px' }}>
      <DatePicker
        label="来访日期"
        placeholder="请选择"
        onValueChange={v => {
          console.log(v);
        }}
      />
      <br />
      <DatePicker label="来访日期" placeholder="请选择" disabled />
    </div>
  );
};
