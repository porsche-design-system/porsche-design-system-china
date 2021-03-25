import React from 'react';
import { Input } from '../../';

import './inputs.stories.scss';

export default {
  title: 'Component Show/Inputs'
};

export const InputsStoryBook = () => {
  return (
    <div>
      <div className="states">Default</div>
      <div>
        <Input placeholder="请输入" />
      </div>
      <br />
      <div className="states">Disabled</div>
      <div>
        <Input placeholder="请输入" disabled />
      </div>
      <br />
      <div className="states">Max Length</div>
      <div>
        <Input placeholder="最多输入10个字符" maxLength={50} />
      </div>
      <br />
      <div className="states">Label Top</div>
      <div>
        <Input
          label="姓名"
          placeholder="请输入"
          error={{ show: true, text: '输入信息有误' }}
          required
        />
      </div>
      <br />
      <div className="states">Label Left</div>
      <div>
        <Input label="姓名" labelPosition="left" placeholder="请输入" required />
      </div>
    </div>
  );
};
