## 安装

```
npm install
```

## 本地开发

```
npm run storybook
```

## 添加新组件

```
npx plop Button(组件名)
```

## 文件结构

```
├── __test__
│   └── button.test.tsx   测试文件
├── button.stories.tsx   story文件
├── index.tsx   组件
├── style.scss  样式
└── types.tsx   ts类型声明
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
  /** 传入数字 */
  prefixCls?: string;
  /** 样式 */
  className?: string;
  /** 传入数字 */
  children?: React.ReactNode;
  /** 样式 */
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

### 3、配置默认属性值，并默认导出

```ts
Button.defaultProps = {
  type: 'primary',
};

export default Button;
```

## 编写 storybook

### Storybook 文档: https://storybook.js.org/

```tsx
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
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

```tsx
describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>hello</Button>);
    const ele = wrapper.getByTestId('button');
    expect(ele).toBeInTheDocument();
    //正确渲染文本
    const text = wrapper.getByText('hello');
    expect(text).toBeTruthy();
    //button标签
    expect(ele.tagName).toEqual('BUTTON');
    expect(ele).not.toHaveAttribute('isdisabled');
    expect(ele).not.toHaveAttribute('isLinked');
    //正常添加classname
    expect(ele.getAttribute('class')?.split(' ').includes('testprops')).toEqual(true);
    //正常click
    fireEvent.click(ele);
    expect(defaultProps.onClick).toHaveBeenCalled();
    //span正常显示
    expect(ele.getElementsByTagName('span')).toBeTruthy();
    //正常默认属性
    expect(ele).toHaveStyle(`background:${color.tertiary}`);
    expect(ele).toHaveStyle(`color: ${color.darkest}`);
    //正常大小
    expect(ele).toHaveStyle(`padding: ${btnPadding.medium}`);
    expect(ele).toHaveStyle(`font-size:${typography.size.s2}px`);
  });
});
```

## 测试

```
npm run test
```

## 打包

```
npm run prod
```
