import React, { CSSProperties, useState } from 'react';
import { IconCheck, IconClose } from '@pui/icons';

import { FormErrorText } from '../error-text/error-text';
import { componentClassNames } from '../../shared/class-util';
import { FormItem } from '../form/form-item';

import './switch.scss';

export interface SwitchProps {
  // 组件属性 //

  /** 类名 */
  className?: string;

  /** 样式 */
  style?: CSSProperties;

  /** 是否禁用 */
  disabled?: boolean;

  /* 值 */
  value?: boolean;

  /* 错误 */
  error?: FormErrorText;

  /* 值改变事件 */
  onValueChange?: (value: boolean) => void;
}

const Switch = FormItem(({ className, style, disabled, value, onValueChange }: SwitchProps) => {
  const [stateValue, setStateValue] = useState(false);
  const switchValue = value === undefined ? stateValue : value;

  return (
    <div
      className={componentClassNames(
        'pui-switch',
        {
          disabled: disabled + '',
          enabled: switchValue + ''
        },
        className
      )}
      style={style}
    >
      <div
        className="pui-switch-bar"
        onClick={() => {
          if (disabled) {
            return;
          }
          setStateValue(!switchValue);
          onValueChange && onValueChange(switchValue);
        }}
      >
        <IconClose className="pui-switch-disable-icon" />
        <IconCheck className="pui-switch-enable-icon" />
        <div className="pui-switch-button"></div>
      </div>
    </div>
  );
});

export { Switch };
