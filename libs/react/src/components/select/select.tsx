import React, { CSSProperties, useState } from 'react';
import { IconArrowHeadDown } from '@pui/icons';

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
    style,
    disabled,
    value,
    error,
    options = [],

    onValueChange,
    placeholder
  }: SelectProps) => {
    const [stateValue, setStateValue] = useState(value);
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
        if (option.value === stateValue) {
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
        style={style}
      >
        <input
          readOnly
          value={displayText}
          placeholder={placeholder}
          onClick={() => {
            setShowOptionList(true);
          }}
          disabled={disabled}
        />
        <IconArrowHeadDown className="pui-select-icon" />
        {showOptionList && (
          <div className="pui-select-list">
            {selectOptions.map(option => (
              <div
                className="pui-select-option"
                onClick={() => {
                  setStateValue(option.value);
                  onValueChange && onValueChange(option.value);
                }}
              >
                {option.text}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export { Select };
