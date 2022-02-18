import { CSSProperties, ReactElement } from 'react'

type MenuMode = 'horizontal' | 'vertical' | 'dropdown'

export interface MenuProps {
  /** 选中高亮的 index 值 */
  activeIndex?: string
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
  /** 大小 */
  size?: 'medium' | 'small' | 'tiny'
}

export interface IMenuContext {
  index: string
  onSelect?: (selectedIndex: string) => void
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
  selectSubMenus?: string[]
}

export interface SubMenuProps {
  index: string
  title: string
  className?: string
  /** 子菜单根元素的样式 */
  subStyle?: CSSProperties
  hasSubItem?: boolean
}
export interface MenuItemProps {
  index: string
  icon?: ReactElement
  disabled?: boolean
  divider?: boolean
  selectAfter?: boolean
  className?: string
  style?: CSSProperties
  hasSubItem?: boolean
}
export interface ItemGroupProps {
  index?: string
  title: string
  className?: string
}
