import React, { ChangeEventHandler, CSSProperties, useState } from 'react';
import { getLabelWidth, Label, getLabelProps } from '../label/label';
import { componentClassNames } from '../../shared/class-util';
import { FormItemLabelProps } from '../form/form';
import './input.scss';
import { ErrorText, FormErrorText } from '../error-text/error-text';
import { ValidationRule } from 'src/shared/validation-rules';

export interface InputProps2 {
  // 组件属性 //

  /* 类名 */
  className?: string;
  /* 样式 */
  style?: CSSProperties;

  /* 类型 */
  type?: 'text' | 'password';

  /* 标签 */
  label?: FormItemLabelProps | string;

  /* 输入值 */
  value?: string | number;
  /* 占位符 */
  placeholder?: string;
  /* 最多输入字符数 */
  maxLength?: number;
  /* 错误 */
  error?: FormErrorText;
  /* 是否必填 */
  required?: boolean;
  /* 是否禁用 */
  disabled?: boolean;

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string;

  rules?: ValidationRule[];

  /* 控件值改变事件 */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /* 值改变事件 */
  onValueChange?: (value: string) => void;
}

/**
 * Primary UI component for user interaction
 */
const Input2 = ({
  className,
  style,
  label,
  type = 'text',
  placeholder,
  maxLength,
  error,
  required = false,
  disabled = false,
  rules,
  value,
  onChange,
  onValueChange
}: InputProps2) => {
  const [valueLength, setValueLength] = useState(0);
  const labelWidth = getLabelWidth(label);

  return (
    <div
      className={componentClassNames('pui-input', {
        error: error ? error.show + '' : 'fasle'
      })}
    >
      {label && <Label {...getLabelProps(label)} requiredMark={required} />}
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
        style={{ width: `calc(100% - ${labelWidth})`, ...style }}
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
      <ErrorText {...error} label={label} />
    </div>
  );
};

export { Input2 };
