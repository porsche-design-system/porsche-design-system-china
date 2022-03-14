import React, { CSSProperties, FocusEventHandler, useState } from 'react'
import classNames from 'classnames'
import { IconSearch } from '@pui/icons'

import { Input } from '../input/input'
import { componentClassNames } from '../../shared/class-util'
import { useDefaultSize } from '../../shared/hooks'

import './search.scss'

export interface SearchProps {
  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 占位符 */
  placeholder?: string

  /** 是否禁用 */
  disabled?: boolean

  /** 值 */
  value?: string

  /** 默认值 */
  defaultValue?: string

  /** 宽度 */
  width?: string

  /** 右间距 */
  marginRight?: string

  /** 左间距 */
  marginLeft?: string

  /** 显示清除按钮 */
  showClearButton?: boolean

  /** 显示清除按钮 */
  showSearchButtonBg?: boolean

  /** 最大长度 */
  maxLength?: number

  /** 大小 */
  size?: 'medium' | 'small'

  /** 文字改变事件 */
  onValueChange?: (value: string) => void

  /** 点击搜索按钮 */
  onSearch?: (value: string) => void

  /** 失去焦点回调 */
  onBlur?: FocusEventHandler<HTMLInputElement>

  /** 表单属性 */
  name?: string
}

const Search = ({
  className,
  style,
  placeholder,
  maxLength,
  disabled = false,
  value,
  defaultValue,
  width,
  size,
  onValueChange,
  showClearButton,
  showSearchButtonBg = false,
  marginLeft,
  marginRight,
  onBlur,
  onSearch,
  name
}: SearchProps) => {
  const [searchValue, setSearchValue] = useState(value || defaultValue || '')
  const [defaultSize] = useDefaultSize()

  size = size || defaultSize

  return (
    <div
      className={componentClassNames(
        'pui-search',
        {
          'show-clear-button': (showClearButton && !!searchValue) + '',
          'show-search-button-bg': showSearchButtonBg + '',
          disabled: disabled + '',
          size
        },
        className
      )}
      style={{ width, marginLeft, marginRight, ...style }}
      onKeyUp={(evt: any) => {
        if (evt.key === 'Enter' && !disabled) {
          evt.preventDefault()
          onSearch && onSearch(evt.target.value)
        }
      }}
    >
      <Input
        value={value}
        defaultValue={defaultValue}
        hideMaxLengthText
        showClearButton={showClearButton}
        maxLength={maxLength}
        onBlur={onBlur}
        name={name}
        style={{ marginBottom: 0 }}
        onValueChange={val => {
          setSearchValue(val)
          onValueChange && onValueChange(val)
        }}
        disabled={disabled}
        placeholder={placeholder}
      />

      <IconSearch
        className="pui-search-button"
        onClick={evt => {
          evt.preventDefault()
          !disabled && onSearch && onSearch(searchValue)
        }}
      />
    </div>
  )
}

;(Search as any).displayName = 'Search'
export { Search }
