import React from 'react';
import { Select, Form } from '../..';

export default {
  title: 'Data Entry/Select',
  component: Select
};

export const SelectStoryBook = () => {
  return (
    <div style={{ height: '600px', width: '200px' }}>
      <Form>
        <Select
          options="狗:dog,猫,狮子,老虎,鲸鱼"
          label="动物"
          placeholder="请选择"
          onValueChange={val => console.log(val)}
        />
        <div>禁用状态</div>
        <Select options="狗,猫,狮子,老虎,鲸鱼" disabled />

        <div>出错状态</div>
        <Select options="狗,猫,狮子,老虎,鲸鱼" error={{ show: true, message: '未选择' }} />
      </Form>
    </div>
  );
};

SelectStoryBook.storyName = 'Select';
