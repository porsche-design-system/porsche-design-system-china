import React, { useEffect } from 'react'
import { IconArrowHeadRight, IconConfigurate } from '@pui/icons'

import { Tag, Row, Col } from '../..'
import './tag.stories.scss'
import { MobileFrame } from '../utils/mobileFrame'
import { Title } from '../utils/title'
import { Center } from '../utils/center'
import { Space } from '../utils/space'

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
