import React, { CSSProperties } from 'react';
import './divider.scss';
import { componentClassNames } from '../../shared/class-util';

export interface Props {
  /** 类名 */
  className?: string;
  /** 水平还是垂直类型 */
  type?: 'horizontal' | 'vertical';
  /** 样式 */
  style?: CSSProperties;
  /** 底色*/
  contrast?: 'low' | 'medium' | 'high';
}

/**
 * Primary UI component for user interaction
 */
const Divider = ({ className, style, type = 'horizontal', contrast = 'low' }: Props) => {
  return (
    <div
      className={componentClassNames('pui-divider', { type, contrast }, className)}
      style={style}
    ></div>
  );
};

export { Divider };
