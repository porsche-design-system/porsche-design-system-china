import React, { CSSProperties } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './pane.scss';

export interface Props {
  // 组件属性 //

  /** 类名 */
  className?: string;

  /** 子组件 */
  children?: React.ReactNode;

  /** 样式 */
  style?: CSSProperties;

  /* 内边距 */
  padding?: string;
}

const Pane = ({ className, style, children, padding = '40px' }: Props) => {
  return (
    <div className={componentClassNames('pui-pane', {}, className)} style={{ padding, ...style }}>
      {children}
    </div>
  );
};

export { Pane };
