import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import {
  useClickOutside,
  useElementPos,
  usePopShowState
} from '../../shared/hooks'
import { MenuProps } from '../menu/types'
import './dropdown.scss'

type OverlayFunc = () => React.ReactElement
type triggerType = 'hover' | 'click'
export interface DropdownConfig {
  /** 菜单 */
  overlay: React.ReactElement | OverlayFunc
  /** 下拉根元素的类名称 */
  overlayClassName?: string
  /** 下拉根元素的类样式 */
  overlayStyle?: React.CSSProperties
  /** 菜单是否显示 */
  visible?: boolean
  /** 菜单是否禁用 */
  disabled?: boolean
  /** 触发下拉行为 */
  trigger?: triggerType
}

export const Dropdown: React.FC<DropdownConfig> = props => {
  const {
    overlay,
    overlayClassName,
    overlayStyle,
    children,
    trigger = 'hover',
    visible = false,
    disabled
  } = props
  const rootElementRef = useRef<any>(null)
  const [showDropdown, setShowDropdown] = useState(visible)
  const [menuPos, updatePos] = useElementPos(rootElementRef)
  const [showOptionList, setShowOptionList, puiPopupWrap] = usePopShowState(
    () => {
      if (showDropdown) {
        setShowDropdown(false)
      }
    }
  )
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowDropdown(!showDropdown)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setShowDropdown(toggle)
    }, 300)
  }

  const clickEvents =
    trigger === 'click' && !disabled ? { onClick: handleClick } : {}
  const hoverEvents =
    trigger === 'hover' && !disabled
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
          }
        }
      : {}
  const renderChildren = () => {
    const dropdownClasses = classnames('pui-dropdown-menu', overlayClassName, {
      'pui-dropdown-open': showDropdown
    })
    const childrenComponent = React.Children.map(overlay, child => {
      const childElement = child as React.FunctionComponentElement<MenuProps>
      const { displayName } = childElement.type
      if (displayName === 'Menu') {
        return React.cloneElement(childElement, {
          mode: 'dropdown'
        })
      } else {
        console.error('Warning: overlay is not a Menu component')
      }
      return null
    })
    const contentList = (
      <div
        className={dropdownClasses}
        style={{ position: 'absolute', ...menuPos, ...overlayStyle }}
      >
        {childrenComponent}
      </div>
    )
    if (showDropdown) {
      return ReactDOM.createPortal(contentList, puiPopupWrap)
    }
    return null
  }
  const componentRef = useRef<HTMLDivElement>(null)
  useClickOutside(componentRef, () => setShowDropdown(false))
  const Children = renderChildren()
  return (
    <div
      {...hoverEvents}
      className="pui-dropdown"
      ref={rootElement => {
        if (rootElement) {
          rootElementRef.current = rootElement
        }
      }}
    >
      <div className="pui-dropdown-trigger" {...clickEvents} ref={componentRef}>
        {children}
      </div>

      {Children}
    </div>
  )
}
