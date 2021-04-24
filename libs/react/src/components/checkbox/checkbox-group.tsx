import React, { useEffect, useMemo, useRef } from 'react';
import { componentClassNames, overrideChildren } from '../../shared/class-util';
import { FormErrorText } from '../error-text/error-text';
import { FormItem } from '../form/form-item';
import { CheckBox, CheckBoxProps } from './checkbox';
import './checkbox-group.scss';

interface SelectOption {
  text: string;
  value: string;
}

export interface CheckBoxGroupProps {
  /* 值 */
  value?: string[];

  /** 是否禁用 */
  disabled?: boolean;

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string;

  /* 值改变事件 */
  onValueChange?: (values: string[]) => void;

  /** 子组件 */
  children?: React.ReactNode;

  /* 选项 */
  options?: string | string[] | SelectOption[];

  /* 错误 */
  error?: FormErrorText;
}

const CheckBoxGroup = FormItem(
  ({
    disabled = false,
    children,
    onValueChange,
    value = [],
    error,
    options
  }: CheckBoxGroupProps) => {
    const checkBoxValues = useRef<string[]>(value);

    let checkBoxOptions: SelectOption[] = [];
    if (typeof options === 'string') {
      const optionParts = options.split(',');
      optionParts.forEach(optionPart => {
        const optionTextValue = optionPart.split(':');
        checkBoxOptions.push({
          text: optionTextValue[0],
          value: optionTextValue.length > 1 ? optionTextValue[1] : optionTextValue[0]
        });
      });
    } else if (Array.isArray(options)) {
      if (options.length > 0 && typeof options[0] === 'object') {
        checkBoxOptions = options as SelectOption[];
      } else {
        (options as string[]).forEach(option => {
          checkBoxOptions.push({ text: option, value: option });
        });
      }
    }

    const optionsNodes = checkBoxOptions.map((option, inx) => (
      <CheckBox key={'$CheckBox-' + inx} {...option} />
    ));

    let newChildren = useMemo(() => {
      checkBoxValues.current = value;
      const allValues: string[] = [];
      const newChildren = overrideChildren(
        [...optionsNodes, ...React.Children.toArray(children)],
        (elementName, props) => {
          if (elementName === 'CheckBox') {
            const checkboxProp: CheckBoxProps = props;
            const checkBoxOnChange = checkboxProp.onChange;
            const checkBoxOnCheckedChange = checkboxProp.onCheckedChange;
            checkboxProp.value = checkboxProp.value || checkboxProp.text;
            checkboxProp.value && allValues.push(checkboxProp.value);
            checkboxProp.checked =
              checkboxProp.value !== undefined &&
              checkBoxValues.current.indexOf(checkboxProp.value) >= 0;
            checkboxProp.onChange = evt => {
              checkBoxOnChange && checkBoxOnChange(evt);
              checkBoxOnCheckedChange && checkBoxOnCheckedChange(evt.target.checked);
              if (evt.target.value) {
                if (evt.target.checked) {
                  checkBoxValues.current.push(evt.target.value);
                } else {
                  const inx = checkBoxValues.current.indexOf(evt.target.value);
                  if (inx >= 0) {
                    checkBoxValues.current.splice(inx, 1);
                  }
                }
              }
              onValueChange && onValueChange([...checkBoxValues.current]);
            };
          }
          return props;
        }
      );

      const filteredValues: string[] = [];
      checkBoxValues.current.forEach(v => {
        if (allValues.indexOf(v) >= 0) {
          filteredValues.push(v);
        }
      });
      checkBoxValues.current = filteredValues;
      return newChildren;
    }, [onValueChange, value]);

    useEffect(() => {
      if (JSON.stringify(checkBoxValues.current.sort()) !== JSON.stringify(value)) {
        onValueChange && onValueChange(checkBoxValues.current);
      }
    }, []);

    return (
      <div
        className={componentClassNames('pui-checkbox-group', {
          disabled: disabled + '',
          error: error ? error.show + '' : 'false'
        })}
      >
        {newChildren}
      </div>
    );
  }
);

(CheckBoxGroup as any).displayName = 'CheckBoxGroup';
export { CheckBoxGroup };
