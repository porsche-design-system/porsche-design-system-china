/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

export default {
  title: 'Theming/PUI'
}

export const PUIStoryBook = () => {
  return (
    <div>
      <div>全局样式设置方法</div>
      <br />
      <div>
        <div>
          import {'{ '}PUI{' }'} from '@pui/react'
        </div>
        <br />
        <div>
          // 全局设置组件大小 <br />
          PUI.setDefaultSize('small') <br />
          PUI.setDefaultSize('medium')
        </div>
        <br />
        <div>
          // 全局亮色暗色大小 <br />
          PUI.setTheme('light') <br />
          PUI.setTheme('dark')
        </div>
      </div>
    </div>
  )
}
PUIStoryBook.storyName = 'PUI'
