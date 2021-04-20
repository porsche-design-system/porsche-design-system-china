import React, { useEffect, useMemo, useRef } from 'react';
import { componentClassNames, overrideChildren } from '../../shared/class-util';
import { FormErrorText } from '../error-text/error-text';
import { FormItem } from '../form/form-item';
import { Radio, RadioProps } from './radio';
import './radio-group.scss';

interface SelectOption {
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
  options?: string | string[] | SelectOption[];

  /** 子组件 */
  children?: React.ReactNode;
}

let idCounter = 0;
const generateId = () => {
  idCounter++;
  return 'radio-group-' + idCounter;
};

const RadioGroup = FormItem(
  ({ disabled = false, children, onValueChange, value = '', error, options }: RadioGroupProps) => {
    const radioValue = useRef<string>(value);

    let radioOptions: SelectOption[] = [];
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
        radioOptions = options as SelectOption[];
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
      const radioName = generateId();
      const allValues: string[] = [];
      const newChildren = overrideChildren(
        [...optionRadios, ...React.Children.toArray(children)],
        (elementName, props) => {
          if (elementName === 'Radio') {
            const radioProp: RadioProps = props;
            const radioOnChange = radioProp.onChange;
            radioProp.value && allValues.push(radioProp.value);
            radioProp.defaultChecked = radioProp.value === value;
            radioProp.name = radioName;
            radioProp.value = radioProp.value || radioProp.text;
            radioProp.onChange = evt => {
              radioOnChange && radioOnChange(evt);
              if (evt.target.value) {
                if (evt.target.checked) {
                  radioValue.current = evt.target.value;
                }
              }
              onValueChange && onValueChange(radioValue.current);
            };
          }
          return props;
        }
      );

      if (allValues.indexOf(radioValue.current) < 0) {
        radioValue.current = '';
      }

      return newChildren;
    }, [onValueChange]);

    useEffect(() => {
      if (radioValue.current !== value) {
        onValueChange && onValueChange(radioValue.current);
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

export { RadioGroup };
