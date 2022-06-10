import React, { ReactNode } from 'react'
import { useDefaultSize } from '../../shared/hooks'
import { FormItemProps, FormItem } from '../form/form-item'

export interface CustomPickerProps<T> {
  /** 表单绑定 */
  name?: string

  /** 值 */
  value?: T

  /** 值改变会调 */
  onValueChange?: (value: T) => void

  /** 大小 */
  size?: 'medium' | 'small'

  /** 输入框内内容渲染 */
  inputRender?: (
    value?: T,
    onValueChange?: (value: T) => void,
    width?: string
  ) => ReactNode

  /** 弹出内容渲染 */
  popRender: (
    value?: T,
    onValueChange?: (value: T) => void,
    width?: string
  ) => ReactNode
}

// 必须骗下storybook，让它能显示属性列表
// eslint-disable-next-line import/no-mutable-exports
let CustomPicker = <T,>(props: CustomPickerProps<T> & FormItemProps) => {
  return <div>{JSON.stringify(props)}</div>
}

CustomPicker = FormItem(
  <T,>({
    size,
    value,
    onValueChange,
    inputRender,
    popRender
  }: CustomPickerProps<T>) => {
    const [defaultSize] = useDefaultSize()
    size = size || defaultSize

    return (
      <div>
        <div>{popRender(value, onValueChange)}</div>
      </div>
    )
  }
)
;(CustomPicker as any).displayName = 'CustomPicker'
export { CustomPicker }
