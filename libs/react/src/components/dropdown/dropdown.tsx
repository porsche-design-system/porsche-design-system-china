import React, { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'
import { useClickOutside } from '../../shared/hooks'
import { MenuProps } from '../menu/menu'
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
    trigger,
    visible,
    disabled
  } = props
  const [showDropdown, setShowDropdown] = useState(visible || false)

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

  const renderMenu = () => {
    return React.Children.map(overlay, child => {
      const childElement = child as React.FunctionComponentElement<MenuProps>
      const { displayName } = childElement.type
      if (displayName === 'Menu') {
        return React.cloneElement(childElement, {
          mode: 'dropdown'
        })
      } else {
        console.error('Warning: overlay is not a Menu component')
      }
    })
  }

  const generateDropdown = () => {
    return (
      <CSSTransition
        in={showDropdown}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => setShowDropdown(false)}
      >
        <>{renderMenu()}</>
      </CSSTransition>
    )
  }

  const dropdownClasses = classnames('pui-dropdown-menu', overlayClassName, {
    'pui-dropdown-open': showDropdown
  })

  const componentRef = useRef<HTMLDivElement>(null)
  useClickOutside(componentRef, () => setShowDropdown(false))

  return (
    <div className="pui-dropdown" {...hoverEvents}>
      <div className="pui-dropdown-trigger" {...clickEvents} ref={componentRef}>
        {children}
      </div>
      <div className={dropdownClasses} style={overlayStyle}>
        {generateDropdown()}
      </div>
    </div>
  )
}

Dropdown.defaultProps = {
  trigger: 'hover'
}
