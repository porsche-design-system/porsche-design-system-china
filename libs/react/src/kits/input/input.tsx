import React, { ChangeEventHandler, CSSProperties } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './input.scss';

export interface Props {
  // 组件属性 //

  /* 类名 */
  className?: string;
  /* 样式 */
  style?: CSSProperties;

  /* 标签 */
  label?: string;
  /* 标签位置 */
  labelPosition?: 'left' | 'top';
  /* 大小 */
  size?: 'large' | 'middle' | 'small';
  /* 占位符 */
  placeHolder?: string;
  /* 错误 */
  error?: { show: boolean; text: string };
  /* 是否必填 */
  required?: boolean;
  /* 是否禁用 */
  disabled?: boolean;

  // 组件事件 //

  /* 点击事件 */
  onChange?: ChangeEventHandler;
}

/**
 * Primary UI component for user interaction
 */
const Input = ({
  className,
  style,
  size = 'middle',
  label,
  labelPosition = 'top',
  placeHolder,
  error = { show: false, text: '' },
  required = false,
  disabled = false,
  onChange
}: Props) => {
  return (
    <div
      className={componentClassNames(
        'pui-input',
        { size, labelPosition, error: error.show + '' },
        className
      )}
      style={style}
    >
      <div className="label">
        {label}
        <span>{label && required ? '*' : ''}</span>
      </div>
      <input placeholder={placeHolder} onChange={onChange} disabled={disabled} />
      <div className="error-text">{error.text}</div>
    </div>
  );
};

export { Input };
