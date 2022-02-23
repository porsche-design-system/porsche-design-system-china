import React, { useState } from 'react'
import { findIndexs } from '../libs'
import { useDefaultSize } from '../../../shared/hooks'
import { componentClassNames } from '../../../shared/class-util'
import { IMenuContext, MenuProps, MenuItemProps } from '../types'
import { MenuContext } from '../index'

const Menu: React.FC<MenuProps> = props => {
  const {
    className,
    mode = 'horizontal',
    style,
    size,
    children,
    activeIndex = '',
    onSelect
  } = props
  const [currentActive, setActive] = useState(activeIndex)
  const [defaultSize] = useDefaultSize()
  const curSize = size || defaultSize

  const puiClasses = componentClassNames(
    'pui-menu',
    { size: curSize, mode },
    className
  )
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick,
    mode,
    selectSubMenus: []
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index: number) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (!childElement) {
        return null
      }
      const { displayName } = childElement.type
      if (
        displayName === 'MenuItem' ||
        displayName === 'SubMenu' ||
        displayName === 'ItemGroup'
      ) {
        const element = React.cloneElement(childElement, {
          index: childElement.props.index || index.toString(),
          className: mode === 'dropdown' ? 'dropdown-menu-item' : 'menu-item'
        })

        if (displayName === 'SubMenu') {
          const path = findIndexs([element], currentActive)
          passedContext.selectSubMenus = path
        }

        return element
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component'
        )
      }
      return null
    })
  }

  const Children = renderChildren()
  return (
    <ul className={puiClasses} style={style} data-component="pui-menu">
      <MenuContext.Provider value={passedContext}>
        {Children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.displayName = 'Menu'

export default Menu
