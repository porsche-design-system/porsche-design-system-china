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
        <CheckBox text="选项1" defaultChecked />
        <CheckBox text="选项2" />
        <CheckBox text="失效选项" disabled />
      </div>
      <br />
      <div>
        <div>Small Size</div>
        <div>
          <CheckBox text="选项1" size="small" defaultChecked />
          <CheckBox text="选项2" size="small" />
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
            <CheckBox text="唱歌" value="singing" />
            <CheckBox text="玩游戏" value="gaming" />
            <CheckBox text="跳舞" value="dance" />
            <CheckBox text="游泳" value="swimming" />
            <CheckBox text="游泳" value="swimming" />
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
            <CheckBox text="阿甘正传" />
            <CheckBox text="肖申克的救赎" />
            <CheckBox text="寻龙传说" />
            <CheckBox text="复仇者联盟" />
          </CheckBoxGroup>
        </div>
      </div>
    </div>
  );
};
