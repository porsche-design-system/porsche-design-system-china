import React, { ChangeEventHandler, CSSProperties, useState } from 'react';
import { componentClassNames } from '../../shared/class-util';
import { FormErrorText } from '../error-text/error-text';
import { FormItemLabelProps } from '../form/form';
import { FormItem } from '../form/form-item';
import './textarea.scss';

export interface Props {
  // 组件属性 //

  /* 类名 */
  className?: string;
  /* 样式 */
  style?: CSSProperties;

  /* 标签 */
  label?: FormItemLabelProps | string;

  /* 占位符 */
  placeholder?: string;
  /* 错误 */
  error?: FormErrorText;

  /* 最多输入字符 */
  maxLength?: number;
  /* 是否禁用 */
  disabled?: boolean;

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string;

  /* 控件值改变事件 */
  onChange?: ChangeEventHandler;

  /* 值改变事件 */
  onValueChange?: (value: string) => void;
}

/**
 * Primary UI component for user interaction
 */
const TextArea = FormItem(
  ({
    className,
    placeholder,
    error,
    disabled = false,
    maxLength,
    onChange,
    onValueChange
  }: Props) => {
    const [valueLength, setValueLength] = useState(0);

    const updateHeight = (element: HTMLTextAreaElement) => {
      element.style.height = '5px';
      element.style.height = element.scrollHeight + 20 + 'px';
    };

    return (
      <div
        className={componentClassNames(
          'pui-textarea',
          { error: error ? error.show + '' : 'fasle' },
          className
        )}
      >
        <textarea
          ref={(element: HTMLTextAreaElement) => {
            if (maxLength && element) {
              updateHeight(element);
            }
          }}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={evt => {
            onChange && onChange(evt);
            onValueChange && onValueChange(evt.target.value);
          }}
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

export { TextArea };
