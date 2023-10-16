/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

export default {
  title: 'Theming & Language/PUI'
}

export const PUIStoryBook = () => {
  return (
    <div>
      <div>全局样式设置方法</div>
      <br />
      <div>
        <div>
          import {'{ '}PUI{' }'} from '@pui-cn/react'
        </div>
        <br />
        <div>
          {`// 全局设置组件大小 `}
          <br />
          PUI.setDefaultSize('small') <br />
          PUI.setDefaultSize('medium')
        </div>
        <br />
        <div>
          {`// 全局亮色暗色 `}
          <br />
          PUI.setTheme('light') <br />
          PUI.setTheme('dark')
        </div>
        <br />
        <div>
          {`// 全局设置滚动条隐藏行为 `}
          <br />
          PUI.setScrollBarAutoHide('never') <br />
          PUI.setScrollBarAutoHide('leave') <br />
        </div>
        <br />
        <div>
          {`// 全局设置语言 `}
          <br />
          PUI.changeLang('en') <br />
          PUI.changeLang('zh-CN') <br />
          <br />
          {`// 获取当前语言 `}
          <br />
          PUI.getLang() <br />
        </div>
        <br />
        <div>
          {`// 在项目中使用多语言 `}
          <br />
          1. 定义一份语言Key Value
          <br />
          <pre>
            {`export const langData = {
  en: {
    welcome: 'Welcome'
  },
  'zh-CN': {
    welcome: '欢迎'
  }
}`}
          </pre>
          <br />
          2. 添加语言
          <br />
          PUI.addLangResources('[NAME_SPACE]', langData)
          <br />
          <br />
          3. 翻译语言
          <br />
          <pre>
            {`import { useTranslation } from 'react-i18next'

const { t } = useTranslation('[NAME_SPACE]')
return <div>{t("welcome")}</div>`}
          </pre>
          <br />
          NAME_SPACE
          可以起到隔离效果，根据需求定义，如果是组件隔离可以定义成组件的名字
        </div>
      </div>
    </div>
  )
}
PUIStoryBook.storyName = 'PUI'
