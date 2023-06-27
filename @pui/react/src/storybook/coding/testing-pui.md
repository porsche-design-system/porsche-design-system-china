# 测试 PUI

如何写测试代码

1. 在组建的的文件夹里加入 **tests**/[组件名字].test.tsx
2. 编写测试代码

## 测试渲染

在组建属性中传入一个或多个，查看渲染结果

```ts
describe('Test Button', () => {
  test('test render button', async () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toHaveTextContent('Button')

    render(
      <Button>
        <div>中文按钮</div>
      </Button>
    )
    expect(screen.getByText('中文按钮')).toHaveTextContent('中文按钮')
  })
})
```

## 事件测试

点击组件的某个，产生状态变化

推荐使用 Testing Library 的 fireEvent

```ts
import { render, screen, fireEvent, act } from '@testing-library/react'

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
```
