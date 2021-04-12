import React, { ChangeEventHandler, CSSProperties, useState } from 'react';
import { componentClassNames } from '../../shared/class-util';
import { FormItemLabelProps } from '../form/form';
import { getLabelWidth, Label, toLabelProps } from '../label/label';
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
  error?: { show: boolean; text: string };
  /* 是否必填 */
  required?: boolean;
  /* 最多输入字符 */
  maxLength?: number;
  /* 是否禁用 */
  disabled?: boolean;

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string;

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
  placeholder,
  error = { show: false, text: '' },
  required = false,
  disabled = false,
  maxLength,
  onChange
}: Props) => {
  const [valueLength, setValueLength] = useState(0);
  const labelWidth = getLabelWidth(label);

  const updateHeight = (element: HTMLTextAreaElement) => {
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 20 + 'px';
  };

  return (
    <div className={componentClassNames('pui-textarea', { error: error.show + '' }, className)}>
      {label && <Label {...toLabelProps(label)} requiredMark={required} />}
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
        style={{ width: `calc(100% - ${labelWidth})`, ...style }}
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
      <div className="error-text" style={{ marginLeft: labelWidth }}>
        {error.text}
      </div>
    </div>
  );
};

export { TextArea };
