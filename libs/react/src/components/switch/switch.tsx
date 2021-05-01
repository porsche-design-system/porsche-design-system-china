import React, { CSSProperties, useEffect, useState } from 'react';
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

  /* 默认值 */
  defaultValue?: boolean;

  /* 值 */
  value?: boolean;

  /* 错误 */
  error?: FormErrorText;

  /* 开关值 */
  alterValues?: string | [string | boolean | number, string | boolean | number];

  /* 值改变事件 */
  onValueChange?: (value: boolean) => void;
}

const Switch = FormItem(
  ({ className, disabled, value, onValueChange, alterValues, defaultValue }: SwitchProps) => {
    const [switchValue, setSwitchValue] = useState(value || defaultValue);

    let switchValues: [any, any] = [false, true];
    if (alterValues === 'FalseOrTrue') {
      switchValues = [false, true];
    } else if (alterValues === 'ZeroOrOne') {
      switchValues = [0, 1];
    } else if (typeof alterValues === 'string') {
      const vals = (alterValues as string).split(',');
      switchValues = [vals[0], vals.length > 1 ? vals[1] : vals[0]];
    } else if (alterValues) {
      switchValues = alterValues;
    }

    useEffect(() => {
      if (value === switchValues[1]) {
        setSwitchValue(true);
      } else if (value === switchValues[0]) {
        setSwitchValue(false);
      }
    }, [value]);

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
      >
        <div
          className="pui-switch-bar"
          onClick={() => {
            if (disabled) {
              return;
            }
            const newStateValue = !switchValue;
            if (value === undefined) {
              setSwitchValue(newStateValue);
            }
            onValueChange && onValueChange(newStateValue ? switchValues[1] : switchValues[0]);
          }}
        >
          <IconClose className="pui-switch-disable-icon" />
          <IconCheck className="pui-switch-enable-icon" />
          <div className="pui-switch-button"></div>
        </div>
      </div>
    );
  }
);

(Switch as any).displayName = 'Switch';
export { Switch };
