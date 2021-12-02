import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  IconArrowDoubleLeft,
  IconArrowHeadLeft,
  IconArrowHeadRight,
  IconCalendar,
  IconArrowDoubleRight,
  IconErrorFilled
} from '@pui/icons'

import {
  addMonth,
  dateToStr,
  getMonthCalDates,
  inDateRange,
  sameDate,
  strToDate
} from '../../shared/date-utils'
import { FormItem } from '../form/form-item'
import { FormErrorText } from '../error-text/error-text'
import {
  useDefaultSize,
  usePopShowState,
  useElementPos
} from '../../shared/hooks'
import { componentClassNames } from '../../shared/class-util'
import './date-range-picker.scss'

export interface DateRangePickerProps {
  /** 类名 */
  className?: string

  /** 是否禁用 */
  disabled?: boolean

  /* 默认值 */
  defaultValue?: string[]

  /* 开始日期表单捆绑值 */
  nameStartDate?: string

  /* 开始日期表单捆绑值 */
  nameEndDate?: string

  /* 值 */
  value?: string[]

  /* 大小 */
  size?: 'medium' | 'small'

  /* 占位符开始日期 */
  placeholderStartDate?: string

  /* 占位符结束日期 */
  placeholderEndDate?: string

  /* 值改变事件 */
  onValueChange?: (value: string[]) => void

  /* 可选范围 "InNext{num}Days" "2021-03-12,2021-04-12" ['2021-03-12','2021-04-12'] */
  range?: string | string[] | Date[]

  /* 提示错误 */
  error?: FormErrorText

  /* 控制菜单打开 */
  defaultOpen?: boolean

  /* 控制菜单打开 */
  open?: boolean

  /* 菜单显示状态改变 */
  onMenuVisibleChange?: (visible: boolean) => void
}

const DateRangePicker = FormItem(
  ({
    className,
    disabled = false,
    value,
    defaultValue,
    onValueChange,
    size,
    error,
    range,
    placeholderStartDate,
    placeholderEndDate,
    open,
    defaultOpen,
    onMenuVisibleChange
  }: DateRangePickerProps) => {
    const [currentInputPlace, setCurrentInputPlace] = useState(0)
    const initDates: [Date | null, Date | null] = [
      strToDate((value && value[0]) || (defaultValue && defaultValue[0]) || ''),
      strToDate((value && value[1]) || (defaultValue && defaultValue[1]) || '')
    ]
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
    const [menuPos, updatePos] = useElementPos(rootElementRef)
    const [menuOpen, setMenuOpen] = useState(
      open !== undefined ? open : defaultOpen
    )

    // 当前日期
    const [currentDate, setCurrentDate] = useState(new Date())
    // 选中的Date
    const [pickedDates, setPickedDates] =
      useState<[Date | null, Date | null]>(initDates)
    const [displayValues, setDisplayValues] = useState(
      initDates ? value || defaultValue || ['', ''] : ['', '']
    )
    const [calendarDates, setCalendarDates] = useState<[Date[], Date[]]>([
      [],
      []
    ])
    const [defaultSize] = useDefaultSize()
    size = size || defaultSize

    // 预选
    const [prePickedDates, setPrePickedDates] = useState<
      [Date | null, Date | null]
    >([null, null])

    // 预选显示
    const [preDisplayValues, setPreDisplayValues] = useState<[string, string]>([
      '',
      ''
    ])

    // 日历上标题上显示的Date
    const displayDate = useRef(new Date())

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
      if (typeof range[0] === 'string' && typeof range[1] === 'string') {
        const startDate = strToDate(range[0])
        const endDate = strToDate(range[1])
        if (!startDate) {
          console.error('Format Incorrect', range[0])
        }
        if (!endDate) {
          console.error('Format Incorrect', range[1])
        }
        if (startDate && endDate) {
          range = [startDate, endDate]
        }
      } else {
        range = range as [Date, Date]
      }
    } else {
      range = undefined
    }

    const updateCalendar = () => {
      setCalendarDates([
        getMonthCalDates(displayDate.current),
        getMonthCalDates(addMonth(displayDate.current))
      ])
    }

    useEffect(() => {
      if (defaultValue === undefined) {
        const dates: [Date | null, Date | null] = [
          strToDate((value && value[0]) || ''),
          strToDate((value && value[1]) || '')
        ]
        setPickedDates(dates)
        setDisplayValues([
          dates[0] ? dateToStr(dates[0]) : '',
          dates[1] ? dateToStr(dates[1]) : ''
        ])
      }
    }, [value])

    useEffect(() => {
      if (!calenderOpen) {
        setPrePickedDates([null, null])
        if (!pickedDates[0] || !pickedDates[1]) {
          setPickedDates([null, null])
          setDisplayValues(['', ''])
        }
      }
    }, [calenderOpen])

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
      displayDate.current = pickedDates[0]
        ? new Date(pickedDates[0])
        : range
        ? new Date((range as [Date, Date])[0])
        : new Date()
      updateCalendar()
    }, [])

    const calendarView = (calInx: number) => {
      const dDate =
        calInx === 0 ? displayDate.current : addMonth(displayDate.current)

      return (
        <div
          className={
            'pui-date-range-picker-calendar pui-date-range-picker-calendar-' +
            calInx
          }
          onClick={evt => {
            evt.stopPropagation()
          }}
        >
          <div className="pui-date-range-picker-calendar-head">
            <div className="pui-date-range-picker-calendar-head-left">
              {calInx === 0 && (
                <>
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
                </>
              )}
            </div>
            {dDate.getFullYear()}年{dDate.getMonth() + 1}月
            <div className="pui-date-range-picker-calendar-head-right">
              {calInx === 1 && (
                <>
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
                </>
              )}
            </div>
          </div>
          <div className="pui-date-range-picker-calendar-weekdays">
            {'日 一 二 三 四 五 六'.split(' ').map(weekday => (
              <div
                key={weekday}
                className="pui-date-range-picker-calendar-weekday"
              >
                {weekday}
              </div>
            ))}
          </div>
          <div className="pui-date-range-picker-calendar-dates">
            {calendarDates[calInx].map(date => {
              return (
                <div
                  key={date.getTime() + ''}
                  className={
                    'pui-date-range-picker-calendar-block ' +
                    (sameDate(date, currentDate)
                      ? 'pui-date-range-picker-calendar-today'
                      : '') +
                    ' ' +
                    (!inDateRange(date, range as [Date, Date])
                      ? 'pui-date-range-picker-calendar-unavailable'
                      : '') +
                    ' ' +
                    (sameDate(date, pickedDates[0]) ||
                    sameDate(date, pickedDates[1])
                      ? 'pui-date-range-picker-calendar-picked'
                      : '') +
                    ' ' +
                    (date.getMonth() !== dDate.getMonth()
                      ? 'pui-date-range-picker-calendar-not-same-month'
                      : '') +
                    ' ' +
                    (inDateRange(date, pickedDates as [Date, Date])
                      ? 'pui-date-range-picker-calendar-in-pick-range'
                      : '') +
                    ' ' +
                    (inDateRange(date, prePickedDates as [Date, Date]) &&
                    date.getMonth() === dDate.getMonth()
                      ? 'pui-date-range-picker-calendar-in-pre-pick-range'
                      : '') +
                    ' ' +
                    (sameDate(date, prePickedDates[0]) &&
                    inDateRange(date, prePickedDates as [Date, Date]) &&
                    date.getMonth() === dDate.getMonth()
                      ? 'pui-date-range-picker-calendar-in-pre-pick-range-start'
                      : '') +
                    ' ' +
                    (sameDate(date, prePickedDates[1]) &&
                    inDateRange(date, prePickedDates as [Date, Date]) &&
                    date.getMonth() === dDate.getMonth()
                      ? 'pui-date-range-picker-calendar-in-pre-pick-range-end'
                      : '')
                  }
                  onClick={() => {
                    if (!inDateRange(date, range as [Date, Date])) {
                      return
                    }
                    pickedDates[currentInputPlace] = new Date(date)
                    displayValues[currentInputPlace] = dateToStr(date)

                    if (currentInputPlace === 1 && pickedDates[0]) {
                      if (new Date(date).getTime() < pickedDates[0].getTime()) {
                        pickedDates[0] = null
                        displayValues[0] = ''
                      }
                    }

                    if (currentInputPlace === 0 && pickedDates[1]) {
                      if (new Date(date).getTime() > pickedDates[1].getTime()) {
                        pickedDates[1] = null
                        displayValues[1] = ''
                      }
                    }

                    if (value === undefined) {
                      setPickedDates([...pickedDates])
                      setDisplayValues([...displayValues])
                    }

                    if (currentInputPlace === 0 && !pickedDates[1]) {
                      setCurrentInputPlace(1)
                    } else if (currentInputPlace === 1 && !pickedDates[0]) {
                      setCurrentInputPlace(0)
                    } else {
                      setCalendarOpen(false)
                      if (open === undefined) {
                        setMenuOpen(undefined)
                      }
                    }
                    if (displayValues[0] && displayValues[1]) {
                      onValueChange && onValueChange([...displayValues])
                    }
                  }}
                  onMouseEnter={() => {
                    if (!inDateRange(date, range as [Date, Date])) {
                      return
                    }

                    prePickedDates[0] = pickedDates[0]
                      ? new Date(pickedDates[0])
                      : null
                    prePickedDates[1] = pickedDates[1]
                      ? new Date(pickedDates[1])
                      : null
                    prePickedDates[currentInputPlace] = new Date(date)

                    preDisplayValues[0] = displayValues[0]
                    preDisplayValues[1] = displayValues[1]
                    preDisplayValues[currentInputPlace] = dateToStr(date)

                    setPrePickedDates([...prePickedDates])
                    setPreDisplayValues([...preDisplayValues])
                  }}
                >
                  {date.getDate()}
                </div>
              )
            })}
          </div>
        </div>
      )
    }

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
          'pui-date-range-picker',
          {
            disabled: disabled + '',
            error: error ? error.show + '' : 'false',
            size
          },
          className
        )}
      >
        <input
          className={
            'pui-date-range-picker-box ' +
            (currentInputPlace === 0 && calenderOpen
              ? 'pui-date-range-picker-box-active'
              : '')
          }
          readOnly
          placeholder={placeholderStartDate}
          value={displayValues[0]}
          disabled={disabled}
          onClick={evt => {
            evt.stopPropagation()
            setCurrentInputPlace(0)
            setCalendarOpen(true)
            setCurrentDate(new Date())
            displayDate.current = pickedDates[0]
              ? new Date(pickedDates[0])
              : range
              ? new Date((range as [Date, Date])[0])
              : new Date()
            updateCalendar()
          }}
        />
        <span className="pui-date-range-picker-to">至</span>
        <input
          className={
            'pui-date-range-picker-box ' +
            (currentInputPlace === 1 && calenderOpen
              ? 'pui-date-range-picker-box-active'
              : '')
          }
          readOnly
          placeholder={placeholderEndDate}
          value={displayValues[1]}
          disabled={disabled}
          onClick={evt => {
            evt.stopPropagation()
            setCurrentInputPlace(1)
            setCalendarOpen(true)
            setCurrentDate(new Date())
            displayDate.current = pickedDates[1]
              ? new Date(pickedDates[1])
              : range
              ? new Date((range as [Date, Date])[0])
              : new Date()
            if (pickedDates[1] && pickedDates[0]) {
              if (pickedDates[1].getMonth() !== pickedDates[0].getMonth()) {
                displayDate.current = addMonth(displayDate.current, -1)
              }
            }
            updateCalendar()
          }}
        />
        {pickedDates[0] && pickedDates[1] && (
          <IconErrorFilled
            className="pui-date-range-picker-clear-icon"
            onClick={() => {
              setPickedDates([null, null])
              setDisplayValues(['', ''])
              onValueChange && onValueChange(['', ''])
            }}
          />
        )}
        <IconCalendar className="pui-date-range-picker-icon" />
        {(menuOpen !== undefined ? menuOpen : calenderOpen) &&
          !disabled &&
          ReactDOM.createPortal(
            <div
              style={{ position: 'absolute', ...menuPos }}
              className={`pui-date-picker-size-${size}`}
            >
              <div className="pui-date-range-picker-calendars">
                {calendarView(0)}
                {calendarView(1)}
              </div>
            </div>,
            puiPopupWrap
          )}
      </div>
    )
  }
)

;(DateRangePicker as any).displayName = 'DateRangePicker'
export { DateRangePicker }
