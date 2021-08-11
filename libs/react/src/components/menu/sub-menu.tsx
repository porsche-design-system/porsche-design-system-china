import React, {
  useContext,
  useState,
  FunctionComponentElement,
  CSSProperties
} from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { IconArrowHeadRight } from '@pui/icons'
import { MenuContext } from './menu'
import { MenuItemProps } from './menu-item'

export interface SubMenuProps {
  index?: string
  title: string
  className?: string
  /** 子菜单根元素的样式 */
  subStyle?: CSSProperties
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  children,
  className,
  subStyle
}) => {
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend =
    index && context.mode === 'vertical'
      ? openedSubMenus.includes(index)
      : false
  const [menuOpen, setOpen] = useState(isOpend)
  const classes = classNames('submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
    'menu-item': context.mode !== 'dropdown',
    'dropdown-menu-item': context.mode === 'dropdown'
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick
        }
      : {}
  const hoverEvents =
    context.mode !== 'vertical'
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
    const subMenuClasses = classNames('pui-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
          className: 'sub-menu-item'
        })
      } else {
        console.error(
          'Warning: SubMenu has a child which is not a MenuItem component'
        )
      }
    })
    return (
      <CSSTransition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses} style={subStyle}>
          {childrenComponent}
        </ul>
      </CSSTransition>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <span className="submenu-title" {...clickEvents}>
        {title}
        <IconArrowHeadRight />
      </span>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu
