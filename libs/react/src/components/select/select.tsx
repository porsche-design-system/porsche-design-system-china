import React, {
  CSSProperties,
  Fragment,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import {
  IconArrowHeadDown,
  IconCheck,
  IconErrorFilled,
  IconSearch
} from '@pui/icons'

import { FormErrorText } from '../error-text/error-text'
import { componentClassNames } from '../../shared/class-util'
import { FormItem, FormItemProps } from '../form/form-item'
import { containText, getNodeText } from '../../shared/string-util'
import {
  useDefaultSize,
  usePopShowState,
  useElementPos
} from '../../shared/hooks'

import './select.scss'
import { FormItemLabelProps } from '../form/form'
import { supportTouch } from '../../shared/device'

export type SelectOption<T> = {
  text: ReactNode
  value: T
}

export type GroupSelectOption<T> = {
  group: string
  options: SelectOption<T>[]
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

  /** 值 */
  value?: T

  /** 默认值 */
  defaultValue?: T

  /** 占位符 */
  placeholder?: string

  /** 显示过滤输入框 */
  filterInput?: boolean

  /** 选项 */
  options?: T | T[] | SelectOption<T>[] | GroupSelectOption<T>[]

  /** 选项style样式 */
  optionsStyle?: CSSProperties

  /** 错误 */
  error?: FormErrorText

  /** 值改变事件 */
  onValueChange?: (value: T) => void

  /** 控制菜单打开 */
  defaultOpen?: boolean

  /** 控制菜单打开 */
  open?: boolean

  /** 显示清除按钮 */
  showClearButton?: boolean

  /** 清除按钮是否一直显示 触屏设备默认为true */
  keepClearButton?: boolean

  /** 过滤器选项模式 */
  filterMode?: boolean

  /** 最大宽度 */
  maxWidth?: string

  /** 菜单显示状态改变 */
  onMenuVisibleChange?: (visible: boolean) => void

  /** 标签 */
  label?: string | FormItemLabelProps
}

// 必须骗下storybook，让它能显示属性列表
// eslint-disable-next-line import/no-mutable-exports
let Select = <T,>(props: SelectProps<T> & FormItemProps) => {
  return <div>{props}</div>
}

Select = FormItem(
  <T,>({
    className,
    disabled = false,
    value,
    defaultValue,
    error,
    size,
    options = [],
    filterInput,
    onValueChange,
    placeholder,
    defaultOpen,
    showClearButton = false,
    keepClearButton = false,
    open,
    filterMode = false,
    maxWidth,
    optionsStyle,
    label,
    onMenuVisibleChange
  }: SelectProps<T>) => {
    const selectState = useState(defaultValue || null)
    let selectValue = selectState[0]
    const setSelectValue = selectState[1]
    const [showOptionList, setShowOptionList, puiPopupWrap] = usePopShowState(
      () => {
        if (open === undefined) {
          setMenuOpen(undefined)
        }
      }
    )
    const isControlledByValue = useRef(value !== undefined)
    const [filterValue, setFilterValue] = useState('')
    const [filterWord, setFilterWord] = useState('')
    const [defaultSize] = useDefaultSize()
    const isFirstLoad = useRef(true)
    const rootElementRef = useRef<any>(null)
    const isDestroyed = useRef(false)
    const [menuPos, updatePos] = useElementPos(
      rootElementRef,
      0,
      parseInt(`${optionsStyle?.minWidth}`, 10)
    )
    const [menuOpen, setMenuOpen] = useState(
      open !== undefined ? open : defaultOpen
    )
    const isComposing = useRef(false)

    size = size || defaultSize

    if (value) {
      selectValue = value
      isControlledByValue.current = true
    }

    let selectOptions: SelectOption<T>[] = []
    const groupNames: { index: number; name: string }[] = []

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
        if ((options[0] as GroupSelectOption<T>).group !== undefined) {
          let pos = 0
          ;(options as GroupSelectOption<T>[]).forEach(o => {
            if (o.options.length) {
              groupNames.push({
                index: pos,
                name: (o as GroupSelectOption<T>).group
              })
              selectOptions.push(...(o as GroupSelectOption<T>).options)
              pos += o.options.length
            }
          })
        } else {
          selectOptions = options as SelectOption<T>[]
        }
      } else {
        ;((options as unknown) as string[]).forEach(option => {
          selectOptions.push({ text: option + '', value: option as any })
        })
      }
    }

    const labelText = typeof label === 'object' ? label.text : label

    let displayText: ReactNode = ''
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
          'pui-select',
          {
            size,
            disabled: disabled + '',
            active: showOptionList + '',
            error: error ? error.show + '' : 'false',
            'keep-clear-button':
              (showClearButton &&
                newKeepClearButton &&
                !disabled &&
                !!displayText) + ''
          },
          className
        )}
      >
        <button
          className={classNames(
            'pui-select-input',
            { 'pui-select-input-placeholder': !displayText && !filterMode },
            {
              'pui-select-input-with-clear-button':
                showClearButton && selectValue && !disabled
            },
            { 'pui-select-input-highlight': displayText && filterMode }
          )}
          type="button"
          onClick={evt => {
            evt.stopPropagation()
            updatePos()
            if (!showOptionList) {
              setFilterValue('')
              setFilterWord('')
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
            displayText ? (
              <>
                <span className="pui-select-input-placeholder">
                  {labelText || ''} :
                </span>{' '}
                {displayText}
              </>
            ) : (
              labelText
            )
          ) : (
            displayText || placeholder
          )}
        </button>
        {showClearButton && selectValue && !disabled && (
          <IconErrorFilled
            className="pui-select-clear-icon"
            onClick={evt => {
              setSelectValue(null as any)
              onValueChange && onValueChange(null as any)
              evt.stopPropagation()
              evt.preventDefault()
              setShowOptionList(false)
            }}
          />
        )}
        <IconArrowHeadDown className="pui-select-icon" />
        {(menuOpen !== undefined ? menuOpen : showOptionList) &&
          !disabled &&
          ReactDOM.createPortal(
            <div
              style={{
                position: 'absolute',
                ...optionsStyle,
                ...menuPos
              }}
              className={`pui-select-size-${size}`}
            >
              <div
                className="pui-select-list"
                onClick={evt => {
                  evt.stopPropagation()
                }}
              >
                {filterInput && (
                  <>
                    <IconSearch className="pui-select-search-icon" />
                    <input
                      value={filterValue}
                      placeholder="请输入选项"
                      onCompositionStart={() => {
                        isComposing.current = true
                      }}
                      onCompositionEnd={(evt: any) => {
                        isComposing.current = false
                        setFilterWord(evt.target.value)
                        setFilterValue(evt.target.value)
                      }}
                      onChange={(evt: any) => {
                        if (!isComposing.current) {
                          setFilterWord(evt.target.value)
                        }
                        setFilterValue(evt.target.value)
                      }}
                      className="pui-select-filter"
                    />
                  </>
                )}
                <div className="pui-select-option-wrap">
                  {selectOptions.map((option, inx) => {
                    const gn = groupNames.find(gn => gn.index === inx)
                    return (
                      <Fragment key={option.value + ' ' + inx + filterWord}>
                        {gn && (
                          <div className="pui-select-group-name">{gn.name}</div>
                        )}
                        {containText(getNodeText(option.text), filterWord) && (
                          <div
                            className={classNames('pui-select-option', {
                              'pui-select-option-selected':
                                option.value === selectValue
                            })}
                            onClick={() => {
                              if (open === undefined) {
                                setMenuOpen(undefined)
                              }
                              setShowOptionList(false)
                              setSelectValue(option.value)
                              onValueChange && onValueChange(option.value)
                            }}
                          >
                            {option.text}
                            {option.value === selectValue && <IconCheck />}
                          </div>
                        )}
                      </Fragment>
                    )
                  })}
                  {selectOptions.filter(item => {
                    if (filterValue) {
                      return containText(getNodeText(item.text), filterWord)
                    }
                    return true
                  }).length === 0 && (
                    <div className="pui-select-no-data">暂无数据</div>
                  )}
                </div>
              </div>
            </div>,
            puiPopupWrap
          )}
      </div>
    )
  }
)
;(Select as any).displayName = 'Select'
export { Select }
