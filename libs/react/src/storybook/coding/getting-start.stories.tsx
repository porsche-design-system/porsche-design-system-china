/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './doc.scss'

const GettingStart = () => (
  <div className="custom-doc">
    <div>使用Vite创建项目</div>
    <div className="cmd">yarn create @vitejs/app</div>
    <div>使用CRA创建</div>
    <div className="cmd">npx create-react-app my-app</div>
    <br />
    <div>在项目根目录添加文件.npmrc</div>
    <div className="code">
      strict-ssl=false
      <br />
      registry=http://52.83.74.69:4111
    </div>
    <br />
    <div>安装PUI依赖</div>
    <div className="cmd">yarn add @pui/react</div>
    <br />
    <div>引用组件使用即可，引用任何组件即可设置好主题，字体</div>
    <div className="code">
      import {'{'}Form, Input, Button{'}'} from '@pui/react';
    </div>
  </div>
)

export default {
  title: 'Coding/Getting Start',
  parameters: {
    docs: {
      page: GettingStart
    }
  }
}

export const GettingStartStoryBook = () => {
  return <div>-</div>
}

GettingStartStoryBook.storyName = 'GettingStart'
