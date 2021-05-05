import React, { CSSProperties, useState } from 'react';
import { IconArrowHeadDown, IconCheck } from '@pui/icons';

import { FormErrorText } from '../error-text/error-text';
import { componentClassNames } from '../../shared/class-util';
import { FormItem } from '../form/form-item';
import { usePopShowState } from '../../shared/hooks';

import './select.scss';

interface SelectOption {
  text: string;
  value: string;
}

export interface SelectProps {
  // 组件属性 //

  /** 类名 */
  className?: string;

  /** 样式 */
  style?: CSSProperties;

  /** 是否禁用 */
  disabled?: boolean;

  /* 值 */
  value?: string;

  /* 默认值 */
  defaultValue?: string;

  /* 占位符 */
  placeholder?: string;

  /* 选项 */
  options?: string | string[] | SelectOption[];

  /* 错误 */
  error?: FormErrorText;

  /* 值改变事件 */
  onValueChange?: (value: string) => void;
}

const Select = FormItem(
  ({
    className,
    disabled,
    value,
    defaultValue,
    error,
    options = [],
    onValueChange,
    placeholder
  }: SelectProps) => {
    const [selectValue, setSelectValue] = useState(value || defaultValue || '');
    const [showOptionList, setShowOptionList] = usePopShowState();

    let selectOptions: SelectOption[] = [];
    if (typeof options === 'string') {
      const optionParts = options.split(',');
      optionParts.forEach(optionPart => {
        const optionTextValue = optionPart.split(':');
        selectOptions.push({
          text: optionTextValue[0],
          value: optionTextValue.length > 1 ? optionTextValue[1] : optionTextValue[0]
        });
      });
    } else if (Array.isArray(options)) {
      if (options.length > 0 && typeof options[0] === 'object') {
        selectOptions = options as SelectOption[];
      } else {
        (options as string[]).forEach(option => {
          selectOptions.push({ text: option, value: option });
        });
      }
    }

    let displayText = '';
    if (value !== undefined) {
      selectOptions.forEach(option => {
        if (option.value === value) {
          displayText = option.text;
        }
      });
    } else {
      selectOptions.forEach(option => {
        if (option.value === selectValue) {
          displayText = option.text;
        }
      });
    }

    return (
      <div
        className={componentClassNames(
          'pui-select',
          {
            disabled: disabled + '',
            active: showOptionList + '',
            error: error ? error.show + '' : 'false'
          },
          className
        )}
      >
        <input
          readOnly
          value={displayText}
          placeholder={placeholder}
          onClick={evt => {
            evt.stopPropagation();
            setShowOptionList(!showOptionList);
          }}
          disabled={disabled}
        />
        <IconArrowHeadDown className="pui-select-icon" />
        {showOptionList && (
          <div className="pui-select-list">
            {selectOptions.map((option, inx) => (
              <div
                key={option.value + ' ' + inx}
                className={
                  'pui-select-option ' +
                  (option.text === displayText ? 'pui-select-option-selected' : '')
                }
                onClick={() => {
                  setSelectValue(option.value);
                  onValueChange && onValueChange(option.value);
                }}
              >
                {option.text}
                {option.text === displayText && <IconCheck />}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

(Select as any).displayName = 'Radio';
export { Select };
