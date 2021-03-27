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

  /* 点击事件 */
  onClick?: React.MouseEventHandler;
}

/**
 * Primary UI component for user interaction
 */
const Row = ({ className, style, children, onClick }: Props) => {
  return (
    <div className={componentClassNames('pui-row', {}, className)} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export { Row };
