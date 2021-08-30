import React, { ChangeEventHandler, CSSProperties, useMemo } from 'react'
import { useDefaultSize } from '../../shared/hooks'
import { componentClassNames } from '../../shared/class-util'
import './radio.scss'

export interface RadioProps {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /* 显示文字 */
  text?: string

  /* 分组名 */
  name?: string

  /* 值 */
  value?: string

  /** 是否禁用 */
  disabled?: boolean

  /* 是否选定 */
  checked?: boolean

  /* 默认选定 */
  defaultChecked?: boolean

  /* 大小 */
  size?: 'medium' | 'small'

  /* 选定事件 */
  onCheckedChange?: (checked: boolean) => void

  /* 点击事件 */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

/**
 * Primary UI component for user interaction
 */
let idCounter = 0
const generateId = () => {
  idCounter++
  return 'radio-' + idCounter
}
const Radio = (props: RadioProps) => {
  const id = useMemo(() => generateId(), [])
  const {
    className,
    style,
    disabled,
    value,
    name = '',
    text,
    onChange,
    onCheckedChange,
    checked,
    defaultChecked
  } = props

  const [defaultSize] = useDefaultSize()
  const size = props.size || defaultSize

  return (
    <label
      htmlFor={id}
      className={componentClassNames(
        'pui-radio',
        { disabled: disabled + '', size },
        className
      )}
      style={style}
    >
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        onClick={(props as any).onClick}
        onChange={evt => {
          onChange && onChange(evt)
          onCheckedChange && onCheckedChange(evt.target.checked)
        }}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
      />
      <span className="pui-radio-checkmark" />
      {text}
    </label>
  )
}

Radio.displayName = 'Radio'
export { Radio }
