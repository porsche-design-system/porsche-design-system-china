import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { IconArrowHeadDown } from '@pui/icons'
import classNames from 'classnames'
import { createPortal } from 'react-dom'

import { componentClassNames } from '../../shared/class-util'
import { supportTouch } from '../../shared/device'
import {
  useDefaultSize,
  useElementPos,
  usePopShowState
} from '../../shared/hooks'
import { FormErrorText } from '../error-text/error-text'
import { FormItemProps, FormItem } from '../form/form-item'

import './custom-picker.scss'
import { FormItemLabelProps } from '../form/form'

export interface CustomPickerProps<T> {
  /** 表单绑定 */
  name?: string

  /** 值 */
  value?: T

  /** 占位符 */
  placeHolder?: ReactNode

  /** 值改变会调 */
  onValueChange?: (value: T) => void

  /** 大小 */
  size?: 'medium' | 'small'

  /** 是否禁用 */
  disabled?: boolean

  /** 过滤器模式 */
  filterMode?: boolean

  /** 标签 */
  label?: string | FormItemLabelProps | ReactNode

  /** 显示清除按钮 */
  // showClearButton?: boolean

  /** 保持显示清除按钮 */
  // keepClearButton?: boolean

  /** 错误 */
  error?: FormErrorText

  /** 样式类 */
  className?: string

  /** 输入框内内容渲染 */
  displayRender?: (
    value: T,
    onValueChange: (value: T) => void,
    size: 'medium' | 'small'
  ) => ReactNode

  /** 弹出内容渲染 */
  popRender: (
    value: T,
    onValueChange: (value: T) => void,
    hide: () => void,
    size: 'medium' | 'small'
  ) => ReactNode
}

// 必须骗下storybook，让它能显示属性列表
// eslint-disable-next-line import/no-mutable-exports
let CustomPicker = <T,>(props: CustomPickerProps<T> & FormItemProps) => {
  return <div>{JSON.stringify(props)}</div>
}

CustomPicker = FormItem(
  <T,>({
    size,
    value,
    disabled,
    onValueChange,
    displayRender,
    popRender,
    placeHolder,
    className,
    error,
    label = '',
    filterMode
  }: CustomPickerProps<T>) => {
    const [defaultSize] = useDefaultSize()
    size = size || defaultSize
    const [showOptionList, setShowOptionList, puiPopupWrap] = usePopShowState()
    // const newKeepClearButton = keepClearButton || supportTouch()
    const rootElementRef = useRef<any>(null)
    const popMenuRef = useRef<any>(null)
    const [menuPos, updatePos] = useElementPos(rootElementRef, popMenuRef)
    const [val, setVal] = useState(value)

    useEffect(() => {
      if (value !== undefined) {
        setVal(value)
        updatePos()
      }
    }, [value])

    const labelText =
      (label as any).text !== undefined ? (label as any).text : label

    return (
      <div
        className={componentClassNames(
          'pui-custom-picker',
          {
            size,
            disabled: disabled + '',
            error: error ? error.show + '' : 'false',
            // 'keep-clear-button':
            //   (showClearButton && newKeepClearButton && !disabled) + '',
            'filter-mode': filterMode + ''
          },
          className
        )}
      >
        <div
          className="pui-custom-picker-input"
          onClick={evt => {
            if (disabled) {
              return
            }
            evt.preventDefault()
            evt.stopPropagation()
            setShowOptionList(!showOptionList)
            setTimeout(() => {
              updatePos()
            }, 10)
          }}
          ref={rootElementRef}
        >
          {placeHolder && !val && !filterMode ? (
            <span className="pui-custom-picker-input-placeholder">
              {placeHolder}
            </span>
          ) : (
            ''
          )}
          {filterMode ? labelText : ''}
          {val ? ': ' : ''}
          {displayRender ? (
            displayRender(
              val as any,
              v => {
                setVal(v)
                onValueChange && onValueChange(v)
              },
              size
            )
          ) : (
            <span>{val as any}</span>
          )}
          <IconArrowHeadDown
            className={classNames(['arrow', { 'arrow-open': showOptionList }])}
          />
        </div>
        {showOptionList &&
          createPortal(
            <div style={menuPos} className={`pui-custom-picker-size-${size}`}>
              <div
                ref={popMenuRef}
                className="pui-custom-picker-menu"
                onClick={evt => {
                  evt.preventDefault()
                  evt.stopPropagation()
                }}
              >
                {popRender(
                  val as any,
                  v => {
                    setVal(v)
                    onValueChange && onValueChange(v)
                  },
                  () => {
                    setShowOptionList(false)
                  },
                  size
                )}
              </div>
            </div>,
            puiPopupWrap
          )}
      </div>
    )
  }
)
;(CustomPicker as any).displayName = 'CustomPicker'

const createCustomPicker =
  <T,>(props: CustomPickerProps<T> & FormItemProps) =>
  (cpProps: Partial<CustomPickerProps<T>> & FormItemProps) =>
    <CustomPicker {...props} {...cpProps} />

export { CustomPicker, createCustomPicker }
