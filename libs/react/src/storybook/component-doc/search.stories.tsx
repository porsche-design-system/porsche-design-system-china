import React from 'react'
import { Search } from '../..'

export default {
  title: 'Data Entry/Search',
  component: Search
}

export const InputStoryBook = () => {
  return (
    <div>
      <Search
        placeholder="请输入"
        width="300px"
        marginRight="30px"
        onSearch={val => {
          console.log(val)
        }}
      />
    </div>
  )
}

InputStoryBook.storyName = 'Search'

export const InputStoryBook1 = () => {
  return (
    <div>
      <div>显示清除按钮</div>
      <Search placeholder="显示清除按钮" width="300px" showClearButton />
    </div>
  )
}

InputStoryBook1.storyName = 'Show Clear Button'
