import React from 'react';
import { Switch } from '../..';

export default {
  title: 'Data Entry/Switch',
  component: Switch
};

export const SwitchBook = () => {
  return (
    <div>
      <Switch label={{ text: '是否发送邮件', position: 'left', width: '120px' }} />
      <Switch
        label={{ text: '禁用状态', position: 'left', width: '120px' }}
        disabled
        value={true}
      />
      <Switch
        label={{ text: '出错状态', position: 'left', width: '120px' }}
        error={{ show: true, message: '必须打开' }}
      />
      <Switch
        label={{ text: '修改值为 0/1', position: 'left', width: '120px' }}
        alterValues="ZeroAndOne"
        onValueChange={val => {
          console.log(val);
        }}
      />
      <Switch
        label={{ text: '修改值为 false/true', position: 'left', width: '120px' }}
        alterValues="FalseAndTrue"
        onValueChange={val => {
          console.log(val);
        }}
      />
      <Switch
        label={{ text: '修改值为 male/female', position: 'left', width: '120px' }}
        alterValues={['Male', 'Female']}
        onValueChange={val => {
          console.log(val);
        }}
      />
    </div>
  );
};
