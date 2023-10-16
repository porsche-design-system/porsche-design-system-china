import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useTranslation } from 'react-i18next'
import {
  IconArrowDoubleLeft,
  IconArrowHeadLeft,
  IconArrowHeadRight,
  IconCalendar,
  IconArrowDoubleRight,
  IconErrorFilled
} from '@pui-cn/icons'
import classNames from 'classnames'
import {
  addDays,
  dateToStr,
  getMonthCalDates,
  getYearCalMonths,
  inDateRange,
  inDisableDates,
  sameDate,
  strToDate
} from '../../shared/date-utils'
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
import { PUI } from '../pui/pui'
import './lang'

export interface DatePickerProps {
  /** 设置选择器类型 默认 date */
  pickerType?: 'date' | 'month'

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

  /** 值改变事件  (如果是因为value传参错误或不在设置范围内会触发自动修正，第二个传参会为true)  */
  onValueChange?: (value: string, isDataCorrection?: boolean) => void

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

  /** 禁用日期 */
  disableDates?: string[] | Date[] | ((data: Date) => boolean)
}

const DatePicker = FormItem((props: DatePickerProps) => {
  const {
    className,
    disabled = false,
    value,
    defaultValue,
    onValueChange,
    error,
    placeholder,
    open,
    defaultOpen,
    showClearButton = false,
    keepClearButton = false,
    onMenuVisibleChange,
    filterMode = false,
    disableDates,
    label = '',
    pickerType = 'year'
  } = props
  let size = props.size
  let range = props.range
  const validateFormItem = (props as any).validateFormItem

  const newKeepClearButton = keepClearButton || supportTouch()
  const { t } = useTranslation('DatePicker')

  const [defaultSize] = useDefaultSize()
  size = size || defaultSize

  const isDatePicker = pickerType === 'year'
  const isMonthPicker = pickerType === 'month'
  const initDate = strToDate(value || defaultValue || '', isMonthPicker)
  const [calenderOpen, setCalendarOpen, puiPopupWrap] = usePopShowState(() => {
    if (open === undefined) {
      setMenuOpen(undefined)
    }
  })
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

  const monthDisplayText = t('Months').split(' ')

  // 改变了范围，并且选定的日期不在范围内
  useEffect(() => {
    if (pickedDate) {
      if (
        (!inDateRange(pickedDate, range as [Date, Date], true, isMonthPicker) ||
          inDisableDates(pickedDate, disableDates, isMonthPicker)) &&
        !disabled
      ) {
        setPickedDate(null)
        setDisplayValue('')
        onValueChange && onValueChange('', true)
      }
    }
  }, [disableDates, range, isMonthPicker])

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
    const [, countStr] = range.match(/^In(\d+)Days$/) || []
    const count = parseInt(countStr, 10)
    if (count > 0) {
      const date = new Date()
      const endDate = addDays(date, count - 1)
      range = [
        dateToStr(date, isMonthPicker),
        dateToStr(endDate, isMonthPicker)
      ]
    } else {
      range = range.split(',') as [string, string]
    }
  }

  if (Array.isArray(range) && range.length === 2) {
    if (typeof range[0] === 'string') {
      const startDate = strToDate(range[0], isMonthPicker)
      if (!startDate) {
        console.error('Format Incorrect', range[0])
      }
      range[0] = startDate
    }

    if (typeof range[1] === 'string') {
      const endDate = strToDate(range[1], isMonthPicker)
      if (!endDate) {
        console.error('Format Incorrect', range[1])
      }
      range[1] = endDate
    }
  } else {
    range = undefined
  }

  const updateCalendar = () => {
    let calDates: Date[] = []
    if (isDatePicker) {
      calDates = getMonthCalDates(displayDate.current)
    }
    if (isMonthPicker) {
      calDates = getYearCalMonths(displayDate.current)
    }
    setCalendarDates(calDates)
  }

  useEffect(() => {
    if (defaultValue === undefined) {
      const date = strToDate(value || '', isMonthPicker)
      setPickedDate(date)
      setDisplayValue(date ? dateToStr(date, isMonthPicker) : '')
    }
  }, [value])

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
          displayValue || (
            <span className="pui-select-input-placeholder">{placeholder}</span>
          )
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
            validateFormItem && validateFormItem('')
          }}
        />
      )}
      {(menuOpen !== undefined ? menuOpen : calenderOpen) &&
        !disabled &&
        ReactDOM.createPortal(
          <div
            style={{ position: 'absolute', ...menuPos }}
            className={classNames(`pui-date-picker-size-${size}`, {
              'pui-month-picker': isMonthPicker
            })}
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
                      displayDate.current.setDate(1)
                      displayDate.current.setFullYear(
                        displayDate.current.getFullYear() - 1
                      )
                      updateCalendar()
                    }}
                  />
                  {isDatePicker && (
                    <IconArrowHeadLeft
                      onClick={() => {
                        displayDate.current.setDate(1)
                        displayDate.current.setMonth(
                          displayDate.current.getMonth() - 1
                        )
                        updateCalendar()
                      }}
                    />
                  )}
                </div>
                {PUI.getLang() === 'en' &&
                  (isDatePicker
                    ? monthDisplayText[displayDate.current.getMonth()]
                    : '') + displayDate.current.getFullYear()}
                {PUI.getLang() === 'zh-CN' &&
                  displayDate.current.getFullYear() +
                    '年' +
                    (isDatePicker
                      ? monthDisplayText[displayDate.current.getMonth()]
                      : '')}
                <div className="pui-date-picker-calendar-head-right">
                  {isDatePicker && (
                    <IconArrowHeadRight
                      onClick={() => {
                        displayDate.current.setDate(1)
                        displayDate.current.setMonth(
                          displayDate.current.getMonth() + 1
                        )
                        updateCalendar()
                      }}
                    />
                  )}
                  <IconArrowDoubleRight
                    onClick={() => {
                      displayDate.current.setDate(1)
                      displayDate.current.setFullYear(
                        displayDate.current.getFullYear() + 1
                      )
                      updateCalendar()
                    }}
                  />
                </div>
              </div>
              {isDatePicker && (
                <div className="pui-date-picker-calendar-weekdays">
                  {t('Weekdays')
                    .split(' ')
                    .map(weekday => (
                      <div
                        key={weekday}
                        className="pui-date-picker-calendar-weekday"
                      >
                        {weekday}
                      </div>
                    ))}
                </div>
              )}
              <div className="pui-date-picker-calendar-dates">
                {calendarDates.map(date => {
                  return (
                    <div
                      key={date.getTime() + ''}
                      className={
                        'pui-date-picker-calendar-block ' +
                        (sameDate(date, currentDate, isMonthPicker)
                          ? 'pui-date-picker-calendar-today'
                          : '') +
                        ' ' +
                        (!inDateRange(
                          date,
                          range as [Date, Date],
                          true,
                          isMonthPicker
                        ) || inDisableDates(date, disableDates, isMonthPicker)
                          ? 'pui-date-picker-calendar-unavailable'
                          : '') +
                        ' ' +
                        (isDatePicker &&
                        date.getMonth() !== displayDate.current.getMonth()
                          ? 'pui-date-picker-calendar-not-same-month'
                          : '') +
                        ' ' +
                        (pickedDate && sameDate(date, pickedDate, isMonthPicker)
                          ? 'pui-date-picker-calendar-picked'
                          : '')
                      }
                      onClick={() => {
                        if (
                          !inDateRange(
                            date,
                            range as [Date, Date],
                            true,
                            isMonthPicker
                          ) ||
                          inDisableDates(date, disableDates, isMonthPicker)
                        ) {
                          return
                        }
                        if (value === undefined) {
                          setPickedDate(new Date(date))
                          setDisplayValue(dateToStr(date, isMonthPicker))
                        }
                        setCalendarOpen(false)
                        if (open === undefined) {
                          setMenuOpen(undefined)
                        }
                        onValueChange &&
                          onValueChange(dateToStr(date, isMonthPicker))
                      }}
                    >
                      {isMonthPicker
                        ? monthDisplayText[date.getMonth()]
                        : date.getDate()}
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
}, 'DatePicker')

export { DatePicker }
