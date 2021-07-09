import { IconCheck, IconMinus } from '@pui/icons'
import React, { ChangeEventHandler, CSSProperties, useMemo } from 'react'
import { componentClassNames } from '../../shared/class-util'
import './checkbox.scss'

export interface CheckBoxProps {
  /** 类名 */
  className?: string

  /** 子组件 */
  children?: React.ReactNode

  /** 样式 */
  style?: CSSProperties

  /* 显示文字 */
  text?: string

  /* 选项值 */
  value?: string

  /* 是否禁用 */
  disabled?: boolean

  /* 大小 */
  size?: 'default' | 'small'

  /* 点击事件 */
  onChange?: ChangeEventHandler<HTMLInputElement>

  /* 值改变事件 */
  onCheckedChange?: (checked: boolean) => void

  /* 是否选定 */
  checked?: boolean

  /* 是否默认选定 */
  defaultChecked?: boolean

  /* 是否是部分选定 */
  partChecked?: boolean
}

/**
 * Primary UI component for user interaction
 */

let idCounter = 0
const generateId = () => {
  idCounter++
  return 'checkbox-' + idCounter
}
const CheckBox = ({
  className,
  text = '',
  value,
  disabled = false,
  size = 'default',
  checked,
  defaultChecked,
  partChecked,
  onChange,
  onCheckedChange
}: CheckBoxProps) => {
  const id = useMemo(() => generateId(), [])

  return (
    <label
      htmlFor={id}
      className={componentClassNames(
        'pui-checkbox',
        { disabled: disabled + '', size },
        className
      )}
    >
      <input
        id={id}
        type="checkbox"
        onChange={evt => {
          onChange && onChange(evt)
          onCheckedChange && onCheckedChange(evt.target.checked)
        }}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        value={value}
      />
      {!partChecked && (
        <span className="pui-checkbox-checkmark">
          <IconCheck style={{ color: 'white' }} />
        </span>
      )}
      <span
        className="pui-checkbox-part-checkmark"
        style={{ opacity: partChecked ? 1 : 0 }}
      >
        <IconMinus style={{ color: 'white' }} />
      </span>
      {text}
    </label>
  )
}
;(CheckBox as any).displayName = 'CheckBox'
export { CheckBox }
