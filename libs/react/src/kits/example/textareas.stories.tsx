import React from 'react';
import { TextArea } from '../textarea/textarea';
import './textareas.stories.scss';

export default {
  title: 'Component Show/TextAreas'
};

export const InputsStoryBook = () => {
  return (
    <div>
      <div className="states">Default</div>
      <div>
        <TextArea placeHolder="请输入" />
      </div>
      <br />
      <div className="states">Disabled</div>
      <div>
        <TextArea placeHolder="请输入" disabled />
      </div>
      <br />
      <div className="states">Max Length</div>
      <div>
        <TextArea placeHolder="最多输入40个字符" maxLength={40} />
      </div>
      <br />
      <div className="states">Label Top</div>
      <div>
        <TextArea
          label="姓名"
          placeHolder="请输入"
          error={{ show: true, text: '输入信息有误' }}
          required
        />
      </div>
      <br />
      <div className="states">Label Left</div>
      <div>
        <TextArea label="姓名" labelPosition="left" placeHolder="请输入" required />
      </div>
    </div>
  );
};
