import React, { useEffect, useMemo, useRef } from 'react';
import { componentClassNames, overrideChildren } from '../../shared/class-util';
import { ErrorText, FormErrorText } from '../error-text/error-text';
import { FormItemLabelProps } from '../form/form';
import { Label, toLabelProps } from '../label/label';
import { RadioProps } from './radio';
import './radio-group.scss';

export interface RadioGroupProps {
  // 组件属性 //

  label?: FormItemLabelProps | string;

  /* 值 */
  value?: string;

  /** 是否禁用 */
  disabled?: boolean;

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string;

  /* 是否必填 */
  required?: boolean;

  /* 点击事件 */
  onValueChange?: (val: string) => void;

  /** 子组件 */
  children?: React.ReactNode;

  /* 错误 */
  error?: FormErrorText;
}

let idCounter = 0;
const generateId = () => {
  idCounter++;
  return 'radio-group-' + idCounter;
};

const RadioGroup = ({
  label,
  disabled = false,
  children,
  onValueChange,
  value = '',
  required = false,
  error
}: RadioGroupProps) => {
  const radioValue = useRef<string>(value);

  let newChildren = useMemo(() => {
    const allValues: string[] = [];
    const radioName = generateId();
    const newChildren = overrideChildren(children, (elementName, props) => {
      if (elementName === 'Radio') {
        const radioProp: RadioProps = props;
        const radioOnChange = radioProp.onChange;
        radioProp.value && allValues.push(radioProp.value);
        radioProp.defaultChecked = radioProp.value === value;
        radioProp.name = radioName;
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
    });

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
        error: error ? error.show + '' : 'fasle'
      })}
    >
      {label && <Label {...toLabelProps(label)} requiredMark={required} />}
      {newChildren}
      <ErrorText {...error} label={label} />
    </div>
  );
};

export { RadioGroup };
