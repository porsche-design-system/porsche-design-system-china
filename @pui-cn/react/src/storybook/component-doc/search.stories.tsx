import React from 'react'
import { Search } from '../..'

export default {
  title: 'Data Entry/Search',
  component: Search
}

export const SearchStoryBook = () => {
  return (
    <div>
      <Search
        placeholder="请输入（支持使用回车）"
        width="360px"
        marginRight="30px"
        onSearch={val => {
          console.log('Search:', val)
        }}
        onValueChange={val => {
          console.log(val)
        }}
        onBlur={evt => {
          console.log(evt)
        }}
      />
    </div>
  )
}

SearchStoryBook.storyName = 'Search'

export const SearchStoryBook1 = () => {
  return (
    <div>
      <div>显示清除按钮</div>
      <Search placeholder="显示清除按钮" width="360px" showClearButton />
    </div>
  )
}

SearchStoryBook1.storyName = 'Show Clear Button'

export const SearchStoryBook2 = () => {
  return (
    <div>
      <div>限制文字长度</div>
      <Search placeholder="限制文字长度" maxLength={10} width="360px" />
    </div>
  )
}

SearchStoryBook2.storyName = 'Limit Text Length'

export const SearchStoryBook3 = () => {
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

SearchStoryBook3.storyName = 'Show Search Button Background'

export const SearchStoryBook4 = () => {
  return (
    <div>
      <div>使用Rule限定搜索内容</div>
      <Search
        placeholder="请输入客户邮件"
        width="360px"
        rules={[{ type: 'email', message: '输入的内容必须是邮件地址' }]}
        showClearButton
        showSearchButtonBg
        onSearch={val => {
          console.log('查找' + val)
        }}
      />
    </div>
  )
}

SearchStoryBook4.storyName = 'Validate Search'
