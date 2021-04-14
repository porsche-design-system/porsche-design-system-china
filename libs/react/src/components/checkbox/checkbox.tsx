import { IconCheck } from '@pui/icons';
import React, { ChangeEventHandler, CSSProperties, useMemo } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './checkbox.scss';

export interface CheckBoxProps {
  // 组件属性 //

  /** 类名 */
  className?: string;
  /** 子组件 */
  children?: React.ReactNode;
  /** 样式 */
  style?: CSSProperties;

  /* 显示文字 */
  text?: string;

  /*选项值 */
  value?: string;

  /* 是否默认选定 */
  defaultChecked?: boolean;

  /** 是否禁用 */
  disabled?: boolean;

  /* 大小 */
  size?: 'default' | 'small';

  /* 点击事件 */
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Primary UI component for user interaction
 */

let idCounter = 0;
const generateId = () => {
  idCounter++;
  return 'checkbox-' + idCounter;
};
const CheckBox = ({
  className,
  style,
  defaultChecked = false,
  text = '',
  value = '',
  disabled = false,
  size = 'default',
  onChange
}: CheckBoxProps) => {
  const id = useMemo(() => generateId(), []);
  return (
    <label
      htmlFor={id}
      className={componentClassNames('pui-checkbox', { disabled: disabled + '', size }, className)}
      style={style}
    >
      <input
        id={id}
        type="checkbox"
        onChange={onChange}
        disabled={disabled}
        defaultChecked={defaultChecked}
        value={value}
      />
      <span className="pui-checkbox-checkmark">
        <IconCheck style={{ color: 'white' }} />
      </span>
      {text}
    </label>
  );
};

export { CheckBox };
