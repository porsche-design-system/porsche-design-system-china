import React from 'react';
import { getLabelWidth, Label, getLabelProps } from '../label/label';
import { FormItemLabelProps } from './form';
import { ErrorText, FormErrorText } from '../error-text/error-text';

import './form-item.scss';

export interface FormItemProps {
  /* 标签 */
  label?: FormItemLabelProps | string;

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string;

  /* 错误 */
  error?: FormErrorText;

  /* 是否必填 */
  required?: boolean;

  /* 宽度 */
  width?: string;

  /* 左边距 */
  marginLeft?: string;

  /* 右边距 */
  marginRight?: string;
}

const FormItem = <T,>(func: (...args: T[]) => React.ReactNode) => (props: FormItemProps & T) => {
  const { label, error, required, width, marginLeft, marginRight } = props;

  const labelWidth = getLabelWidth(label);
  const labelProps = getLabelProps(label);

  const comp = func(props) as any;
  const labelStyle =
    labelProps.position === 'left' &&
    (comp.props.className.indexOf('pui-input') >= 0 ||
      comp.props.className.indexOf('pui-textarea') >= 0)
      ? { marginTop: '11px' }
      : {};

  return (
    <div className="pui-form-item" style={{ width, marginLeft, marginRight }}>
      {label && <Label requiredMark={required} style={labelStyle} {...labelProps} />}
      {React.cloneElement(comp, { style: { width: `calc(100% - ${labelWidth})` } })}
      {error && error.show && <ErrorText {...error} label={label} />}
    </div>
  );
};

export { FormItem };
