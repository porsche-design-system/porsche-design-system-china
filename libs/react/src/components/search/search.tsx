import React, { CSSProperties, useState } from 'react'
import { IconSearch } from '@pui/icons'

import { Input } from '../input/input'
import { componentClassNames } from '../../shared/class-util'
import { useDefaultSize } from '../../shared/hooks'

import './search.scss'

export interface SearchProps {
  /* 类名 */
  className?: string

  /* 样式 */
  style?: CSSProperties

  /* 占位符 */
  placeholder?: string

  /* 是否禁用 */
  disabled?: boolean

  /* 值 */
  value?: string

  /* 默认值 */
  defaultValue?: string

  /* 宽度 */
  width?: string

  /* 右间距 */
  marginRight?: string

  /* 左间距 */
  marginLeft?: string

  /* 显示清除按钮 */
  showClearButton?: boolean

  /* 最大长度 */
  maxLength?: number

  /* 大小 */
  size?: 'medium' | 'small'

  /* 文字改变事件 */
  onValueChange?: (value: string) => void

  /* 点击搜索按钮 */
  onSearch?: (value: string) => void
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
  marginLeft,
  marginRight,
  onSearch
}: SearchProps) => {
  const [searchValue, setSearchValue] = useState(value || defaultValue || '')
  const [defaultSize] = useDefaultSize()
  size = size || defaultSize

  return (
    <div
      className={componentClassNames(
        'pui-search',
        { 'show-clear-button': showClearButton + '', size },
        className
      )}
      style={{ width, marginLeft, marginRight, ...style }}
    >
      <Input
        value={value}
        defaultValue={defaultValue}
        showClearButton={showClearButton}
        maxLength={maxLength}
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
          onSearch && onSearch(searchValue)
        }}
      />
    </div>
  )
}

export { Search }
