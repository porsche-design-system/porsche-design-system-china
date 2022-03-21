import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import { getLabelWidth, Label, getLabelProps } from '../label/label'
import { FormItemLabelProps } from './form'
import { ErrorText, FormErrorText } from '../error-text/error-text'
import { RuleItem, validate } from '../../shared/validation-rules'
import { useDefaultSize } from '../../shared/hooks'

import './form-item.scss'

export interface FormItemProps {
  /** 标签 */
  label?: string | FormItemLabelProps | ReactNode

  /** 表单绑定key，需要配合<Form>使用 */
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
}

export const FormItem =
  <T,>(func: (...args: T[]) => React.ReactNode) =>
  (props: FormItemProps & T) => {
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
      name
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

    const validateFormItem = () => {
      const validateValue = Array.isArray((props as any).value)
        ? (props as any).value[0]
        : (props as any).value

      if (rules && name) {
        validate({ [name]: rules }, { [name]: validateValue }, errorList => {
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

    const comp = func({ ...props, error: displayError }) as any
    const labelStyle =
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
          width: width || (filterMode ? 'auto' : ''),
          marginLeft: marginLeft || style?.marginLeft,
          marginRight: marginRight || style?.marginRight
        }}
        onKeyUp={() => {
          if (blurTriggered.current) {
            validateFormItem()
          }
        }}
        onBlur={validateFormItem}
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
