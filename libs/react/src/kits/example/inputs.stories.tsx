import React from 'react';
import { Input } from '../input/input';
import './inputs.stories.scss';

export default {
  title: 'Component Show/Inputs'
};

export const InputsStoryBook = () => {
  return (
    <div>
      <div className="states">Default</div>
      <div>
        <Input placeHolder="请输入" />
      </div>
      <br />
      <div className="states">Disabled</div>
      <div>
        <Input placeHolder="请输入" disabled />
      </div>
      <br />
      <div className="states">Max Length</div>
      <div>
        <Input placeHolder="最多输入10个字符" maxLength={50} />
      </div>
      <br />
      <div className="states">Label Top</div>
      <div>
        <Input
          label="姓名"
          placeHolder="请输入"
          error={{ show: true, text: '输入信息有误' }}
          required
        />
      </div>
      <br />
      <div className="states">Label Left</div>
      <div>
        <Input label="姓名" labelPosition="left" placeHolder="请输入" required />
      </div>
    </div>
  );
};
