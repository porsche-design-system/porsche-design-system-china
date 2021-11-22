import React, { CSSProperties, useRef, useState } from 'react'
import { IconArrowHeadDown, IconErrorFilled } from '@pui/icons'

import { FormErrorText } from '../error-text/error-text'
import { componentClassNames } from '../../shared/class-util'
import { FormItem, FormItemProps } from '../form/form-item'
import { useDefaultSize, usePopShowState } from '../../shared/hooks'
import { CheckBox } from '../checkbox/checkbox'

import './multi-select.scss'

interface MultiSelectOption<T> {
  text: string
  value: T
}

export interface MultiSelectProps<T> {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 是否禁用 */
  disabled?: boolean

  /* 值 */
  value?: T[]

  /** 大小 */
  size?: 'medium' | 'small'

  /* 默认值 */
  defaultValue?: T[]

  /* 占位符 */
  placeholder?: string

  /* 显示过滤输入框 */
  filterInput?: boolean

  /* 选项 */
  options?: string | string[] | MultiSelectOption<T>[]

  /* 错误 */
  error?: FormErrorText

  /* 值改变事件 */
  onValueChange?: (value: T[]) => void
}

// 必须骗下storybook，让它能显示属性列表
// eslint-disable-next-line import/no-mutable-exports
let MultiSelect = <T,>(props: MultiSelectProps<T> & FormItemProps) => {
  return <div>{props}</div>
}

MultiSelect = FormItem(
  <T,>({
    className,
    disabled,
    value,
    defaultValue,
    error,
    options = [],
    filterInput,
    size,
    onValueChange,
    placeholder
  }: MultiSelectProps<T>) => {
    const selectState = useState<T[]>(defaultValue || [])
    let selectValue = selectState[0]
    const setSelectValue = selectState[1]
    const [showOptionList, setShowOptionList] = usePopShowState()
    const [filterValue, setFilterValue] = useState('')
    const hasValue = useRef(value !== undefined)
    const [defaultSize] = useDefaultSize()
    size = size || defaultSize

    if (value) {
      selectValue = value
      hasValue.current = true
    } else if (hasValue.current) {
      hasValue.current = false
      setSelectValue([])
    }

    let selectOptions: MultiSelectOption<T>[] = []
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
        selectOptions = options as MultiSelectOption<T>[]
      } else {
        ;(options as string[]).forEach(option => {
          selectOptions.push({ text: option, value: option as any })
        })
      }
    }

    const displayTextArr: string[] = []
    selectOptions.forEach(option => {
      if (selectValue.includes(option.value)) {
        displayTextArr.push(option.text)
      }
    })

    const displayText = displayTextArr.join(', ')
    const allChecked =
      displayTextArr.length === selectOptions.length &&
      displayTextArr.length > 0
    const partChecked =
      displayTextArr.length < selectOptions.length && displayTextArr.length > 0

    return (
      <div
        className={componentClassNames(
          'pui-multi-select',
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
          className="pui-multi-select-input"
          readOnly
          value={displayText}
          placeholder={placeholder}
          onClick={evt => {
            evt.stopPropagation()
            setShowOptionList(!showOptionList)
          }}
          disabled={disabled}
        />
        {selectValue.length > 0 && (
          <IconErrorFilled
            className="pui-multi-select-clear-icon"
            onClick={evt => {
              setSelectValue([])
              onValueChange && onValueChange([])
              evt.stopPropagation()
              evt.preventDefault()
              setShowOptionList(false)
            }}
          />
        )}

        <IconArrowHeadDown className="pui-multi-select-arrow-icon" />
        {showOptionList && (
          <div
            className="pui-multi-select-list"
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
                className="pui-multi-select-filter"
              />
            )}

            <div
              className="pui-multi-select-option "
              onClick={() => {
                const allValues: T[] = []
                if (!allChecked) {
                  selectOptions.forEach(item => {
                    allValues.push(item.value)
                  })
                }
                setSelectValue(allValues)
                onValueChange && onValueChange(allValues)
              }}
            >
              <CheckBox
                className="pui-multi-select-pick"
                size="small"
                checked={allChecked}
                partChecked={partChecked}
              />
              全选
            </div>
            <div className="pui-multi-select-option-wrap">
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
                      'pui-multi-select-option ' +
                      (selectValue.includes(option.value)
                        ? 'pui-multi-select-option-selected'
                        : '')
                    }
                    onClick={() => {
                      if (selectValue.includes(option.value)) {
                        selectValue.splice(selectValue.indexOf(option.value), 1)
                      } else {
                        selectValue.push(option.value)
                      }
                      setSelectValue([...selectValue])
                      onValueChange && onValueChange([...selectValue])
                    }}
                  >
                    <CheckBox
                      className="pui-multi-select-pick"
                      size="small"
                      checked={selectValue.includes(option.value)}
                    />
                    {option.text}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    )
  }
)
;(MultiSelect as any).displayName = 'MultiSelect'
export { MultiSelect }
