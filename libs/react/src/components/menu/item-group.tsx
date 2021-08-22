import React, { FunctionComponentElement } from 'react'
import classNames from 'classnames'

import { MenuItemProps } from './menu-item'

export interface ItemGroupProps {
  index?: string
  title: string
  className?: string
}

const ItemGroup: React.FC<ItemGroupProps> = ({
  index,
  title,
  children,
  className
}) => {
  const classes = classNames('menu-item item-group', className, {})

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, child => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          className: 'group-menu-item'
        })
      } else {
        console.error(
          'Warning: SubMenu has a child which is not a MenuItem component'
        )
        return ''
      }
    })
    return <ul className="group-menu">{childrenComponent}</ul>
  }
  return (
    <li key={index} className={classes}>
      <span className="group-title">{title}</span>
      {renderChildren()}
    </li>
  )
}

ItemGroup.displayName = 'ItemGroup'
export default ItemGroup
