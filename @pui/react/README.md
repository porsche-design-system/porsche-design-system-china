#### 安装所有依赖

在项目根目录运行：

```
npm run install-all
```

#### 本地开发

首先需要编译 Icon 库

```
npm -w @pui/icons run generate
或进入 @pui/icons 目录
npm run generate

npm -w @pui/icons run build
或进入 @pui/icons 目录
npm run build
```

再启动 storybook

```
npm -w @pui/react run storybook
或进入到 @pui/react 目录
npm run storybook
```

#### 组件结构

##### 1、属性声明

必须按照格式进行注释，会生成相应的属性文档（注意前面是两个星号 /\*\*）

```ts
export type ButtonProps = {
  /** 类型 */
  type?: ButtonType
  /** 图标 */
  icon?: React.ReactNode
  /** 尺寸 */
  size?: SizeType
  /** 是否加载 */
  loading?: boolean | { delay?: number }
  /** 传入参数 */
  prefixCls?: string
  /** 类名 */
  className?: string
  /** 传入子组件列表 */
  children?: React.ReactNode
  /** 样式object */
  style?: any
}
```

##### 2、组件实现

```ts
function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, className, type = 'default', style } = props

  return (
    <button
      className={cn('pos-button', `pos-button-${type}`, className)}
      style={style}
    >
      {children}
    </button>
  )
}
```

### 编写 storybook

##### Storybook 文档: https://storybook.js.org/

```tsx
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
}

// storybook可控组件
export const knobsButton = () => (
  <Button
    size={select<SizeType>('size', SIZES, 'large')}
    type={select<ButtonType>('type', ButtonTypes, 'primary')}
  >
    {text('123', '123')}
  </Button>
)

// 其他展示组件

export const MyBtn = () => <Button type="ghost">按钮</Button>
```

## 代码编写要点

#### 不允许安装第三方库

组件库是公用的组件多安装一个依赖意味着所有的项目跟着多安装依赖加大体积和复杂度
所以原则上不允许再安装第三方库，如果小量需要功能，可以拷贝第三方库的某个函数到 pui 代码里

#### 组件命名清晰，属性表意明确

组件库是大家公用的，命名要尽可能的准确易懂

#### 组件易用简单

设计组件要考虑最终使用者的便利性与易用程度，设计组件的目标是开发者一看便知道怎么去使用，而且用最短的代码完成对应工作。

#### 不是所用功能都应该归在组件库中

组件库提供了共用能力的最小子集，在考虑给组件库添加新组建时候需要考虑清楚，这个功能是你的项目单独需要还是很多项目都共同需要这个问题，不应该随心所欲的给组件库不断添加功能。

#### 组件库的设计是否与设计稿一致很重要

开发前因跟设计部门沟通好组件的样式修改规则，做好的组件，要经过设计部门的 “走查” 流程，开发者也应该在代码完成时候完成大小改变主题改变的自查。

#### Form 开发

表单与表单组件的开发是 PUI 的核心，保时捷的业务管理系统，60% ~ 70% 的代码就是在做各种各样的表单，开发新的表单控件，要注意表单控件与 &lt;Form\&gt; 组件的联动性

通常来说，一个新的表单组件开发可以分为以下几个步骤

1. 创建表单组件文件，使用 FormItem 将其包裹，以此获得 label, name 等通用属性。
2. 在组建中加入 value 与 onValueChange 属性
3. 调整 Form 的代码 在 149 行左右 327 行左右，将表单加入支持列表，获得联动效果（form 上灌入的 data 属性可以以 name 作为 key 值灌入到表单组件中）

#### 多主题支持

PUI 的样式支持多主题，在 css 中要写成：

```scss
@import '../../styles/theme/index';
@each $theme in $themes {
  .pui-theme-#{$theme} {
    @include theme($theme);

    // css 内容
  }
}
```

PUI 的主题颜色变量等定义放在

styles/theme/dark.scss

styles/theme/light.scss

两个文件中，支持主题，可以将变量带入到样式中

#### 组件尺寸大小支持，多形态支持

尺寸大小支持，组件库提供了一个统一的方法处理

```ts
const [defaultSize] = useDefaultSize()

return (
  <div
    className={componentClassNames(
      'pui-breadcrumb',
      { size: size || defaultSize },
      className
    )}
    style={style}
  >
    // 组件代码
  </div>
)
```

componentClassNames 的作用是按不同的 size 切换给顶部的 div 设置不同的 size 或者其他属性

若 size="big", 那么顶层的 div class 中就会有一个 pui-breadcrumb-size-big

若 size="medium", 那么顶层的 div class 中就会有一个 pui-breadcrumb-size-medium

#### 弹框开发

下拉弹框开发中极难的功能，体现在以下几点

1. 弹框弹出不能被 支持 overflow: scroll 的 div 截断，那么弹框必须写到 body 层。
2. 弹框写到 body 层要在层次上不停的计算正确的位置，上层元素有可能是 scroll 的 div，有可能是 fixed 的 div，要让 body 上的弹框内容与组件元素相对位置一致难度很大。
3. 弹框不能偏离出屏幕，如果弹框的底部，右侧，上部，左侧超出了浏览器的范围，弹框因调整位置让其能完整显示在浏览器窗体里。
4. 弹框要相互互斥单显，例如一个页面中有多个下拉菜单的控件，点击之后只允许一个出现，不会同时显示 2 个下拉弹框。

基于这些开发难点，组件库封装了下拉弹框，写法如下：

```ts
const rootElementRef = useRef<any>(null)
const popMenuRef = useRef<any>(null)
const [showOptionList, setShowOptionList, puiPopupWrap] = usePopShowState()
const [menuPos, updatePos] = useElementPos(rootElementRef, popMenuRef)

// 组件代码，setShowOptionList(false) 可以在弹框内容中点击了某处确定按钮调用 使其消失
// updatePos 可以在某些特定情况，例如页面的某些改变导致组件位置改变，需要强制刷新弹出菜单位置时调用

<div ref={rootElementRef}>
{showOptionList &&
 	ReactDOM.createPortal(
 			<div style={...menuPos} ref={popMenuRef}> 弹框内容 </div>,
      puiPopupWrap)
}
</div>
```

#### 多重载属性

pui 的组件属性支持多重载写法，例如 DatePicker 组件 value 可以传入 Date 型，亦可以传入 string 型的 "2022-10-01"，多重载给开发者提供了多样便利，但是也会加大组件库的开发难度，开发组件时可以视情况酌情开发

#### 提交代码

提交代码，应该建立新分支，完成代码之后找 立超 或 莫哥 检查合并

#### 发版

由立超与莫哥定期发版
