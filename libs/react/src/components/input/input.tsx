import React, { ChangeEventHandler, CSSProperties, useState } from 'react';
import { componentClassNames } from '../../shared/class-util';
import { ValidationRule } from 'src/shared/validation-rules';
import { FormItem } from '../form/form-item';
import { FormErrorText } from '../error-text/error-text';
import './input.scss';

export interface InputProps {
  /* 类名 */
  className?: string;
  /* 样式 */
  style?: CSSProperties;

  /* 类型 */
  type?: 'text' | 'password';

  /* 输入值 */
  value?: string | number;
  /* 占位符 */
  placeholder?: string;
  /* 最多输入字符数 */
  maxLength?: number;

  /* 是否必填 */
  required?: boolean;

  /* 错误 */
  error?: FormErrorText;

  /* 是否禁用 */
  disabled?: boolean;

  rules?: ValidationRule[];

  /* 控件值改变事件 */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /* 值改变事件 */
  onValueChange?: (value: string) => void;
}

/**
 * Primary UI component for user interaction
 */
const Input = FormItem(
  ({
    className,
    style,
    type = 'text',
    placeholder,
    maxLength,
    disabled = false,
    value,
    onChange,
    error,
    onValueChange
  }: InputProps) => {
    const [valueLength, setValueLength] = useState(0);

    return (
      <div
        className={componentClassNames('pui-input', { error: error ? error.show + '' : 'fasle' })}
      >
        <input
          ref={inputRef => {
            if (inputRef && maxLength) {
              inputRef.style.paddingRight = (maxLength + '').length * 23 + 12 + 'px';
            }
          }}
          placeholder={placeholder}
          maxLength={maxLength}
          type={type}
          onChange={evt => {
            onChange && onChange(evt);
            onValueChange && onValueChange(evt.target.value);
          }}
          disabled={disabled}
          style={style}
          value={value}
          className={className}
          onInput={event => {
            if (maxLength) {
              const inputLength = (event.target as any).value.length;
              setValueLength(inputLength < maxLength ? inputLength : maxLength);
            }
          }}
        />
        {maxLength && (
          <div className="pui-input-char-count">
            {valueLength > 0 && valueLength}
            <span>
              {valueLength === 0 && valueLength}/{maxLength}
            </span>
          </div>
        )}
      </div>
    );
  }
);

export { Input };
