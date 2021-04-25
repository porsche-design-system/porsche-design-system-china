import React, { useEffect, useMemo, useState } from 'react';
import { componentClassNames, overrideChildren } from '../../shared/class-util';
import { FormErrorText } from '../error-text/error-text';
import { FormItem } from '../form/form-item';
import { Radio, RadioProps } from './radio';
import './radio-group.scss';

interface Option {
  text: string;
  value: string;
}

export interface RadioGroupProps {
  // 组件属性 //

  /* 值 */
  value?: string;

  /** 是否禁用 */
  disabled?: boolean;

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string;

  /* 错误 */
  error?: FormErrorText;

  /* 点击事件 */
  onValueChange?: (val: string) => void;

  /* 选项 */
  options?: string | string[] | Option[];

  /* 允许取消选项 */
  allowCancelSelection?: boolean;

  /** 子组件 */
  children?: React.ReactNode;
}

const RadioGroup = FormItem(
  ({
    disabled = false,
    children,
    onValueChange,
    value = '',
    allowCancelSelection = false,
    error,
    options
  }: RadioGroupProps) => {
    const [radioValue, setRadioValue] = useState<string>(value);

    useEffect(() => {
      setRadioValue(value);
    }, [value]);

    let radioOptions: Option[] = [];
    if (typeof options === 'string') {
      const optionParts = options.split(',');
      optionParts.forEach(optionPart => {
        const optionTextValue = optionPart.split(':');
        radioOptions.push({
          text: optionTextValue[0],
          value: optionTextValue.length > 1 ? optionTextValue[1] : optionTextValue[0]
        });
      });
    } else if (Array.isArray(options)) {
      if (options.length > 0 && typeof options[0] === 'object') {
        radioOptions = options as Option[];
      } else {
        (options as string[]).forEach(option => {
          radioOptions.push({ text: option, value: option });
        });
      }
    }

    const optionRadios = radioOptions.map((option, inx) => (
      <Radio key={'$Radio-' + inx} {...option} />
    ));

    let newChildren = useMemo(() => {
      const allValues: string[] = [];
      const newChildren = overrideChildren(
        [...optionRadios, ...React.Children.toArray(children)],
        (elementName, props) => {
          if (elementName === 'Radio') {
            const radioProp: RadioProps = props;
            const radioOnChange = radioProp.onChange;
            const radioOnCheckedChange = radioProp.onCheckedChange;
            radioProp.value = radioProp.value || radioProp.text;
            radioProp.value && allValues.push(radioProp.value);
            radioProp.checked = radioProp.value === radioValue;
            radioProp.onChange = evt => {
              radioOnChange && radioOnChange(evt);
              radioOnCheckedChange && radioOnCheckedChange(evt.target.checked);
              if (evt.target.value) {
                if (evt.target.checked) {
                  setRadioValue(evt.target.value);
                }
              }
              onValueChange && onValueChange(evt.target.value);
            };
            if (allowCancelSelection) {
              (radioProp as any).onClick = (evt: any) => {
                if (allowCancelSelection && evt.target.value === radioValue) {
                  setRadioValue('');
                }
              };
            }
          }
          return props;
        }
      );

      if (allValues.indexOf(radioValue) < 0) {
        setRadioValue('');
      }

      return newChildren;
    }, [onValueChange, value, radioValue]);

    useEffect(() => {
      if (radioValue !== value) {
        onValueChange && onValueChange(radioValue);
      }
    }, []);

    return (
      <div
        className={componentClassNames('pui-radio-group', {
          disabled: disabled + '',
          error: error ? error.show + '' : 'false'
        })}
      >
        {newChildren}
      </div>
    );
  }
);

(RadioGroup as any).displayName = 'RadioGroup';
export { RadioGroup };
