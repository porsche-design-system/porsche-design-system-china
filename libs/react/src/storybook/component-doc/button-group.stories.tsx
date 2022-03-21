import React from 'react'
import { ButtonGroup, Button } from '../..'

export default {
  title: 'Data Entry/ButtonGroup',
  component: ButtonGroup
}

export const ButtonGroupStoryBook = () => {
  return (
    <>
      <ButtonGroup align="right">
        <Button type="secondary" marginLeft="10px">
          取消
        </Button>
        <Button type="primary">确定</Button>
      </ButtonGroup>
    </>
  )
}
ButtonGroupStoryBook.storyName = 'ButtonGroup'
