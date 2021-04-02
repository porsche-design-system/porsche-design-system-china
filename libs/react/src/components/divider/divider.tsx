import React, { CSSProperties } from 'react';
import './divider.scss';

export interface Props {
  /** 类名 */
  className?: string;
  /** 水平还是垂直类型 */
  type?: 'horizontal' | 'vertical';
  /** 样式 */
  style?: CSSProperties;
  /** 底色*/
  background?: 'low' | 'medium' | 'high';
}

/**
 * Primary UI component for user interaction
 */
const Divider = ({ className, style, type = 'horizontal', background = 'low' }: Props) => {
  return <div className={`pui-divider ${className} ${type} ${background}`} style={style}></div>;
};

export { Divider };
