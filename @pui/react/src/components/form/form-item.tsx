import React, {
  CSSProperties,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import { getLabelWidth, Label, getLabelProps } from '../label/label'
import { FormContext, FormItemLabelProps, overrideProps } from './form'
import { ErrorText, FormErrorText } from '../error-text/error-text'
import { RuleItem, validate } from '../../shared/validation-rules'
import { useDefaultSize } from '../../shared/hooks'

import './form-item.scss'

export interface FormItemProps {
  /** 标签 */
  label?: string | FormItemLabelProps | ReactNode

  /** 表单绑定key，需要配合&lt;Form&gt;使用 */
  name?: string

  /** 错误 */
  error?: FormErrorText

  /** 验证规则 */
  rules?: RuleItem[] | RuleItem

  /** 宽度 */
  width?: string

  /** 左边距 */
  marginLeft?: string

  /** 右边距 */
  marginRight?: string

  /** 样式 */
  style?: CSSProperties

  /** 样式类 */
  className?: string

  /** 过滤器选项模式 */
  filterMode?: boolean

  /** 在输入的时候立即校验，而不是等到 onblur 后才开始校验 */
  instantValidate?: boolean
}

export const FormItem =
  <T,>(func: (...args: T[]) => React.ReactNode, displayName: string) =>
    (props: FormItemProps & T) => {
      const formContext = useContext(FormContext)
      if (formContext) {
        props = overrideProps(displayName, { ...props }, formContext)
      }

      const {
        label,
        error,
        width,
        marginLeft,
        marginRight,
        rules,
        style,
        filterMode = false,
        className,
        name,
        instantValidate
      } = props

      const [internalError, setInternalError] = useState('')
      const [defaultSize] = useDefaultSize()
      const blurTriggered = useRef(false)

      let required = false
      if (rules) {
        if (Array.isArray(rules)) {
          rules.forEach(rule => {
            if (rule.required) {
              required = true
            }
          })
        } else if (rules.required) {
          required = true
        }
      }

      let displayError = error
      if (!props.error && internalError) {
        displayError = {
          show: true,
          message: internalError
        }
      }

      const validateFormItem = (val?: any) => {
        const validateValue = val ?? (props as any).value
        if (rules) {
          const n = name || 'field'
          validate({ [n]: rules }, { [n]: validateValue }, errorList => {
            blurTriggered.current = true
            if (errorList && errorList.length > 0) {
              setInternalError(errorList[0].message)
            } else {
              setInternalError('')
            }
          })
        }
      }

      useEffect(() => {
        if (blurTriggered.current) {
          validateFormItem()
        }
      }, [(props as any).value])

      const labelWidth = getLabelWidth(label)
      const labelProps = getLabelProps(label)

      const comp = func({
        ...props,
        error: displayError,
        validateFormItem
      }) as any
      const labelStyle: Record<string, any> =
        labelProps.position === 'left' &&
          comp.props.className &&
          (comp.props.className.indexOf('pui-input') >= 0 ||
            comp.props.className.indexOf('pui-textarea') >= 0 ||
            comp.props.className.indexOf('pui-select') >= 0 ||
            comp.props.className.indexOf('pui-date-picker') >= 0 ||
            comp.props.className.indexOf('pui-date-range-picker') >= 0)
          ? { marginTop: defaultSize === 'medium' ? '11px' : '8px' }
          : {}

      labelStyle['fontSize'] = defaultSize === 'medium' ? '16px' : '14px'

      return (
        <div
          className={classNames('pui-form-item', className)}
          style={{
            ...style,
            width:
              width ||
              (filterMode && !['Search', 'Input'].includes(displayName)
                ? 'auto'
                : ''),
            marginLeft: marginLeft || style?.marginLeft,
            marginRight: marginRight || style?.marginRight
          }}
          onKeyUp={() => {
            if (blurTriggered.current || instantValidate) {
              validateFormItem()
            }
          }}
          onBlur={() => {
            if (displayName !== 'Upload') {
              validateFormItem()
            }
          }}
        >
          {label && !filterMode && (
            <Label
              requiredMark={required}
              {...labelProps}
              style={{ ...labelProps.style, ...labelStyle }}
            />
          )}
          {React.cloneElement(comp, {
            style: { width: filterMode ? '' : `calc(100% - ${labelWidth})` }
          })}
          {displayError && displayError.show && (
            <ErrorText {...displayError} label={label} />
          )}
        </div>
      )
    }
