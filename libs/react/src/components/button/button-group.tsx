import React from 'react';
import { componentClassNames } from '../../shared/class-util';
import { FormItemLabelProps } from '../form/form';
import { Label, toLabelProps } from '../label/label';
import './button-group.scss';

export interface ButtonGroupProps {
  // 组件属性 //

  label?: FormItemLabelProps | string;

  /** 是否禁用 */
  disabled?: boolean;

  /** 子组件 */
  children?: React.ReactNode;
}

const ButtonGroup = ({ label, disabled = false, children }: ButtonGroupProps) => {
  return (
    <div className={componentClassNames('pui-button-group', { disabled: disabled + '' })}>
      {label && <Label {...toLabelProps(label)} />}
      {children}
    </div>
  );
};

export { ButtonGroup };
