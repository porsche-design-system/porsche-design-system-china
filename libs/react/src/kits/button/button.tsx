import React, { CSSProperties } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './button.scss';

export interface Props {
  // 组件属性 //

  /** 类名 */
  className?: string;
  /** 子组件 */
  children?: React.ReactNode;
  /** 样式 */
  style?: CSSProperties;
  /** 类型 */
  type?: 'default' | 'primary' | 'dark' | 'text';
  /** 大小 */
  size?: 'large' | 'middle' | 'small';
  /** 图标 */
  icon?: string;
  /** 是否加载中 */
  loading?: boolean;
  /** 原生HTML按钮类型 */
  htmlType?: 'button' | 'submit' | 'reset';
  /** 是否禁用 */
  disabled?: boolean;

  // 组件事件 //

  /* 点击事件 */
  onClick?: React.MouseEventHandler;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  className,
  children,
  style,
  type = 'default',
  size = 'middle',
  icon,
  loading = false,
  htmlType = 'button',
  disabled = false,
  onClick
}: Props) => {
  return (
    <button
      type={htmlType}
      className={componentClassNames('pui-button', { type, size }, className)}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && <div>LOADING</div>}
      {icon && <div>ICON</div>}
      {children}
    </button>
  );
};

export { Button };
