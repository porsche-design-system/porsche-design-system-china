import React from 'react';
import { DatePicker } from '../../';

export default {
  title: 'Data Entry/DatePicker',
  component: DatePicker
};

export const DatePickerStoryBook = () => {
  return (
    <div style={{ height: '600px' }}>
      <DatePicker
        width="300px"
        label="来访日期"
        placeholder="请选择"
        onValueChange={v => {
          console.log(v);
        }}
      />
      <br />
      <div>禁用状态</div>
      <DatePicker width="300px" label="来访日期" placeholder="请选择" disabled />
      <br />
      <div>出错状态</div>
      <DatePicker
        width="300px"
        label="来访日期"
        placeholder="请选择"
        error={{ show: true, message: '请选择' }}
      />
    </div>
  );
};
