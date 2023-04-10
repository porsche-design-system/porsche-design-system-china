/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../..'
import './doc.scss'

const IconLibrary = () => (
  <div className="custom-doc">
    <h1>Icon 库 如何添加新图标</h1>
    <h2>1.保时捷 iconfont有更新：</h2>
    <br />
    1）更新 icons/iconfont/porsche.js 文件为新的 iconfont 文件
    <br />
    2）执行 npm run gegerate 命令生成 新的 svg 图片和 图标文件
    <br />
    3）更改 package.json 文件的 version
    <br />
    4）执行 npm run build 进行打包
    <br />
    5）执行 npm publish 进行发布
    <br />
    <br />
    <br />
    <h2>2.新加 icon</h2>
    <br />
    1）将新图标文件添加到 icons/svg 目录下，命名以 icon 开头
    <br />
    2）执行 npm run gegerate 命令生成 新的图标文件
    <br />
    3）更改 package.json 文件的 version
    <br />
    4）执行 npm run build 进行打包
    <br />
    5）执行 npm publish 进行发布
    <br />
  </div>
)

export default {
  title: 'Coding/Icon',
  parameters: {
    docs: {
      page: IconLibrary
    }
  }
}

export const GettingStartStoryBook = () => {
  return <div>-</div>
}

GettingStartStoryBook.storyName = 'Icon'
