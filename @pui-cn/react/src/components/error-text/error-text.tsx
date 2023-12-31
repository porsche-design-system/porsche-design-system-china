import React, { ReactNode } from 'react'
import { getLabelWidth } from '../label/label'
import { FormItemLabelProps } from '../form/form'
import { useDefaultSize } from '../../shared/hooks'
import { componentClassNames } from '../../shared/class-util'
import './error-text.scss'

export interface FormErrorText {
  /* 是否显示 */
  show?: boolean

  /* 错误内容 */
  message?: string
}

export interface ErrorTextProps extends FormErrorText {
  /* 标签 */
  label?: FormItemLabelProps | string | ReactNode
}

/**
 * Primary UI component for user interaction
 */
const ErrorText = ({ show = true, message = '', label }: ErrorTextProps) => {
  const labelWidth = getLabelWidth(label)
  const [defaultSize] = useDefaultSize()

  if (!show) {
    return null
  }

  return (
    <div
      className={componentClassNames('pui-error-text', { size: defaultSize })}
      style={{ marginLeft: labelWidth }}
    >
      {message}
    </div>
  )
}

export { ErrorText }
