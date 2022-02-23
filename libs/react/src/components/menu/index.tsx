import { createContext, FC } from 'react'
import SubMenu from './sub-menu'
import MenuItem from './menu-item'
import ItemGroup from './item-group'
import Menu from './menu-wrap'

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
const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu
TransMenu.ItemGroup = ItemGroup

export { TransMenu }
export * from './types'