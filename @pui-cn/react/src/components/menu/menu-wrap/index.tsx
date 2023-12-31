import React, { useEffect, useState } from 'react'
import { findIndexes } from '../libs'
import { useDefaultSize } from '../../../shared/hooks'
import { componentClassNames } from '../../../shared/class-util'
import { IMenuContext, MenuProps, MenuItemProps } from '../types'
import { MenuContext } from '..'

const MenuWrap: React.FC<MenuProps> = props => {
  const {
    className,
    mode = 'horizontal',
    style,
    size,
    children,
    activeIndex = '',
    onSelect,
    onClick,
    trigger = 'hover'
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
    if (onClick) {
      onClick()
    }
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick,
    mode,
    trigger,
    selectSubMenus: []
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index: number) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>
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
          size: curSize,
          className: mode === 'dropdown' ? 'dropdown-menu-item' : 'menu-item'
        })

        if (displayName === 'SubMenu') {
          let path = findIndexes([element], currentActive)
          if (passedContext.selectSubMenus?.length) {
            path = [...passedContext.selectSubMenus, ...path]
          }
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

  useEffect(() => {
    setActive(activeIndex)
  }, [activeIndex])

  const Children = renderChildren()
  return (
    <ul className={puiClasses} style={style} data-component="pui-menu">
      <MenuContext.Provider value={passedContext}>
        {Children}
      </MenuContext.Provider>
    </ul>
  )
}

MenuWrap.displayName = 'Menu'

export default MenuWrap
