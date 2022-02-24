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
import { useElementPos, usePopShowState } from '../../../shared/hooks'
import { MenuItemProps, SubMenuProps } from '../types'
import './index.scss'

const PADDING_SIZE = 12
const SUB_MENU_WIDTH = 160
const MARGIN_LEFT = 4

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  children,
  className,
  subStyle,
  hasSubItem
}) => {
  const rootElementRef = useRef<any>(null)
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend =
    index && context.mode === 'vertical'
      ? openedSubMenus?.includes(index)
      : false
  const [menuOpen, setOpen] = useState(isOpend)
  const [menuPos, updatePos] = useElementPos(rootElementRef)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showOptionList, setShowOptionList, puiPopupWrap] = usePopShowState(
    () => {
      if (menuOpen) {
        setOpen(false)
      }
    }
  )
  const classes = classNames('submenu-item', className, {
    'is-active': context.selectSubMenus?.includes(index || ''),
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
    'menu-item': context.mode !== 'dropdown',
    'dropdown-menu-item': context.mode === 'dropdown'
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
    updatePos()
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  const clickEvents = {
    onClick: handleClick
  }
  const hoverEvents =
    context.mode !== 'vertical'
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
    const subMenuClasses = classNames('pui-submenu', {
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
    let positionDifference = windowWidth - (subPosition.left + SUB_MENU_WIDTH)
    if (positionDifference <= PADDING_SIZE) {
      subPosition.left -= SUB_MENU_WIDTH - clientWidth
    }
    if (clientWidth < SUB_MENU_WIDTH) {
      clientWidth = SUB_MENU_WIDTH
    }
    if (hasSubItem || context.mode === 'dropdown') {
      subPosition.left += clientWidth + MARGIN_LEFT
      subPosition.top -= clientHeight
      positionDifference = windowWidth - (subPosition.left + SUB_MENU_WIDTH)
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
        {title}
        <IconArrowHeadRight />
      </span>
      {Children}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu
