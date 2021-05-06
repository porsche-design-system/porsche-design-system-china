import React from 'react'
import { getLabelWidth } from '../label/label'
import { FormItemLabelProps } from '../form/form'
import './error-text.scss'

export interface FormErrorText {
  /* 是否显示 */
  show?: boolean

  /* 错误内容 */
  message?: string
}

export interface ErrorTextProps extends FormErrorText {
  /* 标签 */
  label?: FormItemLabelProps | string
}

/**
 * Primary UI component for user interaction
 */
const ErrorText = ({ show = true, message = '', label }: ErrorTextProps) => {
  const labelWidth = getLabelWidth(label)

  if (!show) {
    return null
  }

  return (
    <div className="pui-error-text" style={{ marginLeft: labelWidth }}>
      {message}
    </div>
  )
}

export { ErrorText }
