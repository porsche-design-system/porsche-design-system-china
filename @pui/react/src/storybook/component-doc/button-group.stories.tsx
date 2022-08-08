import React from 'react'
import { IconClose, IconArrowHeadRight } from '@pui/icons'
import { ButtonGroup, Button, Tabs, TabPane } from '../..'
import './button-group.stories.scss'

export default {
  title: 'Data Entry/ButtonGroup',
  component: ButtonGroup
}

export const ButtonGroupStoryBook = () => {
  return (
    <Tabs size="small" hasLine>
      <TabPane tabKey="IconText" title="Left">
        <ButtonGroup align="left">
          <Button type="primary" icon={IconArrowHeadRight}>
            确定
          </Button>
          <Button icon={IconClose}>取消</Button>
        </ButtonGroup>
      </TabPane>
      <TabPane tabKey="Icon" title="Center">
        <ButtonGroup align="center">
          <Button icon={IconClose}>取消</Button>
          <Button type="primary" icon={IconArrowHeadRight}>
            确定
          </Button>
        </ButtonGroup>
      </TabPane>
      <TabPane tabKey="Text" title="Right">
        <ButtonGroup align="right">
          <Button icon={IconClose}>取消</Button>
          <Button type="primary" icon={IconArrowHeadRight}>
            确定
          </Button>
        </ButtonGroup>
      </TabPane>
    </Tabs>
  )
}
ButtonGroupStoryBook.storyName = 'ButtonGroup'
