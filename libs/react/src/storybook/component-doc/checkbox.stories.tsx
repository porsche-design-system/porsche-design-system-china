import React, { useState } from 'react';
import { CheckBox, CheckBoxGroup } from '../../';

import './checkbox.stories.scss';

export default {
  title: 'Data Entry/CheckBox',
  component: CheckBox
};

export const CheckBoxStoryBook = () => {
  const [pickedValues, setPickedValues] = useState<string[]>([
    'singing',
    'swimming',
    'xxxx'
  ]);
  const [showError, setShowError] = useState(true);

  return (
    <div>
      <div>
        <CheckBox text="选项1" defaultChecked />
        <br />
        <CheckBox text="选项2" />
        <br />
        <CheckBox text="失效选项" disabled />
      </div>
      <br />
      <div>
        <div>Small Size</div>
        <div>
          <CheckBoxGroup>
            <CheckBox text="选项1" size="small" checked />
            <CheckBox text="选项2" size="small" />
          </CheckBoxGroup>
        </div>
      </div>
      <br />
      <div>
        <div>With Label</div>
        <div>
          <CheckBoxGroup
            label="兴趣爱好"
            value={pickedValues}
            onValueChange={setPickedValues}
            width="300px"
          >
            <CheckBox text="唱歌" value="singing" />
            <CheckBox text="玩游戏" value="gaming" />
            <CheckBox text="跳舞" value="dance" />
            <CheckBox text="游泳" value="swimming" />
            <CheckBox text="听音乐" value="music" />
            <CheckBox text="瑜伽" value="yoga" />
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
            error={{ show: showError, message: '必须勾选3个电影' }}
            onValueChange={val => {
              console.log('val', val);
              setShowError(false);
            }}
            options="阿甘正传,肖申克的救赎,寻龙传说,复仇者联盟"
          />
        </div>
      </div>
    </div>
  );
};
