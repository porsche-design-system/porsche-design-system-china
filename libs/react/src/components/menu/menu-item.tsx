import React, { useContext } from 'react'
import classNames from 'classnames'
import { IconCheck } from '@pui/icons'
import { MenuContext } from './menu'

export interface MenuItemProps {
  index?: string
  icon?: React.ReactElement
  disabled?: boolean
  divider?: boolean
  selectAfter?: boolean
  className?: string
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const {
    index,
    disabled,
    className,
    style,
    children,
    icon,
    divider,
    selectAfter
  } = props
  const context = useContext(MenuContext)
  const classes = classNames(className, {
    'is-disabled': disabled,
    'is-divider': context.mode === 'dropdown' && divider,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
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
