import React, { ChangeEventHandler, CSSProperties, useState } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './textarea.scss';

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
  placeholder?: string;
  /* 错误 */
  error?: { show: boolean; text: string };
  /* 是否必填 */
  required?: boolean;
  /* 最多输入字符 */
  maxLength?: number;
  /* 是否禁用 */
  disabled?: boolean;

  // 组件事件 //

  /* 值改变事件 */
  onChange?: ChangeEventHandler;
}

/**
 * Primary UI component for user interaction
 */
const TextArea = ({
  className,
  style,
  label,
  labelPosition = 'top',
  placeholder,
  error = { show: false, text: '' },
  required = false,
  disabled = false,
  maxLength,
  onChange
}: Props) => {
  const [valueLength, setValueLength] = useState(0);

  const updateHeight = (element: HTMLTextAreaElement) => {
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  };

  return (
    <div
      className={componentClassNames(
        'pui-textarea',
        { labelPosition, error: error.show + '' },
        className
      )}
      style={style}
    >
      <div className="label">
        {label}
        <span>{label && required ? '*' : ''}</span>
      </div>
      <textarea
        ref={(element: HTMLTextAreaElement) => {
          if (maxLength && element) {
            updateHeight(element);
          }
        }}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        onInput={event => {
          if (maxLength) {
            const inputLength = (event.target as any).value.length;
            setValueLength(inputLength < maxLength ? inputLength : maxLength);
            if (maxLength) {
              const element = event.target as HTMLTextAreaElement;
              updateHeight(element);
            }
          }
        }}
      />
      {maxLength && (
        <div className="pui-textarea-char-count">
          {valueLength}
          <span>/{maxLength}</span>
        </div>
      )}
      <div className="error-text">{error.text}</div>
    </div>
  );
};

export { TextArea };
