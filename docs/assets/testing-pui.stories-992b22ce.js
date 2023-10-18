import{a as n}from"./jsx-runtime-e43ccb36.js";import{M as s}from"./index-0f39e386.js";/* empty css              */import"./custom-picker-1a2c1035.js";/* empty css            */import"./index-1b03fe98.js";import"./iframe-fcb08ef7.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-6fd5a17b.js";import"./inheritsLoose-de3cf643.js";import"./index-4d52b68d.js";import"./index-356e4a49.js";const i=`# 测试 PUI

如何写测试代码

1. 在组建的的文件夹里加入 \\_\\_tests\\_\\_/[组件名字].test.tsx
2. 编写测试代码

在 VS Code 安装 Jest Runner 可以实现点击代码单个测试

## 测试渲染

在组建属性中传入一个或多个，查看渲染结果

\`\`\`ts
import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'

import { Button } from '../button'

describe('Test Button', () => {
  test('test render button', async () => {
    const button = render(
      <Button>
        <div>中文按钮</div>
      </Button>
    )
    // 测试页面上有这个内容
    screen.getByText('中文按钮')

    // 测试按钮上有这个内容
    button.getByText('中文按钮')

    // 测试页面上没这个内容
    expect(button.queryByText('无这段文字')).toBeNull()
  })
})
\`\`\`

## 事件测试

点击组件的某个，产生状态变化

推荐使用 Testing Library 的 fireEvent

\`\`\`ts
import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen, fireEvent, act } from '@testing-library/react'

import { Button } from '../button'

describe('Test Button', () => {
  test('button clickable', async () => {
    let clicked = false
    render(
      <Button
        onClick={() => {
          clicked = true
        }}
      >
        Button
      </Button>
    )
    // 推荐写法
    fireEvent.click(screen.getByText('Button'))

    // 原始写法，点击触动组件内部state变化的要写到 act 里，点击事件要加 await
    await act(async () => {
      await screen.getByText('Button').click()
    })

    expect(clicked).toBe(true)
  })
})
\`\`\`

## Debug 测试

\`\`\`ts
// 打印当前屏幕
screen.debug()
\`\`\`
`,c=()=>n("div",{className:"custom-doc",children:n(s,{children:i})}),k={title:"Coding/Testing PUI",parameters:{docs:{page:c}}},t=()=>n("div",{children:"-"});t.storyName="Testing PUI";var e,r,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <div>-</div>;
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const v=["TestingPUIStoryBook"];export{t as TestingPUIStoryBook,v as __namedExportsOrder,k as default};
//# sourceMappingURL=testing-pui.stories-992b22ce.js.map
