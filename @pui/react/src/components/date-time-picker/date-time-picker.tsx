import React, { useEffect, ReactNode, useRef } from 'react'
import {
  IconCalendar,
  IconArrowDoubleLeft,
  IconArrowHeadBack,
  IconArrowHeadRight,
  IconArrowDoubleRight
} from '@pui/icons'
import ReactDOMServer from 'react-dom/server'
import './date-time-picker.scss'
import { FormItem } from '../form/form-item'
import { FormItemLabelProps } from '../form/form'
import { useDefaultSize } from '../../shared/hooks'

import puiDate from './puiDate.js'

export const DateFormat = {
  /**  只显示年 */
  OnlyYear: 'YYYY',
  YearAndMonth: 'YYYY-MM',
  Common: 'YYYY-MM-DD',
  CommonHHMMSS: 'YYYY-MM-DD hh:mm',
  HHMMSS: 'hh:mm:ss',
  HHMM: 'hh:mm'
}
export interface DatePickerProps {
  /** 类名 */
  className?: string

  /** 是否禁用 */
  disabled?: boolean

  /** 大小 */
  size?: 'medium' | 'small'

  /** 标签 */
  label?: string | FormItemLabelProps | ReactNode

  /** 是否为选中日期后关闭弹层，为false时选中日期后关闭弹层 */
  onClose?: boolean

  /** 最小日期 */
  minDate?: string

  /** 最大日期 */
  maxDate?: string

  /** 唯一id,必填，不能为空 */
  componentId: string

  /** 显示样式 */
  showStyle?:
    | 'OnlyYear'
    | 'YearAndMonth'
    | 'Common'
    | 'CommonHHMMSS'
    | 'HHMMSS'
    | 'HHMM'

  /** 是否是时间范围,不设置不是范围,false:双面板范围,true:单面板范围 */
  isRange?: boolean

  /** 时间范围格式, isRange为true时有效 */
  rangeFormat?: 'OnlyYear' | 'YearAndMonth' | 'Common' | 'CommonHHMMSS'

  /** 时间范围时连接字符 */
  rangeLabel?: ' ~ ' | ' To ' | ' 至 '

  /** 是否开启时间选择 */
  isShowTime?: boolean

  /** 是否显示今天或本月 */
  isToday?: boolean

  /** 点击确定后的回调 */
  onValueChange?: (obj: any) => void

  /** 月点击确定后的回调 */
  monthItemClickFun?: (val: any) => void

  /** 年点击确定后的回调 */
  yearItemClickFun?: (val: any) => void

  /** 日期点击确定后的回调 */
  dayItemClickFun?: (val: any) => void

  /** 点击清除后的回调 */
  clearFun?: (ele: any, val: any) => void

  /** 默认值 */
  value?: string | [string, string]

  /** 标签位置 */
  labelPosition?: 'left' | 'top'

  /** 占位符 */
  placeholder?: string

  /** 开始日期占位符 */
  placeholderStartDate?: string

  /** 结束日期占位符 */
  placeholderEndDate?: string

  /** 过滤器模式 */
  filterMode?: boolean

  /** 开始日期或结束日期可以为空 */
  allowNullDate?: boolean

  /** 开始日期表单捆绑值 */
  nameStartDate?: string

  /** 开始日期表单捆绑值 */
  nameEndDate?: string
}

const DateTimePicker = FormItem((datePickerProps: DatePickerProps) => {
  const {
    className = '',
    disabled = false,
    placeholder,
    label = '',
    isShowTime = false,
    minDate,
    maxDate,
    componentId,
    showStyle = 'Common',
    isRange,
    rangeLabel = ' 至 ',
    onClose = true,
    isToday = true,
    onValueChange,
    clearFun,
    monthItemClickFun,
    yearItemClickFun,
    dayItemClickFun,
    placeholderStartDate = '无限',
    placeholderEndDate = '无限',
    value = '',
    labelPosition = 'left',
    size,
    filterMode = false,
    allowNullDate = false
  } = datePickerProps

  const onValueChangeRef = useRef(onValueChange)

  useEffect(() => {
    onValueChangeRef.current = onValueChange
  }, [onValueChange])

  useEffect(() => {
    initComponent()
  }, [])

  // const [dateTimeDates, setDateTimeDates] = useState(null)
  const yearIcon = <IconArrowDoubleLeft className="dateFontIcon" />
  const singleLeftIcon = <IconArrowHeadBack className="dateFontIcon" />
  const singleRightIcon = <IconArrowHeadRight className="dateFontIcon" />
  const doubleRightIcon = <IconArrowDoubleRight className="dateFontIcon" />
  const [defaultSize] = useDefaultSize()
  const newSize = size || defaultSize

  const labelText =
    (label as any).text !== undefined ? (label as any).text : label

  const initComponent = () => {
    // 常规选择
    const dataProps = {
      multiPane: isRange,
      range: rangeLabel,
      format: DateFormat[showStyle],
      onClose,
      isTime: isShowTime,
      isToday,
      minDate: minDate || '1900-01-01 00:00:00',
      maxDate: maxDate || '2099-12-31 23:59:59',
      yearIcon: ReactDOMServer.renderToString(yearIcon),
      singleLeftIcon: ReactDOMServer.renderToString(singleLeftIcon),
      singleRightIcon: ReactDOMServer.renderToString(singleRightIcon),
      doubleRightIcon: ReactDOMServer.renderToString(doubleRightIcon),
      showSecend: showStyle === 'HHMMSS',
      allowNullDate,
      filterMode,
      doneFun: (obj: any) => {
        if (isRange !== undefined) {
          const arr = obj.val.split(rangeLabel)
          const newArr = []
          if (arr && arr.length === 1) {
            const targetId = obj.elem.id
            if (targetId.indexOf('posend') !== -1) {
              if (
                componentId &&
                componentId.length > 0 &&
                document.getElementById(componentId)
              ) {
                ;(document.getElementById(componentId) as any).value = ''
              }
              if (document.getElementById(componentId + 'posend')) {
                ;(
                  document.getElementById(componentId + 'posend') as any
                ).value = arr[0]
              }
              newArr[0] = ''
              newArr[1] = arr[0]
            } else {
              ;(document.getElementById(componentId) as any).value = arr[0]
              ;(document.getElementById(componentId + 'posend') as any).value =
                ''
              newArr[0] = arr[0]
              newArr[1] = ''
            }
            onValueChangeRef.current && onValueChangeRef.current(newArr)
            // setDateTimeDates(newArr)
          } else {
            ;(document.getElementById(componentId) as any).value = arr[0]
            ;(document.getElementById(componentId + 'posend') as any).value =
              arr[1]
            onValueChangeRef.current && onValueChangeRef.current(arr)
          }
        } else {
          onValueChangeRef.current && onValueChangeRef.current(obj.val)
          // setDateTimeDates(obj.val)
        }
      },
      clearFun: (elem: any, val: any) => {
        clearFun && clearFun(elem, val)
        onValueChangeRef.current && onValueChangeRef.current(val)
        // setDateTimeDates(null)
      },
      monthItemClickFun: (data: any) => {
        monthItemClickFun && monthItemClickFun(data)
      },
      yearItemClickFun: (data: any) => {
        yearItemClickFun && yearItemClickFun(data)
      },
      dayItemClickFun: (data: any) => {
        dayItemClickFun && dayItemClickFun(data)
      }
    }

    if (isRange !== undefined) {
      dataProps.multiPane = false
      puiDate('#' + componentId, {
        ...dataProps
      })
      puiDate('#' + componentId + 'posend', {
        ...dataProps
      })
    } else {
      Reflect.deleteProperty(dataProps, 'multiPane')
      Reflect.deleteProperty(dataProps, 'range')
      puiDate('#' + componentId, {
        ...dataProps
      })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFilter = (evt: any) => {
    // evt.stopPropagation()
    document.getElementById(componentId)?.click()
  }

  let labelEle
  if ((labelText && labelPosition === 'left') || filterMode) {
    labelEle = (
      <span
        className={
          `filter-label filter-label-size-${newSize}` +
          (value ? ' label-holder' : '')
        }
        id={`${componentId}_holder`}
      >
        {labelText || ''}
      </span>
    )
  } else if (labelText && labelPosition === 'top') {
    labelEle = (
      <div className="pui-label pui-label-position-top"> {labelText || ''}</div>
    )
  }

  if (!filterMode) {
    return (
      <div className="pui-pick pui-date-picker">
        {/* {labelEle} */}
        {isRange === undefined ? (
          <div
            className={
              disabled
                ? 'je-input-box-disabled ' + className
                : `je-input-box je-input-box-size-${newSize} ` + className
            }
          >
            <input
              type="text"
              className={`je-input je-input-size-${newSize}`}
              value={value}
              disabled={disabled}
              readOnly
              id={componentId}
              placeholder={placeholder}
            />
            <IconCalendar
              className={`pui-date-picker-icon pui-date-picker-icon-size-${newSize}`}
            />
          </div>
        ) : (
          <div
            className={
              disabled
                ? `pui-pick-date-range-disabled  pui-pick-date-range-disabled-size-${newSize} ` +
                  className
                : `pui-pick-date-range pui-pick-date-range-size-${newSize} ` +
                  className
            }
          >
            <input
              type="text"
              className={`je-input-range je-input-range-size-${newSize}`}
              value={value[0]}
              disabled={disabled}
              readOnly
              id={componentId}
              placeholder={placeholderStartDate}
            />
            <span>{rangeLabel}</span>
            <input
              type="text"
              className={`je-input-range je-input-range-size-${newSize}`}
              value={value[1]}
              disabled={disabled}
              readOnly
              id={componentId + 'posend'}
              placeholder={placeholderEndDate}
            />
            <IconCalendar
              className={`pui-date-picker-icon pui-date-picker-icon-size-${newSize}`}
            />
          </div>
        )}
      </div>
    )
  } else {
    const objWidth = {
      OnlyYear: 50,
      YearAndMonth: 70,
      Common: 100,
      CommonHHMMSS: 130,
      HHMMSS: 80,
      HHMM: 60
    }
    let highlight = ''
    if (value?.length > 0) {
      highlight = ' highlightBg'
    }
    return (
      <div className="pui-pick pui-date-picker filterMode">
        {isRange === undefined ? (
          <div
            className={
              disabled
                ? 'je-input-box-disabled ' + className
                : `je-input-box je-input-box-size-${newSize}` +
                  className +
                  highlight
            }
            style={{
              paddingLeft: '12px',
              paddingRight: '40px',
              cursor: 'pointer'
            }}
            onClick={evt => onFilter(evt)}
          >
            <>
              {labelEle}
              <input
                type="text"
                className={`je-input je-input-size-${newSize} filterMode-single`}
                value={value}
                disabled={disabled}
                readOnly
                id={componentId}
                placeholder={placeholder}
                style={{
                  display: !value ? 'none' : 'inline-block',
                  width: value ? objWidth[showStyle] + 'px' : ''
                }}
              />
              <IconCalendar
                className={`pui-date-picker-icon pui-date-picker-icon-size-${newSize}`}
              />
            </>
          </div>
        ) : (
          <div
            className={
              disabled
                ? `pui-pick-date-range-disabled  pui-pick-date-range-disabled-size-${newSize} ` +
                  className
                : `pui-pick-date-range pui-pick-date-range-size-${newSize} ` +
                  className +
                  highlight
            }
            style={{ paddingLeft: '12px' }}
            onClick={evt => onFilter(evt)}
          >
            <>
              {labelEle}
              <div
                style={{ display: !value ? 'none' : 'inline-block' }}
                id={`${componentId}filterMode-multi`}
              >
                <input
                  type="text"
                  style={{
                    marginLeft: '12px',
                    width: value[0] ? objWidth[showStyle] + 'px' : ''
                  }}
                  className={`je-input-range je-input-range-size-${newSize} filterMode-multi`}
                  value={value[0]}
                  disabled={disabled}
                  readOnly
                  id={componentId}
                  placeholder={placeholderStartDate}
                />
                <span>{rangeLabel}</span>
                <input
                  type="text"
                  className={`je-input-range je-input-range-size-${newSize} filterMode-multi`}
                  value={value[1]}
                  disabled={disabled}
                  readOnly
                  id={componentId + 'posend'}
                  placeholder={placeholderEndDate}
                  style={{
                    width: value[1] ? objWidth[showStyle] + 'px' : ''
                  }}
                />
              </div>
              <IconCalendar
                className={`pui-date-picker-icon pui-date-picker-icon-size-${newSize}`}
              />
            </>
          </div>
        )}
      </div>
    )
  }
}, 'DateTimePicker')

export { DateTimePicker }
