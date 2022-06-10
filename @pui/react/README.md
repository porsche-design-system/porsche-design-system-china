 ## 安装依赖

```
npm run install-all
```

## 本地开发

首先需要编译Icon库
```
npm -w @pui/icons run generate
或进入 @pui/icons 目录
npm run generate

npm -w @pui/icons run build
或进入 @pui/icons 目录
npm run build
```

再启动storybook
```
npm -w @pui/react run storybook
或进入到 @pui/react 目录
npm run storybook
```

## 组件结构

### 1、属性声明

必须按照格式进行注释，会生成相应的属性文档

```ts
export type ButtonProps = {
  /** 类型 */
  type?: ButtonType;
  /** 图标 */
  icon?: React.ReactNode;
  /** 尺寸 */
  size?: SizeType;
  /** 是否加载 */
  loading?: boolean | { delay?: number };
  /** 传入参数 */
  prefixCls?: string;
  /** 类名 */
  className?: string;
  /** 传入子组件列表 */
  children?: React.ReactNode;
  /** 样式object */
  style?: any;
};
```

### 2、组件实现

```ts
function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, className, type = 'default', style } = props;

  return (
    <button className={cn('pos-button', `pos-button-${type}`, className)} style={style}>
      {children}
    </button>
  );
}
```

## 编写 storybook

### Storybook 文档: https://storybook.js.org/

```tsx
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

// storybook可控组件
export const knobsButton = () => (
  <Button
    size={select<SizeType>('size', SIZES, 'large')}
    type={select<ButtonType>('type', ButtonTypes, 'primary')}
  >
    {text('123', '123')}
  </Button>
);

// 其他展示组件

export const MyBtn = () => <Button type="ghost">按钮</Button>;
```

## 编写测试用例

#### 测试开发范围：

- 原子型组件不需要书写单元测试
- 逻辑性 utility 需要书写：Plane function logic test;
- 基础展示组件需要书写的测试种类：Snapshot Test 、Unit/Integration test;
- 复杂逻辑组件需包含：Snapshot Test 、Unit/Integration test、甚至 e2e test;

**[测试开发介绍](./management/ut-intro.md)** and [more >>](./management/ut-more.md)

## 打包

```
npm -w @pui/react run build
或进入到 @pui/react 目录
npm run build
```

 