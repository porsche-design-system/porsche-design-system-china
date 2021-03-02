import React, { CSSProperties } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './col.scss';

export interface Props {
  // 组件属性 //

  /** 类名 */
  className?: string;
  /** 子组件 */
  children?: React.ReactNode;
  /** 样式 */
  style?: CSSProperties;

  /* 跨度，最大为24 */
  span?: number;

  // 组件事件 //

  /* 点击事件 */
  onClick?: React.MouseEventHandler;
}

/**
 * Primary UI component for user interaction
 */
const Col = ({ className, style, children, span = 24, onClick }: Props) => {
  const colStyle: CSSProperties = { width: (span / 24) * 100 + '%' };
  return (
    <div
      className={componentClassNames('pui-col', {}, className)}
      style={{ ...colStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { Col };
