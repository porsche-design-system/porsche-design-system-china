import React, { useContext } from 'react'
import classNames from 'classnames'
import { IconCheck } from '@pui/icons'
import { MenuContext } from '../index'
import { MenuItemProps } from '../types'

const MenuItem: React.FC<MenuItemProps> = ({
  index,
  disabled,
  className,
  style,
  children,
  icon,
  divider,
  selectAfter,
  onClick,
  visible = true
}) => {
  const context = useContext(MenuContext)
  const classes = classNames(className, {
    'is-disabled': disabled,
    'is-visible': !visible,
    'is-divider': context.mode === 'dropdown' && divider,
    'is-active': context.index === index
  })
  const handleClick = (event: any) => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index)
      onClick && onClick(event)
    }
  }
  return (
    <li
      className={classes}
      style={style}
      onClick={handleClick}
      data-index={index}
    >
      <span className="menu-title-content">
        {icon}
        {children}
      </span>
      {selectAfter && context.index === index && (
        <span>
          <IconCheck />
        </span>
      )}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem
