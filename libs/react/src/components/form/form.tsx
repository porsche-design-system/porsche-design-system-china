import React, { ChangeEventHandler, CSSProperties, useEffect, useRef, useState } from 'react';
import { validate, RuleItem } from '../../shared/validation-rules';
import { componentClassNames, overrideChildren } from '../../shared/class-util';
import { ButtonProps } from '../button/button';
import { ErrorList } from 'async-validator';
import { FormErrorText } from '../error-text/error-text';

export interface FormLabelStyle {
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
  /* 子组件 */
  children?: React.ReactNode;

  /* 类名 */
  className?: string;

  /* 样式 */
  style?: CSSProperties;

  /* 表单数据 */
  data?: any;

  /* 宽度 */
  width?: string;

  /* 高度 */
  height?: string;

  /* 行间距 */
  lineGap?: string;

  /* 表单内所有Label样式 */
  labelLayout?: FormLabelStyle;

  /* 数据改变回调 */
  onDataChange?: (data: any) => void;

  /* 数据提交事件 */
  onSubmit?: (data: any, error: any) => void | Promise<any>;
}

const Form = ({
  className,
  style,
  children,
  data,
  onDataChange,
  onSubmit,
  labelLayout,
  width,
  height,
  lineGap
}: FormProps) => {
  const [formData, setFormData] = useState(data || {});
  const [formErrors, setFormErrors] = useState([] as ErrorList);
  const formDataValidators = useRef({} as any);
  const shouldAutoValidForm = useRef(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData(data);
      if (shouldAutoValidForm.current) {
        validForm(data);
      }
    }
  }, [data]);

  const validForm = (newFormData: any) => {
    if (shouldAutoValidForm.current) {
      validate(formDataValidators.current, newFormData, errorList => {
        setFormErrors(errorList);
      });
    }
  };

  let newChildren = overrideChildren(children, (elementName, props) => {
    if (
      elementName === 'Input' ||
      elementName === 'TextArea' ||
      elementName === 'CheckBox' ||
      elementName === 'RadioGroup' ||
      elementName === 'CheckBoxGroup' ||
      elementName === 'DatePicker' ||
      elementName === 'Select' ||
      elementName === 'Switch'
    ) {
      let inputProps = props as {
        name?: string;
        onChange?: ChangeEventHandler<HTMLInputElement>;
        onValueChange?: (val: string) => void;
        label?: FormItemLabelProps | string;
        value?: any;
        rules?: RuleItem[] | RuleItem;
        error?: FormErrorText;
        style?: CSSProperties;
      };

      if (lineGap) {
        inputProps.style = { marginBottom: lineGap, ...inputProps.style };
      }

      if (inputProps.name) {
        if (formData[inputProps.name] === undefined) {
          if (elementName === 'CheckBoxGroup') {
            formData[inputProps.name] = [];
          } else {
            formData[inputProps.name] = '';
          }
        }

        inputProps.error = undefined;
        if (formErrors) {
          formErrors.forEach(error => {
            if (error.field === inputProps.name) {
              inputProps.error = { show: true, message: error.message };
            }
          });
        }

        if (inputProps.rules) {
          const updateRule = (rule: RuleItem) => {
            if (rule.type === 'number' || rule.type === 'integer' || rule.type === 'float') {
              rule.transform = value => {
                if (!rule.required && !value) {
                  return '';
                }
                return Number(value);
              };
            }
          };
          if (Array.isArray(inputProps.rules)) {
            inputProps.rules.forEach(rule => {
              updateRule(rule);
            });
          } else {
            updateRule(inputProps.rules);
          }
          formDataValidators.current[inputProps.name] = inputProps.rules;
        }

        inputProps = {
          ...inputProps,
          value: formData[inputProps.name] || (elementName === 'CheckBoxGroup' ? [] : '')
        };

        // const clearError = () => {
        //   if (formErrors) {
        //     for (let i = 0; i < formErrors.length; i++) {
        //       if (formErrors[i].field === inputProps.name) {
        //         formErrors.splice(i, 1);
        //         setFormErrors(formErrors);
        //         break;
        //       }
        //     }
        //   }
        // };

        const formItemOnChange = inputProps.onChange;
        const formItemOnValueChange = inputProps.onValueChange;

        if (['CheckBox'].includes(elementName)) {
          inputProps.onChange = evt => {
            const newFormData = { ...formData, [inputProps.name!]: evt.target.value };
            setFormData(newFormData);
            onDataChange && onDataChange(newFormData);
            formItemOnChange && formItemOnChange(evt);
            validForm(newFormData);
          };
        } else if (
          [
            'RadioGroup',
            'CheckBoxGroup',
            'DatePicker',
            'Select',
            'Switch',
            'Input',
            'TextArea'
          ].includes(elementName)
        ) {
          inputProps.onValueChange = value => {
            const newFormData = { ...formData, [inputProps.name!]: value };
            setFormData(newFormData);
            onDataChange && onDataChange(newFormData);
            formItemOnValueChange && formItemOnValueChange(value);
            validForm(newFormData);
          };
        }
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
      let inputProps = props;
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
      if (buttonProps.submit) {
        const buttonOnClick = buttonProps.onClick;
        buttonProps.loading = submitting;
        buttonProps.onClick = evt => {
          buttonOnClick && buttonOnClick(evt);
          validate(formDataValidators.current, formData, errorList => {
            shouldAutoValidForm.current = true;
            setFormErrors(errorList);
            if (onSubmit) {
              const loadingPromise = onSubmit(formData, errorList);
              if (loadingPromise && typeof loadingPromise === 'object') {
                setSubmitting(true);
                ((loadingPromise as unknown) as Promise<unknown>).then(() => {
                  buttonProps.loading = false;
                  setSubmitting(false);
                });
              }
            }
          });
        };
      }
      return buttonProps;
    }
    return props;
  });

  return (
    <div
      className={componentClassNames('pui-form', {}, className)}
      style={{ width, height, ...style }}
    >
      {newChildren}
    </div>
  );
};

export { Form };
