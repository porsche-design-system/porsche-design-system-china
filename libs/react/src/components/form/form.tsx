import React, { CSSProperties, useEffect, useState } from 'react';
import { componentClassNames, overrideChildren } from '../../shared/class-util';
import { InputProps } from '../input/input';
import { ButtonProps } from '../button/button';

export interface FormLabelStyle {
  // 组件属性 //

  /* 标签位置 */
  position?: 'top' | 'left';

  /* 类名 */
  className?: string;
  /* 样式 */
  style?: CSSProperties;

  /* 标签位置 */
  textAlign?: 'left' | 'right';

  /* 标签宽度 */
  width?: string;
}

export interface FormItemLabelProps extends FormLabelStyle {
  /* Label显示文字 */
  text: string;
}

export interface FormProps {
  // 组件属性 //

  /* 子组件 */
  children?: React.ReactNode;

  /* 类名 */
  className?: string;
  /* 样式 */
  style?: CSSProperties;

  /* 表单数据 */
  data?: any;

  /* 表单内所有Label样式 */
  labelLayout?: FormLabelStyle;

  /* 数据改变回调 */
  onDataChange?: (data: any) => void;

  /* 数据提交事件 */
  onSubmit?: (data: any, error: any) => void;
}

const Form = ({
  className,
  style,
  children,
  data = {},
  onDataChange,
  onSubmit,
  labelLayout
}: FormProps) => {
  const [formData, setFormData] = useState(data);
  useEffect(() => {
    setFormData(data);
  }, [data]);

  let newChildren = children;
  if (children) {
    newChildren = overrideChildren(children, (elementName, props) => {
      if (elementName === 'Input' || elementName === 'TextArea' || elementName === 'RadioGroup') {
        let inputProps = props as InputProps;

        if (inputProps.name) {
          const inputOnChange = inputProps.onChange;

          inputProps = {
            ...inputProps,
            value: formData[inputProps.name] || '',
            onChange: evt => {
              const newFormData = { ...formData, [inputProps.name!]: evt.target.value };
              setFormData(newFormData);
              inputOnChange && inputOnChange(evt);
              onDataChange && onDataChange(newFormData);
            }
          };
        }

        const combinedLabelStyle: FormItemLabelProps =
          typeof inputProps.label === 'object'
            ? { ...labelLayout, ...inputProps.label }
            : { ...labelLayout, text: inputProps.label || '' };
        inputProps = {
          ...inputProps,
          label: combinedLabelStyle
        };

        return inputProps;
      } else if (elementName === 'ButtonGroup') {
        let inputProps = props as InputProps;
        const combinedLabelStyle: FormItemLabelProps =
          typeof inputProps.label === 'object'
            ? { ...labelLayout, ...inputProps.label }
            : { ...labelLayout, text: inputProps.label || '' };
        inputProps = {
          ...inputProps,
          label: combinedLabelStyle
        };
        return inputProps;
      } else if (elementName === 'Button') {
        let buttonProps = props as ButtonProps;
        if (buttonProps.formSubmit) {
          const buttonOnClick = buttonProps.onClick;
          buttonProps.onClick = evt => {
            buttonOnClick && buttonOnClick(evt);
            onSubmit && onSubmit(formData, null);
          };
        }
        return buttonProps;
      }
      return props;
    });
  }

  return (
    <div className={componentClassNames('pui-form', {}, className)} style={style}>
      {newChildren}
    </div>
  );
};

export { Form };
