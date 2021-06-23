import React, { useEffect, useRef, useState } from 'react'
import {
  IconArrowDoubleLeft,
  IconArrowHeadLeft,
  IconArrowHeadRight,
  IconCalendar,
  IconArrowDoubleRight
} from '@pui/icons'

import { FormItem } from '../form/form-item'
import { FormErrorText } from '../error-text/error-text'
import { usePopShowState } from '../../shared/hooks'
import { componentClassNames } from '../../shared/class-util'
import './date-picker.scss'

export interface DatePickerProps {
  /** 类名 */
  className?: string

  /** 是否禁用 */
  disabled?: boolean

  /* 默认值 */
  defaultValue?: string

  /* 值 */
  value?: string

  /* 占位符 */
  placeholder?: string

  /* 值改变事件 */
  onValueChange?: (value: string) => void

  /* 可选范围 "InNext{num}Days" "2021-03-12,2021-04-12" ['2021-03-12','2021-04-12'] */
  range?: string | [string, string] | [Date, Date]

  /* 提示错误 */
  error?: FormErrorText
}

const DatePicker = FormItem(
  ({
    className,
    disabled,
    value,
    defaultValue,
    onValueChange,
    error,
    range,
    placeholder
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

    const initDate = strToDate(value || defaultValue || '')
    const [calenderOpen, setCalendarOpen] = usePopShowState()
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

    const inDateRange = (date: Date) => {
      if (range) {
        range = range as [Date, Date]
        range[0].setHours(0)
        range[0].setMinutes(0)
        range[0].setSeconds(0)
        range[1].setHours(23)
        range[1].setMinutes(59)
        range[1].setSeconds(59)
        return (
          date.getTime() >= range[0].getTime() &&
          date.getTime() <= range[1].getTime()
        )
      }
      return true
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

    return (
      <div
        className={componentClassNames(
          'pui-date-picker',
          { disabled: disabled + '', error: error ? error.show + '' : 'false' },
          className
        )}
      >
        <input
          className={
            'pui-date-picker-box ' +
            (calenderOpen ? 'pui-date-picker-box-active' : '')
          }
          readOnly
          placeholder={placeholder}
          value={displayValue}
          disabled={disabled}
          onClick={evt => {
            evt.stopPropagation()
            setCalendarOpen(!calenderOpen)
            setCurrentDate(new Date())
            displayDate.current = pickedDate
              ? new Date(pickedDate)
              : range
              ? new Date((range as [Date, Date])[0])
              : new Date()
            updateCalendar()
          }}
        />
        <IconCalendar className="pui-date-picker-icon" />
        {calenderOpen && (
          <div
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
                <div key={weekday} className="pui-date-picker-calendar-weekday">
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
                      (!inDateRange(date)
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
                      if (!inDateRange(date)) {
                        return
                      }
                      if (value === undefined) {
                        setPickedDate(new Date(date))
                        setDisplayValue(dateToStr(date))
                      }
                      setCalendarOpen(false)
                      onValueChange && onValueChange(dateToStr(date))
                    }}
                  >
                    {date.getDate()}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }
)

;(DatePicker as any).displayName = 'DatePicker'
export { DatePicker }
