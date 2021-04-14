import React, { ChangeEventHandler, CSSProperties, useMemo } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './radio.scss';

export interface RadioProps {
  // 组件属性 //

  /** 类名 */
  className?: string;
  /** 样式 */
  style?: CSSProperties;

  /* 显示文字 */
  text?: string;

  /* 分组名 */
  name?: string;

  /* 值 */
  value?: string;

  /** 是否禁用 */
  disabled?: boolean;

  /* 是否选定 */
  defaultChecked?: boolean;

  /* 大小 */
  size?: 'default' | 'small';

  // 组件事件 //

  /* 点击事件 */
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Primary UI component for user interaction
 */
let idCounter = 0;
const generateId = () => {
  idCounter++;
  return 'radio-' + idCounter;
};
const Radio = ({
  className,
  style,
  disabled,
  value,
  name = '',
  text,
  onChange,
  defaultChecked = false,
  size = 'default'
}: RadioProps) => {
  const id = useMemo(() => generateId(), []);
  return (
    <label
      htmlFor={id}
      className={componentClassNames('pui-radio', { disabled: disabled + '', size }, className)}
      style={style}
    >
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        onChange={onChange}
        disabled={disabled}
        defaultChecked={defaultChecked}
      />
      <span className="pui-radio-checkmark" />
      {text}
    </label>
  );
};

export { Radio };
