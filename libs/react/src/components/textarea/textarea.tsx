import React, {
  ChangeEventHandler,
  CompositionEventHandler,
  CSSProperties,
  FocusEventHandler,
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

  /* 类名 */
  className?: string

  /* 样式 */
  style?: CSSProperties

  /** 大小 */
  size?: 'medium' | 'small'

  /* 标签 */
  label?: FormItemLabelProps | string

  /* 占位符 */
  placeholder?: string

  /* 错误 */
  error?: FormErrorText

  /* 最多输入字符 */
  maxLength?: number

  /* 是否禁用 */
  disabled?: boolean

  /* 表单绑定key，需要配合<Form>使用 */
  name?: string

  /* 默认值 */
  defaultValue?: string

  /* 值 */
  value?: string

  /* 控件值改变事件 */
  onChange?: ChangeEventHandler

  /* 值改变事件 */
  onValueChange?: (value: string, isComposing?: boolean) => void

  /* 输入框失去焦点事件 */
  onBlur?: FocusEventHandler<HTMLTextAreaElement>

  /* 中文打字开始 */
  onCompositionStart?: CompositionEventHandler<HTMLTextAreaElement>

  /* 中文打字结束 */
  onCompositionEnd?: CompositionEventHandler<HTMLTextAreaElement>
}

/**
 * Primary UI component for user interaction
 */
const TextArea = FormItem(
  ({
    className,
    size,
    placeholder,
    error,
    defaultValue,
    value,
    disabled = false,
    maxLength,
    onChange,
    onValueChange,
    onCompositionStart,
    onCompositionEnd,
    onBlur
  }: TextAreaProps) => {
    const [valueLength, setValueLength] = useState(0)
    const [defaultSize] = useDefaultSize()
    const isCompositionStarted = useRef(false)

    size = size || defaultSize

    const updateHeight = (element: HTMLTextAreaElement) => {
      element.style.height = '5px'
      element.style.height = element.scrollHeight + 20 + 'px'
    }

    return (
      <div
        className={componentClassNames(
          'pui-textarea',
          { size, error: error ? error.show + '' : 'false' },
          className
        )}
      >
        <textarea
          value={value}
          defaultValue={defaultValue}
          onCompositionStart={(evt: any) => {
            isCompositionStarted.current = true
            onCompositionStart && onCompositionStart(evt)
          }}
          onCompositionEnd={(evt: any) => {
            if (isCompositionStarted.current) {
              onValueChange && onValueChange(evt.target.value, false)
              isCompositionStarted.current = false
            }
            onCompositionEnd && onCompositionEnd(evt)
          }}
          ref={(element: HTMLTextAreaElement) => {
            if (maxLength && element) {
              updateHeight(element)
            }
          }}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={evt => {
            onChange && onChange(evt)
            onValueChange &&
              onValueChange(evt.target.value, isCompositionStarted.current)
          }}
          disabled={disabled}
          onInput={event => {
            if (maxLength) {
              const inputLength = (event.target as any).value.length
              setValueLength(inputLength < maxLength ? inputLength : maxLength)
              if (maxLength) {
                const element = event.target as HTMLTextAreaElement
                updateHeight(element)
              }
            }
          }}
          onBlur={onBlur}
        />
        {maxLength && (
          <div className="pui-textarea-char-count">
            {valueLength > 0 && valueLength}
            <span>
              {valueLength === 0 && valueLength}/{maxLength}
            </span>
          </div>
        )}
      </div>
    )
  }
)

;(TextArea as any).displayName = 'TextArea'
export { TextArea }
