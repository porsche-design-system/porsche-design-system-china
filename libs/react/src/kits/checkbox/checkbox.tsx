import React, { CSSProperties } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './checkbox.scss';

export interface Props {
  // 组件属性 //

  /** 类名 */
  className?: string;
  /** 子组件 */
  children?: React.ReactNode;
  /** 样式 */
  style?: CSSProperties;

  /** 是否禁用 */
  disabled?: boolean;

  // 组件事件 //

  /* 点击事件 */
  onClick?: React.MouseEventHandler;
}

/**
 * Primary UI component for user interaction
 */
const CheckBox = ({ className, style, children, onClick }: Props) => {
  return (
    <div
      className={componentClassNames('pui-checkbox', {}, className)}
      style={style}
      onClick={onClick}
    >
      <input type="radio" />
    </div>
  );
};

export { CheckBox };
