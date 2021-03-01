import React, { CSSProperties } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './row.scss';

export interface Props {
  // 组件属性 //

  /** 类名 */
  className?: string;
  /** 子组件 */
  children?: React.ReactNode;
  /** 样式 */
  style?: CSSProperties;

  /** 大小 */
  size?: 'large' | 'middle' | 'small';
  /** 是否禁用 */
  disabled?: boolean;

  // 组件事件 //

  /* 点击事件 */
  onClick?: React.MouseEventHandler;
}

/**
 * Primary UI component for user interaction
 */
const Row = ({ className, style, size = 'middle', children, onClick }: Props) => {
  return (
    <div
      className={componentClassNames('pui-example', { size }, className)}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { Row };
