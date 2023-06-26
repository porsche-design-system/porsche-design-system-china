import { createContext, FC } from 'react'
import SubMenu from './sub-menu'
import MenuItem from './menu-item'
import ItemGroup from './item-group'
import MenuWrap from './menu-wrap'

import {
  IMenuContext,
  MenuProps,
  MenuItemProps,
  SubMenuProps,
  ItemGroupProps
} from './types'
import './index.scss'

export const MenuContext = createContext<IMenuContext>({ index: '0' })
export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
  ItemGroup: FC<ItemGroupProps>
}
const Menu = MenuWrap as IMenuComponent

Menu.Item = MenuItem
Menu.SubMenu = SubMenu
Menu.ItemGroup = ItemGroup

export { Menu, MenuItem, SubMenu, ItemGroup }
export * from './types'
