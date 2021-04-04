import React, { ChangeEventHandler, CSSProperties, useState } from 'react';
import { IconAsterisk } from '@pui/icons';
import { componentClassNames } from '../../shared/class-util';
import './input.scss';

export interface Props {
  // 组件属性 //

  /* 类名 */
  className?: string;
  /* 样式 */
  style?: CSSProperties;

  /* 类型 */
  type?: 'text' | 'password';

  /* 标签 */
  label?: string;
  /* 标签位置 */
  labelPosition?: 'left' | 'top';
  /* 标签宽度 */
  labelWidth?: string;
  /* 占位符 */
  placeholder?: string;
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
  type = 'text',
  labelPosition = 'top',
  placeholder,
  maxLength,
  error = { show: false, text: '' },
  required = false,
  disabled = false,
  labelWidth = 'auto',
  onChange
}: Props) => {
  const [valueLength, setValueLength] = useState(0);

  return (
    <div className={componentClassNames('pui-input', { labelPosition, error: error.show + '' })}>
      {label && (
        <div className="pui-input-label" style={{ width: labelWidth }}>
          <span>
            {label && required && labelPosition === 'left' ? (
              <IconAsterisk style={{ fontSize: '10px' }} />
            ) : (
              ''
            )}
          </span>
          {label}
          <span>
            {label && required && labelPosition === 'top' ? (
              <IconAsterisk style={{ fontSize: '10px' }} />
            ) : (
              ''
            )}
          </span>
        </div>
      )}
      <input
        ref={inputRef => {
          if (inputRef && maxLength) {
            inputRef.style.paddingRight = (maxLength + '').length * 23 + 12 + 'px';
          }
        }}
        placeholder={placeholder}
        maxLength={maxLength}
        type={type}
        onChange={onChange}
        disabled={disabled}
        style={style}
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
          {valueLength}
          <span>/{maxLength}</span>
        </div>
      )}
      <div className="pui-input-error-text">{error.text}</div>
    </div>
  );
};

export { Input };
