import React, { useEffect, useRef, useState } from 'react'
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
import { usePopShowState } from '../../shared/hooks'
import { componentClassNames } from '../../shared/class-util'
import './date-range-picker.scss'

export interface DateRangePickerProps {
  /** 类名 */
  className?: string

  /** 是否禁用 */
  disabled?: boolean

  /* 默认值 */
  defaultValue?: string[]

  /* 开始与结束日期表单捆绑值 */
  names?: [string, string]

  /* 值 */
  values?: string[]

  /* 占位符 */
  placeholders?: string[]

  /* 值改变事件 */
  onValuesChange?: (value: string[]) => void

  /* 可选范围 "InNext{num}Days" "2021-03-12,2021-04-12" ['2021-03-12','2021-04-12'] */
  range?: string | string[] | Date[]

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
    const [currentInputPlace, setCurrentInputPlace] = useState(0)
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
    const [pickedDates, setPickedDates] =
      useState<[Date | null, Date | null]>(initDates)
    const [displayValues, setDisplayValues] = useState(
      initDates ? values || defaultValue || ['', ''] : ['', '']
    )
    const [calendarDates, setCalendarDates] = useState<[Date[], Date[]]>([
      [],
      []
    ])

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

    useEffect(() => {
      if (!calenderOpen) {
        setPrePickedDates([null, null])
        if (!pickedDates[0] || !pickedDates[1]) {
          setPickedDates([null, null])
          setDisplayValues(['', ''])
        }
      }
    }, [calenderOpen])

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

                    if (values === undefined) {
                      setPickedDates([...pickedDates])
                      setDisplayValues([...displayValues])
                    }

                    if (currentInputPlace === 0 && !pickedDates[1]) {
                      setCurrentInputPlace(1)
                    } else if (currentInputPlace === 1 && !pickedDates[0]) {
                      setCurrentInputPlace(0)
                    } else {
                      setCalendarOpen(false)
                    }
                    if (displayValues[0] && displayValues[1]) {
                      onValuesChange && onValuesChange([...displayValues])
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
        className={componentClassNames(
          'pui-date-range-picker',
          { disabled: disabled + '', error: error ? error.show + '' : 'false' },
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
          placeholder={placeholders && placeholders[0]}
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
          placeholder={placeholders && placeholders[1]}
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
              ? new Date((range as [Date, Date])[1])
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
              onValuesChange && onValuesChange(['', ''])
            }}
          />
        )}
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
