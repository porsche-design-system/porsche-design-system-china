import React from 'react';
import { componentClassNames } from '../../shared/class-util';
import { FormItemLabelProps } from '../form/form';
import { Label, getLabelProps } from '../label/label';
import './button-group.scss';

export interface ButtonGroupProps {
  // 组件属性 //

  label?: FormItemLabelProps | string;

  /** 是否禁用 */
  disabled?: boolean;

  /* 按钮位置 */
  align?: 'left' | 'right' | 'center';

  /** 子组件 */
  children?: React.ReactNode;
}

const ButtonGroup = ({ label, disabled = false, children, align = 'left' }: ButtonGroupProps) => {
  return (
    <div
      className={componentClassNames('pui-button-group', { disabled: disabled + '', align })}
      style={{ textAlign: align }}
    >
      {label && <Label {...getLabelProps(label)} />}
      {children}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';
export { ButtonGroup };
