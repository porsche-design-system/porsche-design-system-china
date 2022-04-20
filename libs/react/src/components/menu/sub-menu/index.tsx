import React, {
  useContext,
  useState,
  useRef,
  FunctionComponentElement
} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { IconArrowHeadRight } from '@pui/icons'
import { MenuContext } from '../index'
import {
  useElementPos,
  usePopShowState,
  useDefaultSize
} from '../../../shared/hooks'
import { MenuItemProps, SubMenuProps } from '../types'
import {
  PADDING_SIZE,
  SUB_MENU_WIDTH,
  MARGIN_LEFT,
  SUB_MENU_SMALL_WIDTH
} from '../const'
import './index.scss'

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  icon,
  divider,
  children,
  className,
  subStyle,
  onClick,
  hasSubItem,
  disabled,
  size,
  visible = true
}) => {
  if (!visible) {
    return null
  }
  const [defaultSize] = useDefaultSize()
  const curSize = size || defaultSize
  const MENU_WIDTH = curSize === 'small' ? SUB_MENU_SMALL_WIDTH : SUB_MENU_WIDTH
  const rootElementRef = useRef<any>(null)
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend =
    index && context.mode === 'vertical'
      ? openedSubMenus?.includes(index)
      : false
  const [menuOpen, setOpen] = useState(isOpend)
  const [menuPos, updatePos] = useElementPos(rootElementRef)
  const [, , puiPopupWrap] = usePopShowState(() => {
    if (menuOpen) {
      setOpen(false)
    }
  })
  const classes = classNames('submenu-item', className, {
    'is-active': context.selectSubMenus?.includes(index || ''),
    'is-opened': menuOpen,
    'is-visible': !visible,
    'is-divider': divider,
    'is-vertical': context.mode === 'vertical',
    'is-disabled': disabled,
    'dropdown-menu-item': context.mode === 'dropdown'
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    updatePos()
    setOpen(!menuOpen)
    onClick && onClick(e)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 100)
  }
  const clickEvents = !disabled ? { onClick: handleClick } : {}
  const hoverEvents =
    context.mode !== 'vertical' && !disabled
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            updatePos()
            handleMouse(e, true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
          }
        }
      : {}
  const renderChildren = () => {
    const subMenuClasses = classNames(`pui-submenu pui-menu-size-${curSize}`, {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        const element = React.cloneElement(childElement, {
          index: childElement.props.index || `${index}-${i}`,
          className: 'sub-menu-item ',
          hasSubItem: displayName === 'SubMenu'
        })
        return element
      } else {
        console.error(
          'Warning: SubMenu has a child which is not a MenuItem component'
        )
      }
      return null
    })
    const subPosition: { left: number; top: number } = { ...menuPos }
    let clientWidth = rootElementRef.current?.offsetWidth || 0
    const clientHeight = rootElementRef.current?.offsetHeight || 0
    const windowWidth = document.body.offsetWidth
    let positionDifference = windowWidth - (subPosition.left + MENU_WIDTH)
    if (positionDifference <= PADDING_SIZE) {
      subPosition.left -= MENU_WIDTH - clientWidth
    }
    if (clientWidth < MENU_WIDTH) {
      clientWidth = MENU_WIDTH
    }
    if (hasSubItem || context.mode === 'dropdown') {
      subPosition.left += clientWidth + MARGIN_LEFT
      subPosition.top -= clientHeight
      positionDifference = windowWidth - (subPosition.left + MENU_WIDTH)
      if (positionDifference <= PADDING_SIZE) {
        subPosition.left = menuPos.left - clientWidth - MARGIN_LEFT
      }
    }
    const contentList = (
      <ul
        className={subMenuClasses}
        style={{ ...subStyle, position: 'absolute', ...subPosition }}
      >
        {childrenComponent}
      </ul>
    )
    if (menuOpen) {
      return ReactDOM.createPortal(contentList, puiPopupWrap)
    }
    return null
  }
  const Children = renderChildren()
  return (
    <>
      <li
        {...hoverEvents}
        {...clickEvents}
        key={index}
        className={classes}
        ref={rootElement => {
          if (rootElement) {
            rootElementRef.current = rootElement
          }
        }}
      >
        <span className="submenu-title">
          <span className="submenu-title-text">
            {icon}
            {title}
          </span>
          <IconArrowHeadRight />
        </span>
        {Children}
      </li>
      {divider ? <div className="divider" /> : null}
    </>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu
