import React, { useEffect, useRef, useState } from 'react'
import {
  IconArrowDoubleLeft,
  IconArrowHeadLeft,
  IconArrowHeadRight,
  IconCalendar,
  IconArrowDoubleRight
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
import { usePopShowState } from '../../shared/hooks'
import { componentClassNames } from '../../shared/class-util'
import './date-range-picker.scss'

export interface DateRangePickerProps {
  /** 类名 */
  className?: string

  /** 是否禁用 */
  disabled?: boolean

  /* 默认值 */
  defaultValue?: [string, string]

  /* 值 */
  values?: [string, string]

  /* 占位符 */
  placeholders?: [string, string]

  /* 值改变事件 */
  onValuesChange?: (value: [string | null, string | null]) => void

  /* 可选范围 "InNext{num}Days" "2021-03-12,2021-04-12" ['2021-03-12','2021-04-12'] */
  range?: string | [string, string] | [Date, Date]

  /* 提示错误 */
  error?: FormErrorText
}

const DateRangePicker = FormItem(
  ({
    className,
    disabled,
    values,
    defaultValue,
    onValuesChange,
    error,
    range,
    placeholders
  }: DateRangePickerProps) => {
    // const [currentInputPlace, setCurrentInputPlace] = useState<
    //   'START_DATE' | 'END_DATE'
    // >('START_DATE')
    const initDates: [Date | null, Date | null] = [
      strToDate(
        (values && values[0]) || (defaultValue && defaultValue[0]) || ''
      ),
      strToDate(
        (values && values[1]) || (defaultValue && defaultValue[1]) || ''
      )
    ]
    const [calenderOpen, setCalendarOpen] = usePopShowState()
    // 当前日期
    const [currentDate, setCurrentDate] = useState(new Date())
    // 选中的Date
    const [pickedDates, setPickedDates] = useState<[Date | null, Date | null]>(
      initDates
    )
    const [displayValues, setDisplayValues] = useState<[string, string]>(
      initDates ? values || defaultValue || ['', ''] : ['', '']
    )
    const [calendarDates, setCalendarDates] = useState<[Date[], Date[]]>([
      [],
      []
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
          strToDate((values && values[0]) || ''),
          strToDate((values && values[1]) || '')
        ]
        setPickedDates(dates)
        setDisplayValues([
          dates[0] ? dateToStr(dates[0]) : '',
          dates[1] ? dateToStr(dates[1]) : ''
        ])
      }
    }, [values])

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
            {dDate.getFullYear()}年{dDate.getMonth() + 1}月
            <div className="pui-date-range-picker-calendar-head-right">
              <IconArrowHeadRight
                onClick={() => {
                  dDate.setMonth(dDate.getMonth() + 1)
                  updateCalendar()
                }}
              />
              <IconArrowDoubleRight
                onClick={() => {
                  dDate.setFullYear(dDate.getFullYear() + 1)
                  updateCalendar()
                }}
              />
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
                    (pickedDates[calInx] &&
                    (sameDate(date, pickedDates[0] as Date) ||
                      sameDate(date, pickedDates[1] as Date))
                      ? 'pui-date-range-picker-calendar-picked'
                      : '') +
                    ' ' +
                    (date.getMonth() !== dDate.getMonth()
                      ? 'pui-date-range-picker-calendar-not-same-month'
                      : '') +
                    ' ' +
                    (inDateRange(date, pickedDates as [Date, Date])
                      ? 'pui-date-range-picker-calendar-in-pick-range'
                      : '')
                  }
                  onClick={() => {
                    if (!inDateRange(date, range as [Date, Date])) {
                      return
                    }
                    pickedDates[calInx] = new Date(date)
                    displayValues[calInx] = dateToStr(date)
                    if (values === undefined) {
                      setPickedDates([...pickedDates])
                      setDisplayValues([...displayValues])
                    }
                    setCalendarOpen(false)

                    onValuesChange && onValuesChange([...displayValues])
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
        className={componentClassNames(
          'pui-date-range-picker',
          { disabled: disabled + '', error: error ? error.show + '' : 'false' },
          className
        )}
      >
        <input
          className={
            'pui-date-range-picker-box ' +
            (calenderOpen ? 'pui-date-range-picker-box-active' : '')
          }
          readOnly
          placeholder={placeholders && placeholders[0]}
          value={displayValues[0]}
          disabled={disabled}
          onClick={evt => {
            evt.stopPropagation()
            setCalendarOpen(!calenderOpen)
            setCurrentDate(new Date())
            displayDate.current = pickedDates[0]
              ? new Date(pickedDates[0])
              : range
              ? new Date((range as [Date, Date])[0])
              : new Date()
            updateCalendar()
          }}
        />
        <input
          className={
            'pui-date-range-picker-box ' +
            (calenderOpen ? 'pui-date-range-picker-box-active' : '')
          }
          readOnly
          placeholder={placeholders && placeholders[1]}
          value={displayValues[1]}
          disabled={disabled}
          onClick={evt => {
            evt.stopPropagation()
            setCalendarOpen(!calenderOpen)
            setCurrentDate(new Date())
            displayDate.current = pickedDates[1]
              ? new Date(pickedDates[1])
              : range
              ? new Date((range as [Date, Date])[1])
              : new Date()
            displayDate.current = addMonth(displayDate.current, -1)
            updateCalendar()
          }}
        />
        <IconCalendar className="pui-date-range-picker-icon" />
        {calenderOpen && (
          <div className="pui-date-range-picker-calendars">
            {calendarView(0)}
            {calendarView(1)}
          </div>
        )}
      </div>
    )
  }
)

;(DateRangePicker as any).displayName = 'DateRangePicker'
export { DateRangePicker }
