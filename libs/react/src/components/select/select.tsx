import React, { CSSProperties, useRef, useState } from 'react'
import { IconArrowHeadDown, IconCheck } from '@pui/icons'

import { FormErrorText } from '../error-text/error-text'
import { componentClassNames } from '../../shared/class-util'
import { FormItem } from '../form/form-item'
import { useDefaultSize, usePopShowState } from '../../shared/hooks'

import './select.scss'

interface SelectOption<T> {
  text: string
  value: T
}

export interface SelectProps<T> {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 是否禁用 */
  disabled?: boolean

  /** 大小 */
  size?: 'medium' | 'small'

  /* 值 */
  value?: T

  /* 默认值 */
  defaultValue?: T

  /* 占位符 */
  placeholder?: string

  /* 显示过滤输入框 */
  filterInput?: boolean

  /* 选项 */
  options?: string | string[] | SelectOption<T>[]

  /* 错误 */
  error?: FormErrorText

  /* 值改变事件 */
  onValueChange?: (value: T) => void
}

const Select = FormItem(
  <T,>({
    className,
    disabled,
    value,
    defaultValue,
    error,
    size,
    options = [],
    filterInput,
    onValueChange,
    placeholder
  }: SelectProps<T>) => {
    const selectState = useState(defaultValue || [])
    let selectValue = selectState[0]
    const setSelectValue = selectState[1]
    const [showOptionList, setShowOptionList] = usePopShowState()
    const isControlledByValue = useRef(value !== undefined)
    const [filterValue, setFilterValue] = useState('')
    const [defaultSize] = useDefaultSize()
    size = size || defaultSize

    if (value) {
      selectValue = value
      isControlledByValue.current = true
    }

    let selectOptions: SelectOption<T>[] = []
    if (typeof options === 'string') {
      const optionParts = options.split(',')
      optionParts.forEach(optionPart => {
        const optionTextValue = optionPart.split(':')
        selectOptions.push({
          text: optionTextValue[0],
          value: (optionTextValue.length > 1
            ? optionTextValue[1]
            : optionTextValue[0]) as any
        })
      })
    } else if (Array.isArray(options)) {
      if (options.length > 0 && typeof options[0] === 'object') {
        selectOptions = options as SelectOption<T>[]
      } else {
        ;(options as string[]).forEach(option => {
          selectOptions.push({ text: option, value: option as any })
        })
      }
    }

    let displayText = ''
    if (isControlledByValue.current) {
      selectOptions.forEach(option => {
        if (option.value === value) {
          displayText = option.text
        }
      })
    } else {
      selectOptions.forEach(option => {
        if (option.value === selectValue) {
          displayText = option.text
        }
      })
    }

    return (
      <div
        className={componentClassNames(
          'pui-select',
          {
            size,
            disabled: disabled + '',
            active: showOptionList + '',
            error: error ? error.show + '' : 'false'
          },
          className
        )}
      >
        <input
          className="pui-select-input"
          readOnly
          value={displayText}
          placeholder={placeholder}
          onClick={evt => {
            evt.stopPropagation()
            setShowOptionList(!showOptionList)
          }}
          disabled={disabled}
        />
        <IconArrowHeadDown className="pui-select-icon" />
        {showOptionList && (
          <div
            className="pui-select-list"
            onClick={evt => {
              evt.stopPropagation()
            }}
          >
            {filterInput && (
              <input
                value={filterValue}
                placeholder="请输入选项"
                onChange={evt => {
                  setFilterValue(evt.target.value)
                }}
                className="pui-select-filter"
              />
            )}
            <div className="pui-select-option-wrap">
              {selectOptions
                .filter(item => {
                  if (filterValue) {
                    return (
                      item.text
                        .toLowerCase()
                        .indexOf(filterValue.toLowerCase()) >= 0
                    )
                  }
                  return true
                })
                .map((option, inx) => (
                  <div
                    key={option.value + ' ' + inx}
                    className={
                      'pui-select-option ' +
                      (option.value === selectValue
                        ? 'pui-select-option-selected'
                        : '')
                    }
                    onClick={() => {
                      setShowOptionList(false)
                      setSelectValue(option.value)
                      onValueChange && onValueChange(option.value)
                    }}
                  >
                    {option.text}
                    {option.value === selectValue && <IconCheck />}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    )
  }
)

;(Select as any).displayName = 'Select'
export { Select }
