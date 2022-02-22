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
        width="360px"
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
      <Search
        placeholder="显示清除按钮"
        width="360px"
        showClearButton
      />
    </div>
  )
}

InputStoryBook1.storyName = 'Show Clear Button'

export const InputStoryBook2 = () => {
  return (
    <div>
      <div>限制文字长度</div>
      <Search placeholder="限制文字长度" maxLength={10} width="360px" />
    </div>
  )
}

InputStoryBook2.storyName = 'Limit Text Length'

export const InputStoryBook3 = () => {
  return (
    <div>
      <div>显示搜索按钮背景颜色</div>
      <Search
        placeholder="请输入客户姓名/BP-ID/试乘试驾人"
        width="360px"
        showClearButton
        showSearchButtonBg
      />
    </div>
  )
}

InputStoryBook3.storyName = 'Show Search Button Background'
