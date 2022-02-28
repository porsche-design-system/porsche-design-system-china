import React, {
  ChangeEventHandler,
  FocusEventHandler,
  CSSProperties,
  useEffect,
  useRef,
  useState,
  CompositionEventHandler
} from 'react'
import { IconErrorFilled, IconView, IconViewOff } from '@pui/icons'
import { componentClassNames } from '../../shared/class-util'
import { FormItem } from '../form/form-item'
import { FormErrorText } from '../error-text/error-text'
import { useDefaultSize } from '../../shared/hooks'

import './input.scss'

export interface InputProps {
  /* 类名 */
  className?: string

  /* 样式 */
  style?: CSSProperties

  /* 类型 */
  type?: 'text' | 'password'

  /* 默认输入值 */
  defaultValue?: string

  /* 输入值 */
  value?: string

  /* 占位符 */
  placeholder?: string

  /* 大小 */
  size?: 'small' | 'medium'

  /* 最多输入字符数 */
  maxLength?: number

  /* 错误 */
  error?: FormErrorText

  /* 是否禁用 */
  disabled?: boolean

  /* 控件值改变事件 */
  onChange?: ChangeEventHandler<HTMLInputElement>

  /* 输入框失去焦点事件 */
  onBlur?: FocusEventHandler<HTMLInputElement>

  /* 输入框获取焦点事件 */
  onFocus?: FocusEventHandler<HTMLInputElement>

  /* 回车事件 */
  onEnter?: (value: string) => void

  /* 值改变事件 */
  onValueChange?: (value: string, isComposing?: boolean) => void

  /* 显示清除按钮 */
  showClearButton?: boolean

  /* 显示密码按钮 */
  showViewPasswordButton?: boolean

  /* 不显示最大长度文字提示 */
  hideMaxLengthText?: boolean

  /* 中文打字开始 */
  onCompositionStart?: CompositionEventHandler<HTMLInputElement>

  /* 中文打字结束 */
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement>
}

/**
 * Primary UI component for user interaction
 */
const Input = FormItem(
  ({
    className,
    type = 'text',
    placeholder,
    maxLength,
    disabled = false,
    size,
    defaultValue,
    value,
    onChange,
    error,
    hideMaxLengthText = false,
    onValueChange,
    onBlur,
    onFocus,
    onEnter,
    showClearButton,
    showViewPasswordButton,
    onCompositionStart,
    onCompositionEnd
  }: InputProps) => {
    const [, setForceUpdate] = useState(0)
    const [valueLength, setValueLength] = useState(0)
    const [inputType, setInputType] = useState(type)
    const inputReference = useRef<HTMLInputElement>()
    const [defaultSize] = useDefaultSize()
    const isCompositionStarted = useRef(false)

    size = size || defaultSize

    useEffect(() => {
      setInputType(type)
    }, [type])

    const displayValueLength = value !== undefined ? value.length : valueLength

    return (
      <div
        className={componentClassNames('pui-input', {
          error: error ? error.show + '' : 'false',
          'show-right-button': (showClearButton || showViewPasswordButton) + '',
          size
        })}
      >
        <input
          ref={(inputRef: HTMLInputElement) => {
            inputReference.current = inputRef
            if (inputRef && maxLength) {
              inputRef.style.paddingRight =
                (maxLength + '').length * 23 + 12 + 'px'
            }
          }}
          placeholder={placeholder}
          maxLength={maxLength}
          type={inputType}
          onCompositionStart={(evt: any) => {
            isCompositionStarted.current = true
            onCompositionStart && onCompositionStart(evt)
            setForceUpdate(Math.random())
          }}
          onCompositionEnd={(evt: any) => {
            if (isCompositionStarted.current) {
              onValueChange && onValueChange(evt.target.value, false)
              isCompositionStarted.current = false
            }
            onCompositionEnd && onCompositionEnd(evt)
          }}
          onChange={evt => {
            onChange && onChange(evt)
            onValueChange &&
              onValueChange(evt.target.value, isCompositionStarted.current)
          }}
          disabled={disabled}
          value={value}
          className={className}
          defaultValue={defaultValue}
          onInput={event => {
            const inputLength = (event.target as any).value.length
            if (maxLength) {
              setValueLength(inputLength < maxLength ? inputLength : maxLength)
            }
            if (showClearButton) {
              setValueLength(inputLength)
            }
          }}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              const target = event.target as HTMLInputElement
              onEnter && onEnter(target.value)
            }
          }}
        />
        {maxLength &&
          !showClearButton &&
          !showViewPasswordButton &&
          !hideMaxLengthText && (
            <div className="pui-input-char-count">
              {displayValueLength > 0 && displayValueLength}
              <span>
                {displayValueLength === 0 && displayValueLength}/{maxLength}
              </span>
            </div>
          )}
        {showClearButton && valueLength > 0 && (
          <IconErrorFilled
            className="pui-input-right-button pui-input-clear"
            onClick={() => {
              inputReference.current!.value = ''
              onChange && onChange({ target: inputReference.current } as any)
              onValueChange && onValueChange('')
              setValueLength(0)
            }}
          />
        )}
        {showViewPasswordButton &&
          type === 'password' &&
          (inputType === 'password' ? (
            <IconView
              onClick={() => {
                setInputType('text')
              }}
              className="pui-input-right-button pui-input-view"
            />
          ) : (
            <IconViewOff
              onClick={() => {
                setInputType('password')
              }}
              className="pui-input-right-button pui-input-view"
            />
          ))}
      </div>
    )
  }
)
;(Input as any).displayName = 'Input'
export { Input }
