import React, {
  ChangeEventHandler,
  CSSProperties,
  useEffect,
  useRef,
  useState
} from 'react'
import { ErrorList } from 'async-validator'
import { validate, RuleItem } from '../../shared/validation-rules'
import { componentClassNames, overrideChildren } from '../../shared/class-util'
import { ButtonProps } from '../button/button'
import { FormErrorText } from '../error-text/error-text'

export interface FormLabelStyle {
  /* 标签位置 */
  position?: 'top' | 'left'

  /* 类名 */
  className?: string

  /* 样式 */
  style?: CSSProperties

  /* 标签位置 */
  textAlign?: 'left' | 'right'

  /* 标签宽度 */
  width?: string
}

export interface FormItemLabelProps extends FormLabelStyle {
  /* Label显示文字 */
  text: string
}

export interface FormProps<T> {
  /* 子组件 */
  children?: React.ReactNode

  /* 类名 */
  className?: string

  /* 样式 */
  style?: CSSProperties

  /* 默认表单数据 */
  defaultData?: T

  /* 表单数据 */
  data?: T

  /* 宽度 */
  width?: string

  /* 高度 */
  height?: string

  /* 行间距 */
  lineGap?: string

  /* 表单内所有Label样式 */
  labelLayout?: FormLabelStyle

  /* 表单名字，可以用Form['{name}']获取表单，调用提交 */
  name?: string

  /* 数据改变回调 */
  onDataChange?: (data: T) => void

  /* 数据提交事件 */
  onSubmit?: (data: T, errors: ErrorList) => void | Promise<any>
}

export interface FormRef {
  data: any
  submit: () => void
}

const Form = <T extends object>({
  className,
  style,
  children,
  defaultData,
  data,
  onDataChange,
  onSubmit,
  name,
  labelLayout,
  width,
  height,
  lineGap
}: FormProps<T>) => {
  const [formData, setFormData] = useState(data || defaultData || {})
  const [formErrors, setFormErrors] = useState([] as ErrorList)
  const formDataValidators = useRef({} as any)
  const shouldAutoValidForm = useRef(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (data) {
      if (shouldAutoValidForm.current) {
        validForm(data)
      }
    }
  }, [data])

  const fData = data || formData

  const validForm = (newFormData: any) => {
    if (shouldAutoValidForm.current) {
      console.log(formDataValidators.current)
      console.log(newFormData)
      validate(formDataValidators.current, newFormData, errorList => {
        setFormErrors(errorList)
      })
    }
  }

  if (name) {
    Form[name] = {
      get data() {
        return fData
      },
      submit() {
        validate(formDataValidators.current, fData, errorList => {
          shouldAutoValidForm.current = true
          setFormErrors(errorList)
          onSubmit && onSubmit(fData as T, errorList)
        })
      }
    }
  }

  const newChildren = overrideChildren(children, (elementName, props) => {
    if (
      elementName === 'Input' ||
      elementName === 'TextArea' ||
      elementName === 'CheckBox' ||
      elementName === 'RadioGroup' ||
      elementName === 'CheckBoxGroup' ||
      elementName === 'DatePicker' ||
      elementName === 'DateRangePicker' ||
      elementName === 'Select' ||
      elementName === 'Switch'
    ) {
      let inputProps = props as {
        name?: string
        names?: string[]
        onChange?: ChangeEventHandler<HTMLInputElement>
        onValueChange?: (val: string) => void
        onValuesChange?: (val: string[]) => void
        label?: FormItemLabelProps | string
        value?: any
        rules?: RuleItem[] | RuleItem
        error?: FormErrorText
        style?: CSSProperties
      }

      if (lineGap) {
        inputProps.style = { marginBottom: lineGap, ...inputProps.style }
      }

      if (inputProps.name || inputProps.names) {
        if (inputProps.name) {
          if (fData[inputProps.name] === undefined) {
            if (elementName === 'CheckBoxGroup') {
              fData[inputProps.name] = []
            } else if (elementName === 'DateRangePicker') {
              fData[inputProps.name] = ['', '']
            } else {
              fData[inputProps.name] = ''
            }
          }
        }

        if (inputProps.names) {
          if (fData[inputProps.names[0]] === undefined) {
            fData[inputProps.names[0]] = ''
          }
          if (fData[inputProps.names[1]] === undefined) {
            fData[inputProps.names[1]] = ''
          }
        }

        inputProps.error = undefined
        if (formErrors) {
          formErrors.forEach(error => {
            if (error.field === inputProps.name) {
              inputProps.error = { show: true, message: error.message }
            }
            if (inputProps.names) {
              if (
                error.field === inputProps.names[0] ||
                error.field === inputProps.names[1]
              ) {
                inputProps.error = { show: true, message: error.message }
              }
            }
          })
        }

        if (inputProps.rules) {
          const updateRule = (rule: RuleItem) => {
            if (
              rule.type === 'number' ||
              rule.type === 'integer' ||
              rule.type === 'float'
            ) {
              rule.transform = value => {
                if (!rule.required && !value) {
                  return ''
                }
                return Number(value)
              }
            }
          }
          if (Array.isArray(inputProps.rules)) {
            inputProps.rules.forEach(rule => {
              updateRule(rule)
            })
          } else {
            updateRule(inputProps.rules)
          }

          if (inputProps.name) {
            formDataValidators.current[inputProps.name] = inputProps.rules
          }

          if (inputProps.names) {
            formDataValidators.current[inputProps.names[0]] = inputProps.rules
            formDataValidators.current[inputProps.names[1]] = inputProps.rules
          }
        }

        if (inputProps.name) {
          inputProps.value = fData[inputProps.name]
        }

        // const clearError = () => {
        //   if (formErrors) {
        //     for (let i = 0; i < formErrors.length; i++) {
        //       if (formErrors[i].field === inputProps.name) {
        //         formErrors.splice(i, 1);
        //         setFormErrors(formErrors);
        //         break;
        //       }
        //     }
        //   }
        // };

        const formItemOnChange = inputProps.onChange
        const formItemOnValueChange = inputProps.onValueChange
        const formItemOnValuesChange = inputProps.onValuesChange

        if (['CheckBox'].includes(elementName)) {
          inputProps.onChange = evt => {
            const newFormData = {
              ...fData,
              [inputProps.name!]: evt.target.value
            }
            if (data === undefined) {
              setFormData(newFormData)
            }
            onDataChange && onDataChange(newFormData as T)
            formItemOnChange && formItemOnChange(evt)
            validForm(newFormData)
          }
        } else if (
          [
            'RadioGroup',
            'CheckBoxGroup',
            'DatePicker',
            'DateRangePicker',
            'Select',
            'Switch',
            'Input',
            'TextArea'
          ].includes(elementName)
        ) {
          inputProps[
            elementName === 'DateRangePicker'
              ? 'onValuesChange'
              : 'onValueChange'
          ] = value => {
            let newFormData = fData
            if (inputProps.name) {
              newFormData = { ...fData, [inputProps.name]: value }
            }
            if (elementName === 'DateRangePicker') {
              const names = (inputProps as any).names
              if (names) {
                newFormData = {
                  ...newFormData,
                  [names[0]]: value[0],
                  [names[1]]: value[1]
                }
              }
            }
            if (data === undefined) {
              setFormData(newFormData)
            }
            onDataChange && onDataChange(newFormData as T)
            formItemOnValueChange && formItemOnValueChange(value as string)
            formItemOnValuesChange && formItemOnValuesChange(value as string[])
            validForm(newFormData)
          }
        }
      }

      const combinedLabelStyle: FormItemLabelProps =
        typeof inputProps.label === 'object'
          ? { ...labelLayout, ...inputProps.label }
          : { ...labelLayout, text: inputProps.label || '' }
      inputProps = {
        ...inputProps,
        label: combinedLabelStyle
      }

      return inputProps
    } else if (elementName === 'ButtonGroup') {
      let inputProps = props
      const combinedLabelStyle: FormItemLabelProps =
        typeof inputProps.label === 'object'
          ? { ...labelLayout, ...inputProps.label }
          : { ...labelLayout, text: inputProps.label || '' }
      inputProps = {
        ...inputProps,
        label: combinedLabelStyle
      }
      return inputProps
    } else if (elementName === 'Button') {
      const buttonProps = props as ButtonProps
      if (buttonProps.submit) {
        const buttonOnClick = buttonProps.onClick
        if (buttonProps.loading === undefined) {
          buttonProps.loading = submitting
        }
        buttonProps.onClick = evt => {
          buttonOnClick && buttonOnClick(evt)
          validate(formDataValidators.current, fData, errorList => {
            shouldAutoValidForm.current = true
            setFormErrors(errorList)
            if (onSubmit) {
              const loadingPromise = onSubmit(fData as T, errorList)
              if (loadingPromise && typeof loadingPromise === 'object') {
                setSubmitting(true)
                ;(loadingPromise as unknown as Promise<unknown>).then(() => {
                  buttonProps.loading = false
                  setSubmitting(false)
                })
              }
            }
          })
        }
      }
      return buttonProps
    }
    return props
  })

  return (
    <div
      className={componentClassNames('pui-form', {}, className)}
      style={{ width, height, ...style }}
    >
      {newChildren}
    </div>
  )
}

export { Form }
