import React, { CSSProperties, useEffect, useState } from 'react';
import {
  IconArrowDoubleLeft,
  IconArrowHeadLeft,
  IconArrowHeadRight,
  IconCalendar,
  IconArrowDoubleRight
} from '@pui/icons';

import { componentClassNames } from '../../shared/class-util';
import './date-picker.scss';
import { FormItem } from '../form/form-item';

export interface DatePickerProps {
  // 组件属性 //

  /** 类名 */
  className?: string;

  /** 样式 */
  style?: CSSProperties;

  /** 是否禁用 */
  disabled?: boolean;

  /* 值 */
  value?: string;

  /* 占位符 */
  placeholder?: string;

  /* 值改变事件 */
  onValueChange?: (value: string) => void;
}

const DatePicker = FormItem(
  ({ className, style, disabled, value, onValueChange, placeholder }: DatePickerProps) => {
    const [calenderOpen, setCalendarOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [pickedDate, setPickedDate] = useState<Date>();
    const [displayDate, setDisplayDate] = useState<Date>(new Date());
    const [displayValue, setDisplayValue] = useState('');
    const [calendarDates, setCalendarDates] = useState<Date[]>([]);

    const updateCalendar = () => {
      const calenderFirstDate = new Date(displayDate);
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
        if (calDate.getDay() === 6 && nextDay.getMonth() !== displayDate.getMonth()) {
          calDates.push(new Date(calDate));
          break;
        }
      }
      setCalendarDates(calDates);
    };

    useEffect(() => {
      const docClick = (evt: MouseEvent) => {
        if (calenderOpen) {
          setCalendarOpen(false);
        }
      };
      document.addEventListener('click', docClick);
      return () => {
        document.removeEventListener('click', docClick);
      };
    }, [calenderOpen]);

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
              parseInt(datePart[1]),
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
        className={componentClassNames('pui-date-picker', { disabled: disabled + '' }, className)}
        style={style}
      >
        <input
          className={'pui-date-picker-box ' + (calenderOpen ? 'pui-date-picker-box-active' : '')}
          readOnly
          placeholder={placeholder}
          value={displayValue}
          disabled={disabled}
          onClick={() => {
            setCalendarOpen(!calenderOpen);
            setCurrentDate(new Date());
            setDisplayDate(pickedDate || new Date());
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
                    displayDate.setFullYear(displayDate.getFullYear() - 1);
                    setDisplayDate(new Date(displayDate));
                    updateCalendar();
                  }}
                />
                <IconArrowHeadLeft
                  onClick={() => {
                    displayDate.setMonth(displayDate.getMonth() - 1);
                    setDisplayDate(new Date(displayDate));
                    updateCalendar();
                  }}
                />
              </div>
              {displayDate.getFullYear()}年{displayDate.getMonth() + 1}月
              <div className="pui-date-picker-calendar-head-right">
                <IconArrowHeadRight
                  onClick={() => {
                    displayDate.setMonth(displayDate.getMonth() + 1);
                    setDisplayDate(new Date(displayDate));
                    updateCalendar();
                  }}
                />
                <IconArrowDoubleRight
                  onClick={() => {
                    displayDate.setFullYear(displayDate.getFullYear() + 1);
                    setDisplayDate(new Date(displayDate));
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
                      (date.getMonth() !== displayDate.getMonth()
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
