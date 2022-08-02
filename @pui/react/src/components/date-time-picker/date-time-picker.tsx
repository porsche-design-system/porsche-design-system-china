import React, { useEffect, ReactNode } from 'react'
import {
  IconClock,
  IconArrowDoubleLeft,
  IconArrowHeadBack,
  IconArrowHeadRight,
  IconArrowDoubleRight
} from '@pui/icons'
import ReactDOMServer from 'react-dom/server'
import './date-picker.scss'
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
  showStyle?: 'OnlyYear' | 'YearAndMonth' | 'Common' | 'CommonHHMMSS' | 'HHMMSS'

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

const DateTimePicker = FormItem(
  ({
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
    placeholderStartDate,
    placeholderEndDate,
    value = '',
    labelPosition = 'left',
    size = 'medium',
    filterMode = false,
    allowNullDate = false
  }: DatePickerProps) => {
    useEffect(() => {
      initComponent()
    }, [])

    // const [dateTimeDates, setDateTimeDates] = useState(null)
    const yearIcon = <IconArrowDoubleLeft className="dateFontIcon" />
    const singleLeftIcon = <IconArrowHeadBack className="dateFontIcon" />
    const singleRightIcon = <IconArrowHeadRight className="dateFontIcon" />
    const doubleRightIcon = <IconArrowDoubleRight className="dateFontIcon" />

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
                ;(
                  document.getElementById(componentId + 'posend') as any
                ).value = ''
                newArr[0] = arr[0]
                newArr[1] = ''
              }
              onValueChange && onValueChange(newArr)
              // setDateTimeDates(newArr)
            } else {
              ;(document.getElementById(componentId) as any).value = arr[0]
              ;(document.getElementById(componentId + 'posend') as any).value =
                arr[1]
              onValueChange && onValueChange(arr)
            }
          } else {
            onValueChange && onValueChange(obj.val)
            // setDateTimeDates(obj.val)
          }
        },
        clearFun: (elem: any, val: any) => {
          clearFun && clearFun(elem, val)
          // setDateTimeDates(null)
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
    let labelEle
    if ((labelText && labelPosition === 'left') || filterMode) {
      labelEle = (
        <span className="pui-select-input-placeholder">{labelText || ''}</span>
      )
    } else if (labelText && labelPosition === 'top') {
      labelEle = (
        <div className="pui-label pui-label-position-top">
          {' '}
          {labelText || ''}
        </div>
      )
    }
    const [defaultSize] = useDefaultSize()
    size = defaultSize || size

    if (!filterMode) {
      return (
        <div className="pui-pick pui-date-picker">
          {/* {labelEle} */}
          {isRange === undefined ? (
            <div
              className={
                disabled
                  ? 'je-input-box-disabled ' + className
                  : 'je-input-box ' + className
              }
            >
              <input
                type="text"
                className={`je-input je-input-size-${size}`}
                value={value}
                disabled={disabled}
                readOnly
                id={componentId}
                placeholder={placeholder}
              />
              <IconClock
                className={`pui-date-picker-icon pui-date-picker-icon-size-${size}`}
              />
            </div>
          ) : (
            <div
              className={
                disabled
                  ? `pui-pick-date-range-disabled  pui-pick-date-range-disabled-size-${size} ` +
                    className
                  : `pui-pick-date-range pui-pick-date-range-size-${size} ` +
                    className
              }
            >
              <input
                type="text"
                className={`je-input-range je-input-range-size-${size}`}
                value={value[0]}
                disabled={disabled}
                readOnly
                id={componentId}
                placeholder={placeholderStartDate}
              />
              <span>{rangeLabel}</span>
              <input
                type="text"
                className={`je-input-range je-input-range-size-${size}`}
                value={value[1]}
                disabled={disabled}
                readOnly
                id={componentId + 'posend'}
                placeholder={placeholderEndDate}
              />
              <IconClock
                className={`pui-date-picker-icon pui-date-picker-icon-size-${size}`}
              />
            </div>
          )}
        </div>
      )
    } else {
      return (
        <div className="pui-pick pui-date-picker filterMode">
          {isRange === undefined ? (
            <div
              className={
                disabled
                  ? 'je-input-box-disabled ' + className
                  : 'je-input-box ' + className
              }
              style={{ paddingLeft: '12px' }}
            >
              <>
                {labelEle}
                <input
                  type="text"
                  className={`je-input je-input-size-${size}`}
                  value={value}
                  disabled={disabled}
                  readOnly
                  id={componentId}
                  placeholder={placeholder}
                />
                <IconClock
                  className={`pui-date-picker-icon pui-date-picker-icon-size-${size}`}
                />
              </>
            </div>
          ) : (
            <div
              className={
                disabled
                  ? `pui-pick-date-range-disabled  pui-pick-date-range-disabled-size-${size} ` +
                    className
                  : `pui-pick-date-range pui-pick-date-range-size-${size} ` +
                    className
              }
              style={{ paddingLeft: '12px' }}
            >
              <>
                {labelEle}
                <input
                  type="text"
                  style={{ marginLeft: '12px' }}
                  className={`je-input-range je-input-range-size-${size}`}
                  value={value[0]}
                  disabled={disabled}
                  readOnly
                  id={componentId}
                  placeholder={placeholderStartDate}
                />
                <span>{rangeLabel}</span>
                <input
                  type="text"
                  className={`je-input-range je-input-range-size-${size}`}
                  value={value[1]}
                  disabled={disabled}
                  readOnly
                  id={componentId + 'posend'}
                  placeholder={placeholderEndDate}
                />
                <IconClock
                  className={`pui-date-picker-icon pui-date-picker-icon-size-${size}`}
                />
              </>
            </div>
          )}
        </div>
      )
    }
  }
)

;(DateTimePicker as any).displayName = 'DateTimePicker'
export { DateTimePicker }
