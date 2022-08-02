import React, { useState, CSSProperties, useEffect, ReactElement } from 'react'
import classNames from 'classnames'
import {
  IconAdd,
  IconMinus,
  IconPlus,
  IconArrowHeadUp,
  IconArrowHeadDown
} from '@pui/icons'

import { FormItem } from '../form/form-item'
import { Input } from '../input/input'
import { componentClassNames, isReactElement } from '../../shared/class-util'
import { useDefaultSize } from '../../shared/hooks'

import './input-number.scss'

type PUIIcon = typeof IconAdd
const prefixCls = 'pui-input-number'
export interface InputNumberProps {
  /** 步骤条类名 */
  className?: string

  /** 默认初始值 */
  defaultValue?: string | number

  /** 禁用 */
  disabled?: boolean

  /** 最大值 */
  max?: number

  /** 最小值 */
  min?: number

  /** 大小 */
  size?: 'small' | 'medium' | 'tiny'

  /** 每次改变步数，可以为小数 */
  step?: string | number

  /** 样式 */
  style?: CSSProperties

  /** 数字加减器类型，有 default 和 arrow 两种 */
  type?: 'default' | 'arrow'

  /** 当前值 */
  value?: string | number

  /** 不显示递增按钮 */
  hideStepBtn?: boolean

  /** 后缀ICON */
  suffixIcon?: PUIIcon | ReactElement

  /** 后缀样式 */
  suffixStyle?: CSSProperties

  /** 值改变回调 */
  onValueChange?: (val: number | string) => void
}

const InputNumber = FormItem(
  ({
    className,
    defaultValue,
    disabled = false,
    max = Infinity,
    min = -Infinity,
    size,
    step = 1,
    style,
    type = 'default',
    value,
    suffixIcon,
    suffixStyle,
    hideStepBtn = false,
    onValueChange
  }: InputNumberProps) => {
    let initialValue = value !== undefined ? value : defaultValue
    if (typeof initialValue === 'number') initialValue = String(initialValue)
    const [currentValue, setCurrentValue] = useState(initialValue)
    const [defaultSize] = useDefaultSize()
    const SuffixComponent = suffixIcon as any

    size = size || defaultSize
    useEffect(() => {
      if (Number(value) !== Number(currentValue) && value !== undefined)
        setCurrentValue(String(value))
    }, [value])
    const handleValueChange = (val: string) => {
      if (!/[^.\-\d]/.test(val)) {
        const nextValue =
          val === '' || Number.isNaN(Number(val)) ? val : Number(val)
        setCurrentValue(val)
        onValueChange && onValueChange(nextValue)
      }
    }
    const add = () => {
      if (!disabled) {
        const nextValue = Number(currentValue) + Number(step)
        if (value !== undefined) {
          if (nextValue > max) return
          onValueChange && onValueChange(nextValue)
        } else {
          setCurrentValue(currentValue => {
            if (nextValue > max) {
              return currentValue
            }
            onValueChange && onValueChange(nextValue)
            return String(nextValue)
          })
        }
      }
    }
    const reduce = () => {
      if (!disabled) {
        const nextValue = Number(currentValue) - Number(step)
        if (value !== undefined) {
          if (nextValue < min) return
          onValueChange && onValueChange(nextValue)
        } else {
          setCurrentValue(currentValue => {
            if (nextValue < min) {
              return currentValue
            }
            onValueChange && onValueChange(nextValue)
            return String(nextValue)
          })
        }
      }
    }
    const handleBlur = (e: React.FocusEvent) => {
      let nextValue: number | string = (e.target as HTMLInputElement).value
      nextValue = parseFloat(nextValue)
      if (Number.isNaN(nextValue)) {
        setCurrentValue('')
        onValueChange && onValueChange('')
      } else if (nextValue > max) {
        setCurrentValue(String(max))
        onValueChange && onValueChange(max)
      } else if (nextValue < min) {
        setCurrentValue(String(min))
        onValueChange && onValueChange(min)
      } else {
        setCurrentValue(String(nextValue))
        if (String(nextValue) !== currentValue) {
          onValueChange && onValueChange(nextValue)
        }
      }
    }
    return (
      <div
        className={componentClassNames(
          `${prefixCls}-wrap`,
          { type, size },
          className
        )}
        style={style}
      >
        {type === 'default' && !hideStepBtn ? (
          <>
            <div
              className={classNames('pui-minus-wrap', {
                [`${prefixCls}-icon-default`]:
                  Number(currentValue) - Number(step) >= min && !disabled,
                [`${prefixCls}-icon-disabled`]:
                  Number(currentValue) - Number(step) < min || disabled,
                [`${prefixCls}-icon-transparent`]: disabled
              })}
              onClick={reduce}
            >
              <IconMinus />
            </div>
            <div
              className={classNames('pui-plus-wrap', {
                [`${prefixCls}-icon-default`]:
                  Number(currentValue) + Number(step) <= max && !disabled,
                [`${prefixCls}-icon-disabled`]:
                  Number(currentValue) + Number(step) > max || disabled,
                [`${prefixCls}-icon-transparent`]: disabled
              })}
              onClick={add}
            >
              <IconPlus />
            </div>
          </>
        ) : !hideStepBtn ? (
          <div
            className={classNames('pui-arrow-wrap', {
              'pui-disabled': disabled
            })}
          >
            <IconArrowHeadUp
              onClick={add}
              className={classNames({
                [`${prefixCls}-icon-default`]:
                  Number(currentValue) + Number(step) <= max && !disabled,
                [`${prefixCls}-icon-disabled`]:
                  Number(currentValue) + Number(step) > max || disabled
              })}
            />
            <IconArrowHeadDown
              onClick={reduce}
              className={classNames({
                [`${prefixCls}-icon-default`]:
                  Number(currentValue) - Number(step) >= min && !disabled,
                [`${prefixCls}-icon-disabled`]:
                  Number(currentValue) - Number(step) < min || disabled
              })}
            />
          </div>
        ) : null}
        {suffixIcon && (
          <span
            className={classNames('pui-input-number-suffix-icon', {
              'pui-input-number-suffix-icon-position': !hideStepBtn
            })}
            style={suffixStyle}
          >
            {' '}
            {isReactElement(SuffixComponent) ? (
              SuffixComponent
            ) : (
              <SuffixComponent />
            )}
          </span>
        )}
        <Input
          className={classNames({
            [prefixCls]: type === 'default',
            [`${prefixCls}-arrow`]: type === 'arrow'
          })}
          disabled={disabled}
          onValueChange={handleValueChange}
          value={currentValue as string}
          onBlur={handleBlur}
          size={size}
        />
      </div>
    )
  }
)

;(InputNumber as any).displayName = 'InputNumber'

export { InputNumber }
