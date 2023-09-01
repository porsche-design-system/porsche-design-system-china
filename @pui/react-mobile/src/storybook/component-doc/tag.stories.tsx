import React from 'react'
import { Tag } from '../..'
import './tag.stories.scss'

export default {
  title: 'Foundation/Tag',
  component: Tag
}

export const TagStoryBook1 = () => {
  return (
    <div>
      <Tag type="blackGold">销售卓越奖</Tag>
      <br />
      <Tag type="blackWhite">认可易手车</Tag> <br />
      <Tag type="gold">新车</Tag> <br />
      <Tag type="red">热门</Tag> <br />
      <Tag type="gray">稀缺车型</Tag>
    </div>
  )
}

TagStoryBook1.storyName = 'Default'
