import React, {
  ChangeEventHandler,
  createContext,
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import { ErrorList } from 'async-validator'
import { validate, RuleItem } from '../../shared/validation-rules'
import { componentClassNames } from '../../shared/class-util'
import { ButtonProps } from '../button/button'
import { FormErrorText } from '../error-text/error-text'
import {
  valueOfKeys,
  assignValidatorValue,
  assignValue
} from '../../shared/string-util'

export interface FormLabelStyle {
  /** 标签位置 */
  position?: 'top' | 'left'

  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 标签位置 */
  textAlign?: 'left' | 'right'

  /** 标签宽度 */
  width?: string

  /** 是否显示必填标记（*） */
  requiredMark?: boolean
}

export interface FormItemLabelProps extends FormLabelStyle {
  /** Label显示文字 */
  text: ReactNode
  /** 是否显示必填标记（*） */
  requiredMark?: boolean
}

export interface FormProps<T> {
  /** 子组件 */
  children?: React.ReactNode

  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 默认表单数据 */
  defaultData?: T

  /** 表单数据 */
  data?: T

  /** 宽度 */
  width?: string

  /** 高度 */
  height?: string

  /** 表单内控件的统一样式 */
  itemStyle?: CSSProperties

  /** 表单内控件的统一样式类 */
  itemClassName?: string

  /** 表单内所有Label样式 */
  labelLayout?: FormLabelStyle

  /** 表单名字，可以用Form.findByName('{FORM_NAME}')获取表单，调用提交 */
  name?: string

  /** 过滤器模式 */
  filterMode?: boolean

  /** 数据改变回调 */
  onDataChange?: (data: T) => void

  /** 数据提交事件 */
  onSubmit?: (data: T, errors: ErrorList | null) => void | Promise<any>
}

export interface FormRef {
  data: any
  submit: () => void
}

interface FormContextProps {
  fData: any
  itemStyle?: CSSProperties
  itemClassName?: string
  filterMode?: boolean
  setFormData: (data: any) => void
  formErrors: ErrorList
  formDataValidators: any
  data: any
  onDataChange?: (data: any) => void
  validForm: (newFormData: any) => void
  labelLayout?: FormLabelStyle
  submitting: boolean
  setSubmitting: (b: boolean) => void
  shouldAutoValidForm: any
  setFormErrors: (errorList: ErrorList) => void
  onSubmit?: (data: any, errors: ErrorList | null) => void | Promise<any>
}
export const FormContext = createContext<FormContextProps>(null as any)

export const overrideProps = (
  elementName: string,
  props: any,
  formContext: FormContextProps
) => {
  const {
    fData,
    itemStyle,
    itemClassName,
    filterMode,
    setFormData,
    formErrors,
    formDataValidators,
    data,
    onDataChange,
    validForm,
    labelLayout,
    submitting,
    setSubmitting,
    shouldAutoValidForm,
    setFormErrors,
    onSubmit
  } = formContext

  if (
    elementName === 'Search' ||
    elementName === 'Input' ||
    elementName === 'InputNumber' ||
    elementName === 'TextArea' ||
    elementName === 'CheckBox' ||
    elementName === 'RadioGroup' ||
    elementName === 'CheckBoxGroup' ||
    elementName === 'DatePicker' ||
    elementName === 'DateRangePicker' ||
    elementName === 'MonthRangePicker' ||
    elementName === 'Select' ||
    elementName === 'MultiSelect' ||
    elementName === 'Switch' ||
    elementName === 'CustomPicker' ||
    elementName === 'Upload' ||
    elementName === 'DateTimePicker'
  ) {
    let inputProps = props as {
      name?: string
      nameStartDate?: string
      nameEndDate?: string
      filterMode?: boolean
      className?: string
      onChange?: ChangeEventHandler<HTMLInputElement>
      onValueChange?: (val: string) => void
      checked: boolean
      onCheckedChange?: (val: boolean) => void
      label?: FormItemLabelProps | string
      value?: any
      rules?: RuleItem[] | RuleItem
      error?: FormErrorText
      style?: CSSProperties
      requiredMark?: boolean
    }

    if (itemStyle) {
      inputProps.style = { ...itemStyle, ...inputProps.style }
    }

    if (itemClassName) {
      inputProps.className = itemClassName + ' ' + inputProps.className
    }

    if (inputProps.filterMode === undefined) {
      inputProps.filterMode = filterMode
    }

    if (inputProps.name || inputProps.nameStartDate || inputProps.nameEndDate) {
      if (inputProps.name) {
        if (valueOfKeys(fData, inputProps.name) === undefined) {
          if (elementName === 'CheckBoxGroup') {
            assignValue(fData, inputProps.name, [])
          } else if (
            elementName === 'DateRangePicker' ||
            elementName === 'MonthRangePicker'
          ) {
            assignValue(fData, inputProps.name, ['', ''])
          } else if (elementName === 'CheckBox') {
            assignValue(fData, inputProps.name, false)
          } else {
            assignValue(fData, inputProps.name, '')
          }
        }
      }

      if (inputProps.nameStartDate) {
        if (fData[inputProps.nameStartDate] === undefined) {
          fData[inputProps.nameStartDate] = ''
        }
      }

      if (inputProps.nameEndDate) {
        if (fData[inputProps.nameEndDate] === undefined) {
          fData[inputProps.nameEndDate] = ''
        }
      }

      inputProps.error = undefined
      if (formErrors) {
        formErrors.forEach(error => {
          if ((error.field || '').split('.')[0] === inputProps.name) {
            inputProps.error = { show: true, message: error.message }
          }
          if (
            error.field === inputProps.nameStartDate ||
            error.field === inputProps.nameEndDate
          ) {
            inputProps.error = { show: true, message: error.message }
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
          assignValidatorValue(
            formDataValidators,
            inputProps.name,
            inputProps.rules
          )
        }

        if (inputProps.nameStartDate) {
          assignValidatorValue(
            formDataValidators,
            inputProps.nameStartDate,
            inputProps.rules
          )
        }
        if (inputProps.nameEndDate) {
          assignValidatorValue(
            formDataValidators,
            inputProps.nameEndDate,
            inputProps.rules
          )
        }
      }

      if (inputProps.name) {
        if (elementName === 'CheckBox') {
          inputProps.checked = valueOfKeys(fData, inputProps.name)
        } else if (elementName === 'Upload') {
          ;(inputProps as any).fileList = fData[inputProps.name]
        } else {
          inputProps.value = valueOfKeys(fData, inputProps.name)
        }
      }

      if (inputProps.nameStartDate) {
        if (!inputProps.value) {
          inputProps.value = ['', '']
        }
        inputProps.value = [
          valueOfKeys(fData, inputProps.nameStartDate),
          inputProps.value[1]
        ]
      }
      if (inputProps.nameEndDate) {
        if (!inputProps.value) {
          inputProps.value = ['', '']
        }
        inputProps.value = [
          inputProps.value[0],
          valueOfKeys(fData, inputProps.nameEndDate)
        ]
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

      const formItemOnValueChange = inputProps.onValueChange
      if (['CheckBox'].includes(elementName)) {
        const formItemOnCheckedChange = inputProps.onCheckedChange
        inputProps.onCheckedChange = val => {
          const newFormData = { ...fData }
          assignValue(
            newFormData,
            inputProps.name!,
            val
              ? inputProps.value || val
              : inputProps.value !== undefined
              ? ''
              : false
          )
          if (data === undefined) {
            setFormData(newFormData)
          }
          onDataChange && onDataChange(newFormData)
          formItemOnCheckedChange && formItemOnCheckedChange(val)
          validForm(newFormData)
        }
      } else if (
        [
          'RadioGroup',
          'CheckBoxGroup',
          'DatePicker',
          'DateRangePicker',
          'MonthRangePicker',
          'Select',
          'MultiSelect',
          'Switch',
          'Input',
          'InputNumber',
          'TextArea',
          'Search',
          'CustomPicker',
          'DateTimePicker',
          'Upload'
        ].includes(elementName)
      ) {
        inputProps.onValueChange = value => {
          const newFormData = { ...fData }
          if (inputProps.name) {
            assignValue(newFormData, inputProps.name, value)
          }
          if (
            elementName === 'DateRangePicker' ||
            elementName === 'MonthRangePicker' ||
            elementName === 'DateTimePicker'
          ) {
            if (inputProps.nameStartDate) {
              assignValue(newFormData, inputProps.nameStartDate, value[0])
            }
            if (inputProps.nameEndDate) {
              assignValue(newFormData, inputProps.nameEndDate, value[1])
            }
          }

          if (data === undefined) {
            setFormData(newFormData)
          }

          onDataChange && onDataChange(newFormData)
          formItemOnValueChange && formItemOnValueChange(value as string)
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
        validate(formDataValidators, fData, errorList => {
          shouldAutoValidForm.current = true
          setFormErrors(errorList ? [...errorList] : [])
          if (onSubmit) {
            const loadingPromise = onSubmit(fData, errorList)
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
}

function Form<T = any>({
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
  itemStyle,
  itemClassName,
  filterMode
}: FormProps<T>) {
  const [formData, setFormData] = useState(data || defaultData || {})
  const [formErrors, setFormErrors] = useState([] as ErrorList)
  const formDataValidators = {}
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
      validate(formDataValidators, newFormData, errorList => {
        setFormErrors(errorList ? [...errorList] : [])
      })
    }
  }

  if (name) {
    ;(Form as any)[name] = {
      getData() {
        return fData
      },
      submit() {
        let submitReturn: any

        validate(formDataValidators, fData, errorList => {
          shouldAutoValidForm.current = true
          setFormErrors(errorList ? [...errorList] : [])
          if (onSubmit) {
            submitReturn = onSubmit(fData as T, errorList)
          }
        })
        return submitReturn
      },
      validate(callback?: (errorList: ErrorList) => void) {
        validate(formDataValidators, fData, errorList => {
          shouldAutoValidForm.current = true
          callback && callback(errorList)
        })
      },
      reset() {
        setFormData({})
      },
      setData(data: any) {
        setFormData(data)
      },
      setFormErrors(errorList: ErrorList) {
        setFormErrors(errorList)
      },
      getFormErrors() {
        return formErrors
      }
    }
  }

  return (
    <FormContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        fData,
        itemStyle,
        itemClassName,
        filterMode,
        setFormData,
        formErrors,
        formDataValidators,
        data,
        onDataChange,
        validForm,
        labelLayout,
        submitting,
        setSubmitting,
        shouldAutoValidForm,
        setFormErrors,
        onSubmit
      }}
    >
      <div
        className={componentClassNames('pui-form', {}, className)}
        style={{ width, height, ...style }}
      >
        {children}
      </div>
    </FormContext.Provider>
  )
}

Form.findByName = (name: string) => {
  return (Form as any)[name] as {
    submit: () => void | Promise<any>
    reset: () => void
    setData: (data: any) => void
    getData: () => any
    validate: (callback?: (errorList: ErrorList) => void) => void
    setFormErrors: (errorList: ErrorList) => void
    getFormErrors: () => ErrorList
  }
}

export { Form }
