import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  IconArrowDoubleLeft,
  IconArrowHeadLeft,
  IconArrowHeadRight,
  IconCalendar,
  IconArrowDoubleRight,
  IconErrorFilled
} from '@pui/icons'
import classNames from 'classnames'
import { inDateRange } from '../../shared/date-utils'
import { supportTouch } from '../../shared/device'
import { FormItem } from '../form/form-item'
import { FormErrorText } from '../error-text/error-text'
import {
  useDefaultSize,
  usePopShowState,
  useElementPos
} from '../../shared/hooks'
import { componentClassNames } from '../../shared/class-util'
import './date-picker.scss'
import { FormItemLabelProps } from '../form/form'

export interface DatePickerProps {
  /** 类名 */
  className?: string

  /** 是否禁用 */
  disabled?: boolean

  /** 大小 */
  size?: 'medium' | 'small'

  /** 默认值 */
  defaultValue?: string

  /** 值 */
  value?: string

  /** 占位符 */
  placeholder?: string

  /** 值改变事件 */
  onValueChange?: (value: string) => void

  /** 可选范围 "InNext{num}Days" "2021-03-12,2021-04-12" ['2021-03-12','2021-04-12'] */
  range?: string | [string | null, string | null] | [Date | null, Date | null]

  /** 提示错误 */
  error?: FormErrorText

  /** 控制菜单打开 */
  defaultOpen?: boolean

  /** 控制菜单打开 */
  open?: boolean

  /** 菜单显示状态改变 */
  onMenuVisibleChange?: (visible: boolean) => void

  /** 过滤器模式 */
  filterMode?: boolean

  /** 标签 */
  label?: string | FormItemLabelProps | ReactNode

  /** 显示清除按钮 */
  showClearButton?: boolean

  /** 一直显示清除按钮 */
  keepClearButton?: boolean
}

const DatePicker = FormItem(
  ({
    className,
    disabled = false,
    value,
    defaultValue,
    onValueChange,
    error,
    size,
    range,
    placeholder,
    open,
    defaultOpen,
    showClearButton = false,
    keepClearButton = false,
    onMenuVisibleChange,
    filterMode = false,
    label = ''
  }: DatePickerProps) => {
    const strToDate = (dateStr: string) => {
      const datePart = dateStr.split('-')
      if (datePart.length === 3) {
        if (
          /^\d{4}$/.test(datePart[0]) &&
          /^\d{2}$/.test(datePart[1]) &&
          /^\d{2}$/.test(datePart[2])
        ) {
          const date = new Date(
            parseInt(datePart[0]),
            parseInt(datePart[1]) - 1,
            parseInt(datePart[2])
          )
          return date
        }
      }
      if (dateStr !== '') {
        console.error('"' + dateStr + '" 不是正确的日期')
      }
      return null
    }

    const newKeepClearButton = keepClearButton || supportTouch()

    const [defaultSize] = useDefaultSize()
    size = size || defaultSize

    const initDate = strToDate(value || defaultValue || '')
    const [calenderOpen, setCalendarOpen, puiPopupWrap] = usePopShowState(
      () => {
        if (open === undefined) {
          setMenuOpen(undefined)
        }
      }
    )
    const isFirstLoad = useRef(true)
    const rootElementRef = useRef<any>(null)
    const isDestroyed = useRef(false)
    const popMenuRef = useRef<any>(null)
    const [menuPos, updatePos] = useElementPos(rootElementRef, popMenuRef)
    const [menuOpen, setMenuOpen] = useState(
      open !== undefined ? open : defaultOpen
    )
    // 当前日期
    const [currentDate, setCurrentDate] = useState(new Date())
    // 选中的Date
    const [pickedDate, setPickedDate] = useState<Date | null>(initDate)
    const [displayValue, setDisplayValue] = useState(
      initDate ? value || defaultValue || '' : ''
    )
    const [calendarDates, setCalendarDates] = useState<Date[]>([])
    // 日历上显示的Date
    const displayDate = useRef<Date>(initDate || new Date())

    const [, setForceUpdate] = useState(0)

    if (typeof range === 'object') {
      if (typeof range[0] === 'object' && range[0] !== null) {
        range[0] = new Date(range[0] as Date)
      }
      if (typeof range[1] === 'object' && range[1] !== null) {
        range[1] = new Date(range[1] as Date)
      }
      range = [...range] as any
    }

    if (typeof range === 'string') {
      if (/In(\d)Days/.test(range)) {
        const days = RegExp.$1
        const endDate = new Date()
        endDate.setDate(endDate.getDate() + parseInt(days) - 1)
        range = [new Date(), endDate]
      } else {
        range = range.split(',') as [string, string]
      }
    }

    if (Array.isArray(range) && range.length === 2) {
      if (typeof range[0] === 'string') {
        const startDate = strToDate(range[0])
        if (!startDate) {
          console.error('Format Incorrect', range[0])
        }
        range[0] = startDate
      }

      if (typeof range[1] === 'string') {
        const endDate = strToDate(range[1])
        if (!endDate) {
          console.error('Format Incorrect', range[1])
        }
        range[1] = endDate
      }
    } else {
      range = undefined
    }

    const updateCalendar = () => {
      const calenderFirstDate = new Date(displayDate.current)
      calenderFirstDate.setDate(1)
      while (calenderFirstDate.getDay() !== 0) {
        calenderFirstDate.setDate(calenderFirstDate.getDate() - 1)
      }

      const calDates: Date[] = []
      const calDate = calenderFirstDate

      while (true) {
        calDates.push(new Date(calDate))
        calDate.setDate(calDate.getDate() + 1)
        const nextDay = new Date(calDate)
        nextDay.setDate(nextDay.getDate() + 1)
        if (
          calDate.getDay() === 6 &&
          nextDay.getMonth() !== displayDate.current.getMonth()
        ) {
          calDates.push(new Date(calDate))
          break
        }
      }
      setCalendarDates(calDates)
    }

    useEffect(() => {
      if (defaultValue === undefined) {
        const date = strToDate(value || '')
        setPickedDate(date)
        setDisplayValue(date ? dateToStr(date) : '')
      }
    }, [value])

    const dateToStr = (date: Date) => {
      const addZero = (n: number) => {
        if (n < 10) {
          return '0' + n
        }
        return n
      }
      return (
        date.getFullYear() +
        '-' +
        addZero(date.getMonth() + 1) +
        '-' +
        addZero(date.getDate())
      )
    }

    const sameDate = (d1: Date, d2: Date) => {
      return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
      )
    }

    const labelText =
      (label as any).text !== undefined ? (label as any).text : label

    useEffect(() => {
      if (!isFirstLoad.current) {
        onMenuVisibleChange &&
          onMenuVisibleChange(
            (menuOpen !== undefined ? menuOpen : calenderOpen) && !disabled
          )
      }
      isFirstLoad.current = false
    }, [(menuOpen !== undefined ? menuOpen : calenderOpen) && !disabled])

    useEffect(() => {
      if (open !== undefined) {
        setMenuOpen(open)
      }
    }, [open])

    useEffect(() => {
      setCurrentDate(new Date())
      displayDate.current = pickedDate
        ? new Date(pickedDate)
        : range
        ? new Date((range as [Date, Date])[0])
        : new Date()
      updateCalendar()
    }, [])

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
          'pui-date-picker',
          {
            disabled: disabled + '',
            error: error ? error.show + '' : 'false',
            size,
            'show-clear-button': (showClearButton && !!displayValue) + '',
            'keep-clear-button':
              (showClearButton && newKeepClearButton && !!displayValue) + '',
            'filter-mode': filterMode + ''
          },
          className
        )}
      >
        <button
          type="button"
          className={classNames('pui-date-picker-box', {
            'pui-date-picker-box-active': calenderOpen,
            'pui-date-picker-box-with-clear-button':
              showClearButton && displayValue && !disabled,
            'pui-date-picker-box-highlight': displayValue && filterMode
          })}
          disabled={disabled}
          onClick={evt => {
            evt.stopPropagation()
            setCalendarOpen(!calenderOpen)
            setCurrentDate(new Date())

            let initDate = new Date()
            // 如果选了结束日期，从结束日期开始
            if (pickedDate) {
              initDate = new Date(pickedDate)
            }
            // 如果没有选结束日期，有限定范围，从限定范围开始开始
            else if (range && range[0]) {
              initDate = range[0] as Date
            }
            // 如果没有选结束日期，有限定范围，从限定范围结束开始
            else if (range && range[1]) {
              initDate = range[1] as Date
            }

            displayDate.current = initDate

            updateCalendar()
            setTimeout(() => {
              setForceUpdate(Math.random())
            }, 10)
          }}
        >
          {filterMode ? (
            displayValue ? (
              <>
                <span className="pui-select-input-placeholder">
                  {labelText || ''} :
                </span>{' '}
                {displayValue}
              </>
            ) : (
              labelText || ''
            )
          ) : (
            displayValue || placeholder
          )}
        </button>
        <IconCalendar className="pui-date-picker-icon" />
        {displayValue && showClearButton && !disabled && (
          <IconErrorFilled
            className="pui-date-picker-clear-icon"
            onClick={() => {
              setPickedDate(null)
              setDisplayValue('')
              onValueChange && onValueChange('')
            }}
          />
        )}
        {(menuOpen !== undefined ? menuOpen : calenderOpen) &&
          !disabled &&
          ReactDOM.createPortal(
            <div
              style={{ position: 'absolute', ...menuPos }}
              className={`pui-date-picker-size-${size}`}
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
                className="pui-date-picker-calendar"
                onClick={evt => {
                  evt.stopPropagation()
                }}
              >
                <div className="pui-date-picker-calendar-head">
                  <div className="pui-date-picker-calendar-head-left">
                    <IconArrowDoubleLeft
                      onClick={() => {
                        displayDate.current.setFullYear(
                          displayDate.current.getFullYear() - 1
                        )
                        updateCalendar()
                      }}
                    />
                    <IconArrowHeadLeft
                      onClick={() => {
                        displayDate.current.setMonth(
                          displayDate.current.getMonth() - 1
                        )
                        updateCalendar()
                      }}
                    />
                  </div>
                  {displayDate.current.getFullYear()}年
                  {displayDate.current.getMonth() + 1}月
                  <div className="pui-date-picker-calendar-head-right">
                    <IconArrowHeadRight
                      onClick={() => {
                        displayDate.current.setMonth(
                          displayDate.current.getMonth() + 1
                        )
                        updateCalendar()
                      }}
                    />
                    <IconArrowDoubleRight
                      onClick={() => {
                        displayDate.current.setFullYear(
                          displayDate.current.getFullYear() + 1
                        )
                        updateCalendar()
                      }}
                    />
                  </div>
                </div>
                <div className="pui-date-picker-calendar-weekdays">
                  {'日 一 二 三 四 五 六'.split(' ').map(weekday => (
                    <div
                      key={weekday}
                      className="pui-date-picker-calendar-weekday"
                    >
                      {weekday}
                    </div>
                  ))}
                </div>
                <div className="pui-date-picker-calendar-dates">
                  {calendarDates.map(date => {
                    return (
                      <div
                        key={date.getTime() + ''}
                        className={
                          'pui-date-picker-calendar-block ' +
                          (sameDate(date, currentDate)
                            ? 'pui-date-picker-calendar-today'
                            : '') +
                          ' ' +
                          (!inDateRange(date, range as [Date, Date], true)
                            ? 'pui-date-picker-calendar-unavailable'
                            : '') +
                          ' ' +
                          (date.getMonth() !== displayDate.current.getMonth()
                            ? 'pui-date-picker-calendar-not-same-month'
                            : '') +
                          ' ' +
                          (pickedDate && sameDate(date, pickedDate)
                            ? 'pui-date-picker-calendar-picked'
                            : '')
                        }
                        onClick={() => {
                          if (!inDateRange(date, range as [Date, Date], true)) {
                            return
                          }
                          if (value === undefined) {
                            setPickedDate(new Date(date))
                            setDisplayValue(dateToStr(date))
                          }
                          setCalendarOpen(false)
                          if (open === undefined) {
                            setMenuOpen(undefined)
                          }
                          onValueChange && onValueChange(dateToStr(date))
                        }}
                      >
                        {date.getDate()}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>,
            puiPopupWrap
          )}
      </div>
    )
  }
)

;(DatePicker as any).displayName = 'DatePicker'
export { DatePicker }
