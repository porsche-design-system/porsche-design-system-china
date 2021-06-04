import { FC } from 'react'
import Menu, { MenuProps } from './menu'
import SubMenu, { SubMenuProps } from './sub-menu'
import MenuItem, { MenuItemProps } from './menu-item'
import ItemGroup, { ItemGroupProps } from './item-group'

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
  ItemGroup: FC<ItemGroupProps>
}

const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu
TransMenu.ItemGroup = ItemGroup

export { TransMenu }
