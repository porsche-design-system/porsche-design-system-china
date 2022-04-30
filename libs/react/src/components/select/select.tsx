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
import { LoadingIcon } from '../loading/loading-icon'

export type SelectOption<T> = {
  text: ReactNode
  value: T
  disabled?: boolean
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
  options?: SelectOption<T>[] | GroupSelectOption<T>[] | T[] | T

  /** 选项style样式 */
  optionsStyle?: CSSProperties

  /** 错误 */
  error?: FormErrorText

  /** 值改变事件 */
  onValueChange?: (value: T, option: object | null) => void

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
  label?: string | FormItemLabelProps | ReactNode

  /** 过滤器输入框占位符 */
  filterInputPlaceholder?: string

  /** 底部元素 */
  bottomElement?: ReactNode

  /** 显示加载中 */
  loading?: boolean

  /** 定义option列表展示字段，默认为text，且仅限option属性值为简单类型如字符串或数字 */
  display?: Array<string> | string

  /** option列表展示字段分隔符，仅在display为数组的时候才有效，默认为冒号: */
  separator?: string

  /** option列表展示与选中后显示结果是否一致，默认一致，如不一致则option只显示text */
  isSameDisplay?: boolean
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
    label = '',
    onMenuVisibleChange,
    filterInputPlaceholder,
    bottomElement,
    loading = false,
    display = 'text',
    separator = ':',
    isSameDisplay = true
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
    size = size || defaultSize
    const rootElementRef = useRef<any>(null)
    const popMenuRef = useRef<any>(null)
    const isDestroyed = useRef(false)

    // 选项框默认最小宽度
    const minWidth = parseInt(`${optionsStyle?.minWidth}`, 10)
    const [menuPos, updatePos] = useElementPos(
      rootElementRef,
      popMenuRef,
      minWidth
    )
    const [menuOpen, setMenuOpen] = useState(
      open !== undefined ? open : defaultOpen
    )
    const isComposing = useRef(false)

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
            ; (options as GroupSelectOption<T>[]).forEach(o => {
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
        ; (options as unknown as string[]).forEach(option => {
          selectOptions.push({ text: option + '', value: option as any })
        })
      }
    }

    const labelText =
      (label as any).text !== undefined ? (label as any).text : label

    const resolveDisplay = (displayText: ReactNode, display: Array<string> | string, option: object) => {
      if (Array.isArray(display)) {
        display.forEach((item, index) => {
          if (['string', 'number', 'boolean'].includes(typeof option[item])) {
            displayText = displayText + option[item] + (display.length === index + 1 ? '' : separator);
          } else {
            console.error(`option.${item}不符合规范`);
          }
        })
      } else if (typeof display === 'string') {
        displayText = option[display]
      }
      return displayText;
    }

    let displayText: ReactNode = ''
    if (isControlledByValue.current) {
      selectOptions.forEach(option => {
        if (option.value === value) {
          displayText = resolveDisplay(displayText, display, option)
        }
      })
    } else {
      selectOptions.forEach(option => {
        if (option.value === selectValue) {
          displayText = resolveDisplay(displayText, display, option)
        }
      })
    }

    useEffect(() => {
      if (defaultOpen !== undefined) {
        setShowOptionList(defaultOpen)
      }
    }, [])

    useEffect(() => {
      if (menuOpen !== undefined) {
        onMenuVisibleChange && onMenuVisibleChange(menuOpen && !disabled)
      }
    }, [menuOpen])

    useEffect(() => {
      if (!showOptionList) {
        onMenuVisibleChange && onMenuVisibleChange(showOptionList && !disabled)
      }
    }, [showOptionList])

    useEffect(() => {
      if (open !== undefined) {
        setMenuOpen(open)
        setTimeout(() => {
          setShowOptionList(open)
        }, 10)
      }
    }, [open])

    useEffect(() => {
      updatePos()
    }, [displayText])

    const newKeepClearButton = keepClearButton || supportTouch()

    let valueMatchCounter = 0

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
            active: (open !== undefined ? open : showOptionList) + '',
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
            if (open !== undefined) {
              setMenuOpen(!showOptionList)
            }
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
              onValueChange && onValueChange(null as any, null)
              evt.stopPropagation()
              evt.preventDefault()
              setShowOptionList(false)
            }}
          />
        )}
        {loading ? (
          <span className="pui-select-loading">
            <LoadingIcon size={size === 'medium' ? 30 : 25} />
          </span>
        ) : (
          <IconArrowHeadDown className="pui-select-icon" />
        )}
        {(open !== undefined ? open : showOptionList) &&
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
                ref={popMenuElem => {
                  if (popMenuElem) {
                    if (popMenuRef.current !== popMenuElem) {
                      popMenuRef.current = popMenuElem
                      setTimeout(() => {
                        updatePos()
                      }, 10)
                    }
                  }
                }}
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
                      placeholder={filterInputPlaceholder}
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
                      style={{
                        minWidth: filterMode
                          ? size === 'medium'
                            ? 248
                            : 176
                          : ''
                      }}
                    />
                  </>
                )}
                <div className="pui-select-option-wrap">
                  {selectOptions.map((option, inx) => {
                    const gn = groupNames.find(gn => gn.index === inx)
                    if (option.value === selectValue) {
                      valueMatchCounter++
                    }
                    return (
                      <Fragment key={option.value + ' ' + inx + filterWord}>
                        {gn && (
                          <div className="pui-select-group-name">{gn.name}</div>
                        )}
                        {containText(getNodeText(option.text), filterWord) && (
                          <div
                            className={classNames('pui-select-option', {
                              'pui-select-option-selected':
                                option.value === selectValue &&
                                valueMatchCounter === 1,
                              'pui-select-option-disabled': option.disabled
                            })}
                            onClick={() => {
                              if (option.disabled === true) {
                                return
                              }
                              if (open !== undefined) {
                                setMenuOpen(false)
                              }
                              setShowOptionList(false)
                              setSelectValue(option.value)
                              onValueChange && onValueChange(option.value, option)
                            }}
                          >
                            {isSameDisplay ? resolveDisplay('', display, option) : option.text}
                            {option.value === selectValue &&
                              valueMatchCounter === 1 && <IconCheck />}
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
                {bottomElement}
              </div>
            </div>,
            puiPopupWrap
          )}
      </div>
    )
  }
)
  ; (Select as any).displayName = 'Select'
export { Select }
