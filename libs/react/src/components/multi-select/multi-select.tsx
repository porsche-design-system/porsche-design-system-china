import ReactDOM from 'react-dom'
import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { IconArrowHeadDown, IconErrorFilled } from '@pui/icons'

import { FormErrorText } from '../error-text/error-text'
import { componentClassNames } from '../../shared/class-util'
import { FormItem, FormItemProps } from '../form/form-item'
import {
  useDefaultSize,
  useElementPos,
  usePopShowState
} from '../../shared/hooks'
import { CheckBox } from '../checkbox/checkbox'

import './multi-select.scss'
import { FormItemLabelProps } from '../form/form'
import { supportTouch } from '../../shared/device'

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

  /* 选项style样式 */
  optionsStyle?: CSSProperties

  /* 错误 */
  error?: FormErrorText

  /* 值改变事件 */
  onValueChange?: (value: T[]) => void

  /* 控制菜单打开 */
  defaultOpen?: boolean

  /* 控制菜单打开 */
  open?: boolean

  /* 显示清除按钮 */
  showClearButton?: boolean

  /* 清除按钮是否一直显示 触屏设备默认为true */
  keepClearButton?: boolean

  /* 过滤器选项模式 */
  filterMode?: boolean

  /* 最大宽度 */
  maxWidth?: string

  /* 菜单显示状态改变 */
  onMenuVisibleChange?: (visible: boolean) => void
}

// 必须骗下storybook，让它能显示属性列表
// eslint-disable-next-line import/no-mutable-exports
let MultiSelect = <T,>(props: MultiSelectProps<T> & FormItemProps) => {
  return <div>{props}</div>
}

MultiSelect = FormItem(
  <T,>({
    className,
    disabled = false,
    value,
    defaultValue,
    error,
    options = [],
    placeholder,
    defaultOpen,
    showClearButton = false,
    keepClearButton = false,
    open,
    filterMode = false,
    maxWidth,
    optionsStyle,
    onMenuVisibleChange,
    filterInput,
    size,
    onValueChange
  }: MultiSelectProps<T>) => {
    const selectState = useState<T[]>(defaultValue || [])
    let selectValue = selectState[0]
    const setSelectValue = selectState[1]
    const [showOptionList, setShowOptionList, puiPopupWrap] = usePopShowState(
      () => {
        if (open === undefined) {
          setMenuOpen(undefined)
        }
      }
    )
    const [filterValue, setFilterValue] = useState('')
    const hasValue = useRef(value !== undefined)
    const [defaultSize] = useDefaultSize()
    const isFirstLoad = useRef(true)
    const rootElementRef = useRef<any>(null)
    const [menuPos, updatePos] = useElementPos(rootElementRef)
    const [menuOpen, setMenuOpen] = useState(
      open !== undefined ? open : defaultOpen
    )
    const isDestroyed = useRef(false)
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

    useEffect(() => {
      if (!isFirstLoad.current) {
        onMenuVisibleChange &&
          onMenuVisibleChange(
            (menuOpen !== undefined ? menuOpen : showOptionList) && !disabled
          )
      }
      isFirstLoad.current = false
    }, [(menuOpen !== undefined ? menuOpen : showOptionList) && !disabled])

    useEffect(() => {
      if (open !== undefined) {
        setMenuOpen(open)
      }
    }, [open])

    const displayText = displayTextArr.join(', ')
    const allChecked =
      displayTextArr.length === selectOptions.length &&
      displayTextArr.length > 0
    const partChecked =
      displayTextArr.length < selectOptions.length && displayTextArr.length > 0

    const newKeepClearButton = keepClearButton || supportTouch()

    return (
      <div
        ref={rootElement => {
          isDestroyed.current = rootElement === null
          if (rootElement) {
            rootElementRef.current = rootElement
          }
          if (rootElement && rootElementRef.current === null) {
            updatePos()
            setTimeout(() => {
              if (!isDestroyed.current) {
                updatePos()
              }
            }, 1000)
          }
        }}
        className={componentClassNames(
          'pui-multi-select',
          {
            size,

            disabled: disabled + '',
            active: showOptionList + '',
            error: error ? error.show + '' : 'false',
            'keep-clear-button':
              (showClearButton && newKeepClearButton && !!displayText) + ''
          },
          className
        )}
      >
        <button
          className={classNames(
            'pui-multi-select-input',
            {
              'pui-multi-select-input-placeholder': !displayText && !filterMode
            },
            {
              'pui-multi-select-input-with-clear-button':
                showClearButton && !!selectValue.length
            },
            { 'pui-multi-select-input-highlight': displayText && filterMode }
          )}
          type="button"
          onClick={evt => {
            evt.stopPropagation()
            updatePos()
            if (!showOptionList) {
              setFilterValue('')
            }
            setShowOptionList(!showOptionList)
          }}
          disabled={disabled}
          style={{
            width: filterMode ? 'auto' : '',
            maxWidth: maxWidth + '',
            overflow: maxWidth ? 'hidden' : ''
          }}
        >
          {filterMode ? (
            <>
              <span className="pui-multi-select-input-placeholder">
                {placeholder}
              </span>
              {displayText ? ': ' + displayText : ''}
            </>
          ) : (
            displayText || placeholder || ''
          )}
        </button>
        {showClearButton && selectValue.length > 0 && (
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
        {(menuOpen !== undefined ? menuOpen : showOptionList) &&
          !disabled &&
          ReactDOM.createPortal(
            <div
              style={{
                position: 'absolute',
                ...menuPos,
                ...optionsStyle
              }}
              className={`pui-multi-select-size-${size}`}
            >
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
                            selectValue.splice(
                              selectValue.indexOf(option.value),
                              1
                            )
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
            </div>,
            puiPopupWrap
          )}
      </div>
    )
  }
)
;(MultiSelect as any).displayName = 'MultiSelect'
export { MultiSelect }
