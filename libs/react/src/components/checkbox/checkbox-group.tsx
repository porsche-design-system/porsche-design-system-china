import React, { useEffect, useMemo, useRef } from 'react';
import { componentClassNames, overrideChildren } from '../../shared/class-util';
import { ErrorText, FormErrorText } from '../error-text/error-text';
import { FormItemLabelProps } from '../form/form';
import { Label, toLabelProps } from '../label/label';
import { CheckBoxProps } from './checkbox';
import './checkbox-group.scss';

export interface CheckBoxGroupProps {
  // 组件属性 //

  label?: FormItemLabelProps | string;

  /* 值 */
  value?: string[];

  /** 是否禁用 */
  disabled?: boolean;

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string;

  /* 是否必填 */
  required?: boolean;

  /* 值改变事件 */
  onValueChange?: (values: string[]) => void;

  /** 子组件 */
  children?: React.ReactNode;

  /* 错误 */
  error?: FormErrorText;
}

const CheckBoxGroup = ({
  label,
  disabled = false,
  children,
  onValueChange,
  value = [],
  required = false,
  error
}: CheckBoxGroupProps) => {
  const checkBoxValues = useRef<string[]>(value);

  let newChildren = useMemo(() => {
    const allValues: string[] = [];
    const newChildren = overrideChildren(children, (elementName, props) => {
      if (elementName === 'CheckBox') {
        const checkboxProp: CheckBoxProps = props;
        const checkBoxOnChange = checkboxProp.onChange;
        checkboxProp.value && allValues.push(checkboxProp.value);
        checkboxProp.defaultChecked =
          checkboxProp.value !== undefined &&
          checkBoxValues.current.indexOf(checkboxProp.value) >= 0;
        checkboxProp.onChange = evt => {
          checkBoxOnChange && checkBoxOnChange(evt);
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
    });

    const filteredValues: string[] = [];
    checkBoxValues.current.forEach(v => {
      if (allValues.indexOf(v) >= 0) {
        filteredValues.push(v);
      }
    });
    checkBoxValues.current = filteredValues;
    return newChildren;
  }, [onValueChange]);

  useEffect(() => {
    if (JSON.stringify(checkBoxValues.current.sort()) !== JSON.stringify(value)) {
      onValueChange && onValueChange(checkBoxValues.current);
    }
  }, []);

  return (
    <div
      className={componentClassNames('pui-checkbox-group', {
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

export { CheckBoxGroup };
