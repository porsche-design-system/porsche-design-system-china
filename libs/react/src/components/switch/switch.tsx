import React, { CSSProperties, useEffect, useState } from 'react'
// import { IconCheck, IconClose } from '@pui/icons'

import { FormErrorText } from '../error-text/error-text'
import { componentClassNames } from '../../shared/class-util'
import { FormItem } from '../form/form-item'

import './switch.scss'

export interface SwitchProps<T> {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 是否禁用 */
  disabled?: boolean

  /* 默认值 */
  defaultValue?: T

  /* 值 */
  value?: T

  /* 错误 */
  error?: FormErrorText

  /* 开关值 */
  alterValues?: T | [T, T]

  /* 值改变事件 */
  onValueChange?: (value: T) => void
}

const Switch = FormItem(
  <T extends any>({
    className,
    disabled,
    value,
    onValueChange,
    alterValues,
    defaultValue
  }: SwitchProps<T>) => {
    let switchValues: [any, any] = [false, true]
    if (alterValues === 'FalseOrTrue') {
      switchValues = [false, true]
    } else if (alterValues === 'ZeroOrOne') {
      switchValues = [0, 1]
    } else if (typeof alterValues === 'string') {
      const vals = (alterValues as string).split(',')
      switchValues = [vals[0], vals.length > 1 ? vals[1] : vals[0]]
    } else if (alterValues) {
      switchValues = alterValues as [T, T]
    }

    let dValue: T = '' as T
    if (value !== undefined) {
      dValue = value
    } else if (defaultValue !== undefined) {
      dValue = defaultValue
    }
    if (dValue !== switchValues[0] && dValue !== switchValues[1]) {
      dValue = switchValues[0]
      setTimeout(() => {
        onValueChange && onValueChange(dValue)
      })
    }
    const [switchValue, setSwitchValue] = useState(dValue)

    useEffect(() => {
      if (switchValues.includes(value)) {
        setSwitchValue(value as T)
      }
    }, [value])

    return (
      <div
        className={componentClassNames(
          'pui-switch',
          {
            disabled: disabled + '',
            enabled: (switchValue === switchValues[1]) + ''
          },
          className
        )}
      >
        <div
          className="pui-switch-bar"
          onClick={() => {
            if (disabled) {
              return
            }

            const newStateValue =
              switchValue === switchValues[0]
                ? switchValues[1]
                : switchValues[0]
            if (value === undefined) {
              setSwitchValue(newStateValue)
            }

            onValueChange && onValueChange(newStateValue)
          }}
        >
          {/* <IconClose className="pui-switch-disable-icon" />
          <IconCheck className="pui-switch-enable-icon" /> */}
          <div className="pui-switch-button" />
        </div>
      </div>
    )
  }
)

;(Switch as any).displayName = 'Switch'
export { Switch }
