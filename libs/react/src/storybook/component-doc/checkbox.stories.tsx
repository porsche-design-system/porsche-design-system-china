import React, { useState } from 'react'
import { CheckBox, CheckBoxGroup } from '../..'

import './checkbox.stories.scss'

export default {
  title: 'Data Entry/CheckBox',
  component: CheckBox,
  subcomponents: { CheckBoxGroup }
}

export const CheckBoxStoryBook = () => {
  const [partChecked, setPartChecked] = useState(true)

  return (
    <div>
      <div>
        <CheckBox text="选项1" defaultChecked />
        <br />
        <CheckBox text="选项2" />
        <br />
        <CheckBox
          text="半选状态"
          partChecked={partChecked}
          onCheckedChange={() => {
            setPartChecked(false)
          }}
        />
        <br />
        <CheckBox text="失效选项" disabled />
      </div>
    </div>
  )
}
CheckBoxStoryBook.storyName = 'CheckBox'

export const CheckBoxStoryBook1 = () => {
  return (
    <div>
      <CheckBoxGroup label="兴趣爱好" width="300px">
        <CheckBox text="唱歌" value="singing" />
        <CheckBox text="玩游戏" value="gaming" />
        <CheckBox text="跳舞" value="dance" />
        <CheckBox text="游泳" value="swimming" />
        <CheckBox text="听音乐" value="music" />
        <CheckBox text="瑜伽" value="yoga" />
      </CheckBoxGroup>
    </div>
  )
}

CheckBoxStoryBook1.storyName = 'With Label'

export const CheckBoxStoryBook2 = () => {
  return (
    <div>
      <CheckBoxGroup
        label={{ text: '热门电影', position: 'left' }}
        error={{ show: true, message: '必须勾选3个电影' }}
        options="阿甘正传,肖申克的救赎,寻龙传说,复仇者联盟"
      />
    </div>
  )
}

CheckBoxStoryBook2.storyName = 'Error'

export const CheckBoxStoryBook3 = () => {
  return (
    <div>
      <CheckBoxGroup
        label={{ text: '热门电影', position: 'left' }}
        options="阿甘正传,肖申克的救赎,寻龙传说,复仇者联盟"
      />
    </div>
  )
}

CheckBoxStoryBook3.storyName = 'String Options'
