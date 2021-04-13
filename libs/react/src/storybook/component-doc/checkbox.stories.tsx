import React, { useState } from 'react';
import { CheckBox, CheckBoxGroup } from '../../';

import './checkbox.stories.scss';

export default {
  title: 'Data Entry/CheckBox',
  component: CheckBox
};

export const CheckBoxStoryBook = () => {
  const [pickedValues, setPickedValues] = useState<string[]>(['singing', 'swimming', 'xxxx']);
  const [showError, setShowError] = useState(true);

  return (
    <div>
      <div>
        <CheckBox label="选项1" defaultChecked />
        <CheckBox label="选项2" />
        <CheckBox label="失效选项" disabled />
      </div>
      <br />
      <div>
        <div>Small Size</div>
        <div>
          <CheckBox label="选项1" size="small" defaultChecked />
          <CheckBox label="选项2" size="small" />
        </div>
      </div>
      <br />
      <div>
        <div>With Label</div>
        <div>
          <CheckBoxGroup
            label="兴趣爱好"
            required
            value={pickedValues}
            onValueChange={values => {
              setPickedValues(values);
            }}
          >
            <CheckBox label="唱歌" value="singing" />
            <CheckBox label="玩游戏" value="gaming" />
            <CheckBox label="跳舞" value="dance" />
            <CheckBox label="游泳" value="swimming" />
            <CheckBox label="游泳" value="swimming" />
          </CheckBoxGroup>
        </div>
        <div>{JSON.stringify(pickedValues)}</div>
      </div>
      <br />
      <div>
        <div>Error</div>
        <div>
          <CheckBoxGroup
            label={{ text: '热门电影', position: 'left' }}
            required
            error={{ show: showError, message: '必须勾选3个电影' }}
            onValueChange={() => {
              setShowError(false);
            }}
          >
            <CheckBox label="阿甘正传" />
            <CheckBox label="肖申克的救赎" />
            <CheckBox label="寻龙传说" />
            <CheckBox label="复仇者联盟" />
          </CheckBoxGroup>
        </div>
      </div>
    </div>
  );
};
