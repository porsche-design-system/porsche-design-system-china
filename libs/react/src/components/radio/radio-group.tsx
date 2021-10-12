import React, { useEffect, useMemo, useState } from 'react'
import { componentClassNames, overrideChildren } from '../../shared/class-util'
import { FormErrorText } from '../error-text/error-text'
import { FormItem } from '../form/form-item'
import { Radio, RadioProps } from './radio'
import './radio-group.scss'

interface Option<T> {
  text: string
  value: T
}

export interface RadioGroupProps<T> {
  // 组件属性 //

  /* 默认值 */
  defaultValue?: T

  /* 值 */
  value?: T

  /** 是否禁用 */
  disabled?: boolean

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string

  /* 错误 */
  error?: FormErrorText

  /* 点击事件 */
  onValueChange?: (val: T) => void

  /* 选项 */
  options?: string | string[] | Option<T>[]

  /* 允许取消选项 */
  allowCancelSelection?: boolean

  /** 子组件 */
  children?: React.ReactNode
}

const RadioGroup = FormItem(
  <T,>({
    disabled = false,
    children,
    onValueChange,
    value,
    defaultValue,
    allowCancelSelection = false,
    error,
    options
  }: RadioGroupProps<T>) => {
    const [radioValue, setRadioValue] = useState<T | ''>(
      value || defaultValue || ''
    )

    useEffect(() => {
      if (value !== undefined) {
        setRadioValue(value)
      }
    }, [value])

    let radioOptions: Option<T>[] = []
    if (typeof options === 'string') {
      const optionParts = options.split(',')
      optionParts.forEach(optionPart => {
        const optionTextValue = optionPart.split(':')
        radioOptions.push({
          text: optionTextValue[0],
          value: (optionTextValue.length > 1
            ? optionTextValue[1]
            : optionTextValue[0]) as any
        })
      })
    } else if (Array.isArray(options)) {
      if (options.length > 0 && typeof options[0] === 'object') {
        radioOptions = options as Option<T>[]
      } else {
        ;(options as string[]).forEach(option => {
          radioOptions.push({ text: option, value: option as any })
        })
      }
    }

    const optionRadios = radioOptions.map((option, inx) => (
      <Radio key={'$Radio-' + inx} {...option} />
    ))

    const newChildren = useMemo(() => {
      const allValues: (string | number)[] = []
      const newChildren = overrideChildren(
        [...optionRadios, ...React.Children.toArray(children)],
        (elementName, props) => {
          if (elementName === 'Radio') {
            const radioProp: RadioProps<T> = props
            const radioOnChange = radioProp.onChange
            const radioOnCheckedChange = radioProp.onCheckedChange
            radioProp.value = (radioProp.value || radioProp.text) as any
            radioProp.value && allValues.push(radioProp.value as any)
            radioProp.checked = radioProp.value === (value || radioValue)
            radioProp.onChange = evt => {
              radioOnChange && radioOnChange(evt)
              radioOnCheckedChange && radioOnCheckedChange(evt.target.checked)
              if (evt.target.value) {
                if (evt.target.checked) {
                  setRadioValue(props.value)
                }
              }
              onValueChange && onValueChange(props.value)
            }
            if (allowCancelSelection) {
              ;(radioProp as any).onClick = (evt: any) => {
                if (allowCancelSelection && evt.target.value === radioValue) {
                  setRadioValue('')
                  onValueChange && onValueChange('' as any)
                }
              }
            }
          }
          return props
        }
      )

      if (allValues.indexOf(radioValue as any) < 0) {
        setRadioValue('')
      }

      return newChildren
    }, [onValueChange, value, radioValue])

    useEffect(() => {
      if (radioValue !== value) {
        onValueChange && onValueChange(radioValue as any)
      }
    }, [])

    return (
      <div
        className={componentClassNames('pui-radio-group', {
          disabled: disabled + '',
          error: error ? error.show + '' : 'false'
        })}
      >
        {newChildren}
      </div>
    )
  }
)

;(RadioGroup as any).displayName = 'RadioGroup'
export { RadioGroup }
