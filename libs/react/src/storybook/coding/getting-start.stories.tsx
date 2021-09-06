/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './doc.scss'

const GettingStart = () => (
  <div className="custom-doc">
    <h1>Getting Start</h1>
    <div>使用Vite创建项目(推荐)</div>
    <div className="cmd">yarn create @vitejs/app</div>
    <div>使用CRA创建</div>
    <div className="cmd">npx create-react-app my-app</div>
    <br />
    <div>在项目根目录添加文件.npmrc</div>
    <div className="code">
      strict-ssl=false
      <br />
      @pui:registry=http://s1.web.porsche-preview.cn/repository/npm-hosted/
    </div>
    <br />
    <div>安装PUI依赖</div>
    <div>安装依赖的时候需要连接到保时捷内网，或在保时捷公司Wifi环境</div>
    <div>
      连接内网工具请前往
      <a
        style={{ marginLeft: '5px', textDecoration: 'underline' }}
        href="https://porschedigital.atlassian.net/wiki/spaces/TECHCN/pages/1731462726/OpenVPN"
      >
        https://porschedigital.atlassian.net/wiki/spaces/TECHCN/pages/1731462726/OpenVPN
      </a>
    </div>
    <div className="cmd">yarn add @pui/react</div>
    <br />
    <div>引用组件使用即可，引用任何组件即可设置好主题，字体</div>
    <div className="code">
      import {'{'}Form, Input, Button{'}'} from '@pui/react';
    </div>
    <br />
    <div>
      使用保时捷Gitlab Runner部署编译项目，需要将.npmrc中的
      s1.web.porsche-preview.cn 替换为 web.devops.porsche-internaldns.cn:4001
    </div>
    修改文件 .gitlab-ci.yml 在运行npm install前加入以下代码
    <div className="cmd">
      - sed -i
      "s/s1.web.porsche-preview.cn/web.devops.porsche-internaldns.cn:4001/g"
      ./.npmrc
    </div>
    <br />
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
