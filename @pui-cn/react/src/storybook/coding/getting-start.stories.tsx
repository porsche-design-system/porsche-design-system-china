/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../..'
import './doc.scss'

const GettingStart = () => (
  <div className="custom-doc">
    <h1>Getting Start</h1>

    <div>请尽量使用 node 16+ 开发</div>
    <br />

    <div>使用Vite创建项目(推荐)</div>
    <div className="cmd">npm create vite@latest</div>
    <div>使用CRA创建</div>
    <div className="cmd">npx create-react-app my-app</div>
    <br />
    <div>在项目根目录添加文件 .npmrc 加入</div>
    <div className="code">
      registry=https://registry.npmmirror.com
      <br />
      @pui:registry=https://devops.porsche-preview.cn/nexus/repository/npm-pcn-hosted/
      <br />
    </div>
    <br />
    <div>
      使用自己的LDAP (gitlab账号) 登录
      nexus，只用登录一次，若无法登录，需要找IT部门协助开通权限
    </div>
    <div className="cmd">
      npm login --registry
      https://devops.porsche-preview.cn/nexus/repository/npm-pcn-hosted/
    </div>
    <br />
    <div>安装PUI依赖</div>
    <div className="cmd">npm install @pui-cn/react</div>
    <br />
    <div>引用组件使用即可，引用任何组件即可设置好主题，字体</div>
    <div className="code">
      import {'{'}Form, Input, Button{'}'} from '@pui-cn/react';
    </div>
    <br />
    <div>
      在Pipeline编译，请在 .gitlab-ci.yml 加人以下代码使gitlab
      runner登录，这个步骤要放在npm install之前执行
      <br />
      其中的 $NPM_REGISTRY_AUTH 已经做好了全局配置，可直接使用
    </div>
    <div className="cmd">
      {` - npm config set //devops.porsche-preview.cn/nexus/repository/npm-pcn-hosted/:_auth=$NPM_REGISTRY_AUTH `}
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
