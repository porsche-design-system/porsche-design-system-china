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
      <Search placeholder="显示清除按钮" width="300px" showClearButton />
    </div>
  )
}

InputStoryBook.storyName = 'Search'
