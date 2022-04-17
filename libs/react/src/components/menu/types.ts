import { CSSProperties, MouseEventHandler, ReactElement } from 'react'

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
  /** 点击菜单项触发的回掉函数 */
  onClick?: () => void
  /** 设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[]
  /** 大小 */
  size?: 'medium' | 'small'
}

export interface IMenuContext {
  /** 唯一标志 */
  index: string
  onSelect?: (selectedIndex: string) => void
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
  selectSubMenus?: string[]
}

export interface SubMenuProps {
  /** 唯一标志 */
  index: string
  /** 子菜单标题 */
  title: string
  /* 点击事件 */
  onClick?: MouseEventHandler
  /** 自定义类名 */
  className?: string
  /** 子菜单根元素的样式 */
  subStyle?: CSSProperties
  /** 组件内部调用，无需传参 */
  hasSubItem?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 显示隐藏 */
  visible?: boolean
  /** 大小 */
  size?: 'medium' | 'small'
}
export interface MenuItemProps {
  /** 唯一标志 */
  index: string
  /** 自定义icon  */
  icon?: ReactElement
  /** 禁用 */
  disabled?: boolean
  /** 分数线 */
  divider?: boolean
  /** 选中标致 */
  selectAfter?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /* 点击事件 */
  onClick?: MouseEventHandler
  /** 组件内部调用，无需传参 */
  hasSubItem?: boolean
  /** 显示隐藏 */
  visible?: boolean
  /** 大小 */
  size?: 'medium' | 'small'
}
export interface ItemGroupProps {
  /** 唯一标志 */
  index?: string
  /** 分组标题 */
  title: string
  /** 自定义样式 */
  className?: string
  /* 点击事件 */
  onClick?: MouseEventHandler
}
