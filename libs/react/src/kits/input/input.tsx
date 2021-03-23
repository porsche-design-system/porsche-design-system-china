import React, { ChangeEventHandler, CSSProperties, useState } from 'react';
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
  /* 占位符 */
  placeHolder?: string;
  /* 最多输入字符数 */
  maxLength?: number;
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
  label,
  labelPosition = 'top',
  placeHolder,
  maxLength,
  error = { show: false, text: '' },
  required = false,
  disabled = false,
  onChange
}: Props) => {
  const [valueLength, setValueLength] = useState(0);

  return (
    <div
      className={componentClassNames(
        'pui-input',
        { labelPosition, error: error.show + '' },
        className
      )}
      style={style}
    >
      <div className="label">
        {label}
        <span>{label && required ? '*' : ''}</span>
      </div>
      <input
        ref={inputRef => {
          if (inputRef && maxLength) {
            inputRef.style.paddingRight = (maxLength + '').length * 23 + 12 + 'px';
          }
        }}
        placeholder={placeHolder}
        maxLength={maxLength}
        onChange={onChange}
        disabled={disabled}
        onInput={event => {
          if (maxLength) {
            const inputLength = (event.target as any).value.length;
            setValueLength(inputLength < maxLength ? inputLength : maxLength);
          }
        }}
      />
      {maxLength && (
        <div className="pui-input-char-count">
          {valueLength}
          <span>/{maxLength}</span>
        </div>
      )}
      <div className="error-text">{error.text}</div>
    </div>
  );
};

export { Input };
