import React, {
  CSSProperties,
  FocusEventHandler,
  useContext,
  useRef,
  useState
} from 'react'
import { RuleItem, ValidateError } from 'async-validator'
import { IconSearch } from '@pui/icons'

import { Input } from '../input/input'
import { componentClassNames } from '../../shared/class-util'
import { useDefaultSize } from '../../shared/hooks'
import { validate } from '../../shared/validation-rules'
import { ErrorText } from '../error-text/error-text'

import './search.scss'
import { FormContext, overrideProps } from '../form/form'

export interface SearchProps {
  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 校验 */
  rules?: RuleItem[] | RuleItem

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

  /** 清除时搜索 */
  searchOnClear?: boolean

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

const Search = (searchProps: SearchProps) => {
  const formContext = useContext(FormContext)
  if (formContext) {
    searchProps = overrideProps('Search', { ...searchProps }, formContext)
  }
  const {
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
    searchOnClear = false,
    showSearchButtonBg = false,
    marginLeft,
    marginRight,
    rules,
    onBlur,
    onSearch,
    name
  } = searchProps

  const [searchValue, setSearchValue] = useState(value || defaultValue || '')
  const [defaultSize] = useDefaultSize()
  const [errList, setErrList] = useState<ValidateError[]>([])
  const isValidated = useRef(false)

  const newSize = size || defaultSize

  const validateInput = (validateValue: any) => {
    if (rules) {
      let errList
      validate(
        { 'search value': rules },
        { 'search value': validateValue },
        errorList => {
          setErrList(errorList || [])
          errList = errorList
        }
      )
      if (errList !== null) {
        return true
      }
    }
    return false
  }

  return (
    <div
      className={componentClassNames(
        'pui-search',
        {
          'show-search-button-bg': showSearchButtonBg + '',
          disabled: disabled + '',
          size: newSize
        },
        className
      )}
      style={{ width, marginLeft, marginRight, ...style }}
      onKeyUp={(evt: any) => {
        if (evt.key === 'Enter' && !disabled) {
          evt.preventDefault()
          isValidated.current = true
          if (validateInput(evt.target.value)) {
            return
          }
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
          if (isValidated.current) {
            validateInput(val)
          }
          setSearchValue(val)
          onValueChange && onValueChange(val)
        }}
        disabled={disabled}
        placeholder={placeholder}
        suffixIcon={
          <>
            <IconSearch
              className="pui-search-button"
              onClick={evt => {
                evt.preventDefault()
                isValidated.current = true
                if (validateInput(searchValue)) {
                  return
                }
                !disabled && onSearch && onSearch(searchValue)
              }}
            />
          </>
        }
        onClear={
          searchOnClear && onSearch
            ? () => {
                onSearch('')
              }
            : null
        }
      />
      <ErrorText show={errList.length > 0} message={errList[0]?.message} />
    </div>
  )
}

export { Search }
