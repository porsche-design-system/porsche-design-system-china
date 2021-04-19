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
    </div>
  );
};
