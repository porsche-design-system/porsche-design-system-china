import React, { ChangeEventHandler, useEffect, useRef } from 'react';
import { componentClassNames } from '../../shared/class-util';
import { ErrorText, FormErrorText } from '../error-text/error-text';
import { FormItemLabelProps } from '../form/form';
import { Label, toLabelProps } from '../label/label';
import './radio-group.scss';

export interface RadioGroupProps {
  // 组件属性 //

  label?: FormItemLabelProps | string;

  /* 值 */
  value?: string | number;

  /** 是否禁用 */
  disabled?: boolean;

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string;

  /* 是否必填 */
  required?: boolean;

  /* 点击事件 */
  onChange?: ChangeEventHandler<HTMLInputElement>;

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
  onChange,
  value,
  required = false,
  error
}: RadioGroupProps) => {
  const radioButtons = useRef<HTMLInputElement[]>();

  const refLoaded = (radioGroup: HTMLDivElement) => {
    if (!radioGroup) {
      return;
    }
    radioButtons.current = [].slice.call(radioGroup.getElementsByTagName('input'));
    const radioGroupName = generateId();
    radioButtons.current.forEach(radioButton => {
      radioButton.onchange = onChange as any;
      radioButton.name = radioGroupName;
      if (value) {
        radioButton.checked = radioButton.value === value;
      }
    });
  };

  useEffect(() => {
    if (radioButtons.current) {
      radioButtons.current.forEach(radioButton => {
        radioButton.onchange = onChange as any;
        if (value) {
          radioButton.checked = radioButton.value === value;
        }
      });
    }
  }, [value]);

  return (
    <div
      className={componentClassNames('pui-radio-group', {
        disabled: disabled + '',
        error: error ? error.show + '' : 'fasle'
      })}
      ref={refLoaded}
    >
      {label && <Label {...toLabelProps(label)} requiredMark={required} />}
      {children}
      <ErrorText {...error} label={label} />
    </div>
  );
};

export { RadioGroup };
