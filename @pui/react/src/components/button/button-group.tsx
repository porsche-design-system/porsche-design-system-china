import React, { ReactNode, useContext } from 'react'
import { componentClassNames } from '../../shared/class-util'
import { FormContext, FormItemLabelProps, overrideProps } from '../form/form'
import { Label, getLabelProps } from '../label/label'
import { useDefaultSize } from '../../shared/hooks'
import './button-group.scss'

export interface ButtonGroupProps {
  // 组件属性 //

  label?: FormItemLabelProps | string | ReactNode

  /** 是否禁用 */
  disabled?: boolean

  /* 按钮位置 */
  align?: 'left' | 'right' | 'center'

  /** 子组件 */
  children?: React.ReactNode
}

const ButtonGroup = (buttonGroupProps: ButtonGroupProps) => {
  const formContext = useContext(FormContext)
  if (formContext) {
    buttonGroupProps = overrideProps(
      'ButtonGroup',
      { ...buttonGroupProps },
      formContext
    )
  }
  const { label, disabled = false, children, align = 'left' } = buttonGroupProps
  const [defaultSize] = useDefaultSize()
  return (
    <div
      className={componentClassNames('pui-button-group', {
        disabled: disabled + '',
        align,
        size: defaultSize
      })}
      style={{ textAlign: align }}
    >
      {label && <Label {...getLabelProps(label)} />}
      {children}
    </div>
  )
}

export { ButtonGroup }
