import React, { createContext, useState, CSSProperties } from 'react'
import classnames from 'classnames'
import { MenuItemProps } from './menu-item'
import './menu.scss'

type MenuMode = 'horizontal' | 'vertical' | 'dropdown'
export interface MenuProps {
  /** 默认 active 的菜单项的索引值 */
  defaultIndex?: string
  /** 菜单根元素的类名称 */
  className?: string
  /** 菜单类型 横向或者纵向 */
  mode?: MenuMode
  /** 菜单根元素的样式 */
  style?: CSSProperties
  /** 点击菜单项触发的回掉函数 */
  onSelect?: (selectedIndex: string) => void
  /** 设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[]
}

interface IMenuContext {
  index: string
  onSelect?: (selectedIndex: string) => void
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

export const Menu: React.FC<MenuProps> = props => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus
  } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classnames('pui-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal',
    'dropdown-menu': mode === 'dropdown'
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive || '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (
        displayName === 'MenuItem' ||
        displayName === 'SubMenu' ||
        displayName === 'ItemGroup'
      ) {
        return React.cloneElement(childElement, {
          index: index.toString(),
          className: mode === 'dropdown' ? 'dropdown-menu-item' : 'menu-item'
        })
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component'
        )
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

Menu.displayName = 'Menu'

export default Menu
