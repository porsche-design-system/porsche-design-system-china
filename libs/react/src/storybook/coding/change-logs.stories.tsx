/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './doc.scss'
import './change-logs.scss'

const ChangeLogs = () => (
  <div className="custom-doc">
    <h1>Change Logs</h1>
    <div>Ver 0.1.0</div>
    <div className="release-time">发布时间：2022-01-18 13:30</div>
    <div>
      <ul>
        <li>修正Search组件清除按钮遮挡bug</li>
        <li>隐藏Search组件字数限制文字</li>
        <li>修正input-number小尺寸显示错误</li>
      </ul>
    </div>
  </div>
)

export default {
  title: 'Coding/Change Logs',
  parameters: {
    docs: {
      page: ChangeLogs
    }
  }
}

export const GettingStartStoryBook = () => {
  return <div>-</div>
}

GettingStartStoryBook.storyName = 'GettingStart'
