import React, { ChangeEventHandler, CSSProperties, useMemo } from 'react';
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

  /* 标签 */
  label?: string;

  /** 是否禁用 */
  disabled?: boolean;

  // 组件事件 //

  /* 点击事件 */
  onChange?: ChangeEventHandler;
}

/**
 * Primary UI component for user interaction
 */

let idCounter = 0;
const generateId = () => {
  idCounter++;
  return 'checkbox-' + idCounter;
};
const CheckBox = ({ className, style, label = '', onChange }: Props) => {
  const id = useMemo(() => generateId(), []);
  return (
    <label
      htmlFor={id}
      className={componentClassNames('pui-checkbox', {}, className)}
      style={style}
    >
      <input id={id} type="checkbox" onChange={onChange} /> {label}
    </label>
  );
};

export { CheckBox };
