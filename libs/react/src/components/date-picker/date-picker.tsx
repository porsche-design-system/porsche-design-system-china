import React, { useEffect, useRef, useState } from 'react';
import {
  IconArrowDoubleLeft,
  IconArrowHeadLeft,
  IconArrowHeadRight,
  IconCalendar,
  IconArrowDoubleRight
} from '@pui/icons';

import { FormItem } from '../form/form-item';
import { FormErrorText } from '../error-text/error-text';
import { usePopShowState } from '../../shared/hooks';
import { componentClassNames } from '../../shared/class-util';
import './date-picker.scss';

export interface DatePickerProps {
  // 组件属性 //

  /** 类名 */
  className?: string;

  /** 是否禁用 */
  disabled?: boolean;

  /* 值 */
  value?: string;

  /* 占位符 */
  placeholder?: string;

  /* 值改变事件 */
  onValueChange?: (value: string) => void;

  error?: FormErrorText;
}

const DatePicker = FormItem(
  ({ className, disabled, value, onValueChange, error, placeholder }: DatePickerProps) => {
    const [calenderOpen, setCalendarOpen] = usePopShowState();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [pickedDate, setPickedDate] = useState<Date>();
    const [displayValue, setDisplayValue] = useState('');
    const [calendarDates, setCalendarDates] = useState<Date[]>([]);
    const displayDate = useRef<Date>(new Date());

    const updateCalendar = () => {
      const calenderFirstDate = new Date(displayDate.current);
      calenderFirstDate.setDate(1);
      while (calenderFirstDate.getDay() !== 0) {
        calenderFirstDate.setDate(calenderFirstDate.getDate() - 1);
      }

      const calDates: Date[] = [];
      const calDate = calenderFirstDate;

      while (true) {
        calDates.push(new Date(calDate));
        calDate.setDate(calDate.getDate() + 1);
        const nextDay = new Date(calDate);
        nextDay.setDate(nextDay.getDate() + 1);
        if (calDate.getDay() === 6 && nextDay.getMonth() !== displayDate.current.getMonth()) {
          calDates.push(new Date(calDate));
          break;
        }
      }
      setCalendarDates(calDates);
    };

    useEffect(() => {
      if (value) {
        const datePart = value?.split('-');
        if (datePart.length === 3) {
          if (
            parseInt(datePart[0]) + '' == datePart[0] &&
            parseInt(datePart[1]) + '' == datePart[1] &&
            parseInt(datePart[2]) + '' == datePart[2]
          ) {
            const date = new Date(
              parseInt(datePart[0]),
              parseInt(datePart[1]) - 1,
              parseInt(datePart[2])
            );
            setPickedDate(date);
            setDisplayValue(dateToStr(date));
          }
        }
      }
    }, [value]);

    const dateToStr = (date: Date) => {
      const addZero = (n: number) => {
        if (n < 10) {
          return '0' + n;
        }
        return n;
      };
      return (
        date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate())
      );
    };

    const sameDate = (d1: Date, d2: Date) => {
      return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
      );
    };

    return (
      <div
        className={componentClassNames(
          'pui-date-picker',
          { disabled: disabled + '', error: error ? error.show + '' : 'false' },
          className
        )}
      >
        <input
          className={'pui-date-picker-box ' + (calenderOpen ? 'pui-date-picker-box-active' : '')}
          readOnly
          placeholder={placeholder}
          value={displayValue}
          disabled={disabled}
          onClick={evt => {
            evt.stopPropagation();
            setCalendarOpen(!calenderOpen);
            setCurrentDate(new Date());
            displayDate.current = pickedDate ? new Date(pickedDate) : new Date();
            updateCalendar();
          }}
        />
        <IconCalendar className="pui-date-picker-icon" />
        {calenderOpen && (
          <div
            className="pui-date-picker-calendar"
            onClick={evt => {
              evt.stopPropagation();
            }}
          >
            <div className="pui-date-picker-calendar-head">
              <div className="pui-date-picker-calendar-head-left">
                <IconArrowDoubleLeft
                  onClick={() => {
                    displayDate.current.setFullYear(displayDate.current.getFullYear() - 1);

                    updateCalendar();
                  }}
                />
                <IconArrowHeadLeft
                  onClick={() => {
                    displayDate.current.setMonth(displayDate.current.getMonth() - 1);
                    updateCalendar();
                  }}
                />
              </div>
              {displayDate.current.getFullYear()}年{displayDate.current.getMonth() + 1}月
              <div className="pui-date-picker-calendar-head-right">
                <IconArrowHeadRight
                  onClick={() => {
                    displayDate.current.setMonth(displayDate.current.getMonth() + 1);
                    updateCalendar();
                  }}
                />
                <IconArrowDoubleRight
                  onClick={() => {
                    displayDate.current.setFullYear(displayDate.current.getFullYear() + 1);
                    updateCalendar();
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
                      (date.getMonth() !== displayDate.current.getMonth()
                        ? 'pui-date-picker-calendar-other-month'
                        : '') +
                      ' ' +
                      (sameDate(date, currentDate) ? 'pui-date-picker-calendar-today' : '') +
                      ' ' +
                      (pickedDate && sameDate(date, pickedDate)
                        ? 'pui-date-picker-calendar-picked'
                        : '')
                    }
                    onClick={() => {
                      setPickedDate(new Date(date));
                      setCalendarOpen(false);
                      setDisplayValue(dateToStr(date));
                      onValueChange && onValueChange(dateToStr(date));
                    }}
                  >
                    {date.getDate()}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export { DatePicker };
