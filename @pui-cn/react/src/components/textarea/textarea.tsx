import React, {
  ChangeEventHandler,
  CompositionEventHandler,
  CSSProperties,
  FocusEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import { useDefaultSize } from '../../shared/hooks'
import { componentClassNames } from '../../shared/class-util'
import { FormErrorText } from '../error-text/error-text'
import { FormItemLabelProps } from '../form/form'
import { FormItem } from '../form/form-item'
import './textarea.scss'

export interface TextAreaProps {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 大小 */
  size?: 'medium' | 'small'

  /** 标签 */
  label?: FormItemLabelProps | string | ReactNode

  /** 占位符 */
  placeholder?: string

  /** 错误 */
  error?: FormErrorText

  /** 最多输入字符 */
  maxLength?: number

  /** hide"最多输入字符" dom */
  hideMaxLength?: boolean

  /** 是否禁用 */
  disabled?: boolean

  /** 只读 */
  readOnly?: boolean

  /** 表单绑定key，需要配合&lt;Form&gt;使用 */
  name?: string

  /** 默认值 */
  defaultValue?: string

  /** 值 */
  value?: string

  /** 控件值改变事件 */
  onChange?: ChangeEventHandler

  /** 输入框获取焦点事件 */
  onFocus?: FocusEventHandler<HTMLTextAreaElement>

  /** 值改变事件 */
  onValueChange?: (value: string) => void

  /* 输入框失去焦点事件 */
  onBlur?: FocusEventHandler<HTMLTextAreaElement>

  /** 中文打字开始 */
  onCompositionStart?: CompositionEventHandler<HTMLTextAreaElement>

  /** 中文打字结束 */
  onCompositionEnd?: CompositionEventHandler<HTMLTextAreaElement>

  /** 自动调节高度 */
  autoAdjustHeight?: boolean

  /** 默认高度（行数） */
  defaultHeightOfRow?: number

  /** 只有获得焦点的时候显示输入字符数 */
  showCharCountOnFocus?: boolean
}

/**
 * Primary UI component for user interaction
 */
const TextArea = FormItem(
  ({
    size,
    placeholder,
    error,
    defaultValue,
    value,
    disabled = false,
    maxLength,
    hideMaxLength = false,
    onFocus,
    onChange,
    onValueChange,
    onCompositionStart,
    onCompositionEnd,
    autoAdjustHeight = false,
    defaultHeightOfRow,
    showCharCountOnFocus = false,
    onBlur,
    readOnly
  }: TextAreaProps) => {
    if (value === null) {
      value = undefined
    }
    const [valueLength, setValueLength] = useState(
      (value || defaultValue || '').length
    )
    const [defaultSize] = useDefaultSize()
    const isCompositionStarted = useRef(false)
    const [internalValue, setInternalValue] = useState('')
    const [, setUpdate] = useState(0)
    const [isFocus, setIsFocus] = useState(false)

    size = size || defaultSize

    const updateHeight = (element: HTMLTextAreaElement) => {
      element.style.height = '5px'
      element.style.height = element.scrollHeight + (maxLength ? 20 : 2) + 'px'
      element.style.overflow = 'hidden'
    }

    if (isCompositionStarted.current && value !== undefined) {
      value = internalValue
    }

    useEffect(() => {
      setValueLength((value || '').length)
    }, [value])

    return (
      <div
        className={componentClassNames('pui-textarea', {
          size,
          error: error ? error.show + '' : 'false'
        })}
      >
        <textarea
          readOnly={readOnly}
          value={value}
          defaultValue={defaultValue}
          onCompositionStart={(evt: any) => {
            isCompositionStarted.current = true
            onCompositionStart && onCompositionStart(evt)
          }}
          onCompositionEnd={(evt: any) => {
            if (isCompositionStarted.current) {
              onChange && onChange(evt)
              onValueChange && onValueChange(evt.target.value)
              isCompositionStarted.current = false
              setUpdate(Math.random())
            }
            onCompositionEnd && onCompositionEnd(evt)
          }}
          ref={(element: HTMLTextAreaElement) => {
            if (autoAdjustHeight && element) {
              updateHeight(element)
            }
          }}
          style={{
            minHeight: defaultHeightOfRow
              ? defaultHeightOfRow * (size === 'small' ? 22 : 24) + 'px'
              : undefined
          }}
          maxLength={maxLength}
          placeholder={placeholder}
          onFocus={evt => {
            setIsFocus(true)
            onFocus && onFocus(evt)
          }}
          onChange={evt => {
            if (isCompositionStarted.current) {
              setInternalValue(evt.target.value)
              return
            }
            onChange && onChange(evt)
            onValueChange && onValueChange(evt.target.value)
          }}
          disabled={disabled}
          onKeyUp={event => {
            if (maxLength) {
              const inputLength = (event.target as any).value.length
              setValueLength(inputLength < maxLength ? inputLength : maxLength)
            }
            if (autoAdjustHeight) {
              const element = event.target as HTMLTextAreaElement
              updateHeight(element)
            }
          }}
          onBlur={evt => {
            setIsFocus(false)
            onBlur && onBlur(evt)
          }}
          onInput={event => {
            if (autoAdjustHeight) {
              const element = event.target as HTMLTextAreaElement
              updateHeight(element)
            }
          }}
        />
        {maxLength &&
          !hideMaxLength &&
          ((showCharCountOnFocus && isFocus) || !showCharCountOnFocus) && (
            <div className="pui-textarea-char-count">
              {valueLength > 0 && valueLength}
              <span>
                {valueLength === 0 && valueLength}/{maxLength}
              </span>
            </div>
          )}
      </div>
    )
  },
  'TextArea'
)

export { TextArea }
