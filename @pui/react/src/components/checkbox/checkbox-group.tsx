import React, { useEffect, useMemo, useRef } from 'react'
import { componentClassNames, overrideChildren } from '../../shared/class-util'
import { FormErrorText } from '../error-text/error-text'
import { FormItem } from '../form/form-item'
import { CheckBox, CheckBoxProps } from './checkbox'
import './checkbox-group.scss'

interface SelectOption<T> {
  text: string
  value: T
}

export interface CheckBoxGroupProps<T> {
  /* 默认值 */
  defaultValue?: T[]

  /* 值 */
  value?: T[]

  /** 是否禁用 */
  disabled?: boolean

  /* 表单绑定key，需要配合&lt;Form&gt;使用 */
  name?: string

  /* 值改变事件 (如果是因为value传参错误或不在options里会触发自动修正，第二个传参会为true) */
  onValueChange?: (values: T[], isDataCorrection?: boolean) => void

  /** 子组件 */
  children?: React.ReactNode

  /** 选项 */
  options?: string | string[] | SelectOption<T>[]

  /** 错误 */
  error?: FormErrorText

  /** 选项间距 */
  itemsDistance?: { x?: string; y?: string }
}

const CheckBoxGroup = FormItem(
  <T,>({
    disabled = false,
    children,
    onValueChange,
    value,
    defaultValue,
    error,
    options,
    itemsDistance
  }: CheckBoxGroupProps<T>) => {
    const checkBoxValues = useRef<T[]>(value ?? defaultValue ?? [])

    let checkBoxOptions: SelectOption<T>[] = []
    if (typeof options === 'string') {
      const optionParts = options.split(',')
      optionParts.forEach(optionPart => {
        const optionTextValue = optionPart.split(':')
        checkBoxOptions.push({
          text: optionTextValue[0],
          value: (optionTextValue.length > 1
            ? optionTextValue[1]
            : optionTextValue[0]) as any
        })
      })
    } else if (Array.isArray(options)) {
      if (options.length > 0 && typeof options[0] === 'object') {
        checkBoxOptions = options as SelectOption<T>[]
      } else {
        ;(options as string[]).forEach(option => {
          checkBoxOptions.push({ text: option, value: option as any })
        })
      }
    }

    const optionsNodes = checkBoxOptions.map((option, inx) => (
      <CheckBox
        key={'$CheckBox-' + inx}
        {...option}
        style={{
          marginRight: itemsDistance?.x,
          marginBottom: itemsDistance?.y
        }}
      />
    ))

    const newChildren = useMemo(() => {
      checkBoxValues.current = value ?? []
      const allValues: T[] = []
      const newChildren = overrideChildren(
        [...optionsNodes, ...React.Children.toArray(children)],
        (elementName, props) => {
          if (elementName === 'CheckBox') {
            const checkboxProp: CheckBoxProps<T> = props
            const checkBoxOnChange = checkboxProp.onChange
            const checkBoxOnCheckedChange = checkboxProp.onCheckedChange
            checkboxProp.value = (checkboxProp.value ??
              checkboxProp.text) as any
            checkboxProp.value && allValues.push(checkboxProp.value)
            if (value !== undefined) {
              checkboxProp.checked =
                checkboxProp.value !== undefined &&
                checkBoxValues.current.indexOf(checkboxProp.value) >= 0
            }
            checkboxProp.onChange = evt => {
              checkBoxOnChange && checkBoxOnChange(evt)
              checkBoxOnCheckedChange &&
                checkBoxOnCheckedChange(evt.target.checked)
              if (evt.target.value) {
                if (evt.target.checked) {
                  checkBoxValues.current.push(props.value)
                } else {
                  const inx = checkBoxValues.current.indexOf(props.value)
                  if (inx >= 0) {
                    checkBoxValues.current.splice(inx, 1)
                  }
                }
              }
              onValueChange && onValueChange([...checkBoxValues.current], false)
            }
          }
          return props
        }
      )

      const filteredValues: T[] = []
      checkBoxValues.current.forEach(v => {
        if (allValues.indexOf(v) >= 0) {
          filteredValues.push(v)
        }
      })
      checkBoxValues.current = filteredValues
      return newChildren
    }, [onValueChange, value, options])

    useEffect(() => {
      if (value === undefined) {
        return
      }
      if (
        !Array.isArray(value) ||
        (Array.isArray(value) &&
          JSON.stringify(checkBoxValues.current.sort()) !==
            JSON.stringify(value.sort()))
      ) {
        onValueChange && onValueChange(checkBoxValues.current, true)
      }
    }, [])

    return (
      <div
        className={componentClassNames('pui-checkbox-group', {
          disabled: disabled + '',
          error: error ? error.show + '' : 'false'
        })}
      >
        {newChildren}
      </div>
    )
  }
)

;(CheckBoxGroup as any).displayName = 'CheckBoxGroup'
export { CheckBoxGroup }
