import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menu } from '../index'

describe('Menu component', () => {
  it('Rendering menu item', () => {
    const items = ['Home', 'About', 'Contact']
    const { getByText } = render(
      <Menu>
        <Menu.Item index="Home">Home</Menu.Item>
        <Menu.Item index="About">About</Menu.Item>
        <Menu.Item index="Contact">Contact</Menu.Item>
      </Menu>
    )

    items.forEach(item => {
      const menuItem = getByText(item)
      expect(menuItem).toBeInTheDocument()
    })
  })

  it('Trigger callback function when clicking on menu item', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Menu onSelect={onClick}>
        <Menu.Item index="Home">Home</Menu.Item>
        <Menu.Item index="About">About</Menu.Item>
        <Menu.Item index="Contact">Contact</Menu.Item>
      </Menu>
    )
    fireEvent.click(getByText('About'))
    expect(onClick).toHaveBeenCalledWith('About')
  })
})
describe('SubMenu component', () => {
  it('Rendering menu subMenu item', async () => {
    const subItems = ['One', 'Two', 'Three']
    const { getByText, queryByText } = render(
      <Menu>
        <Menu.Item index="Home">Home</Menu.Item>
        <Menu.Item index="About">About</Menu.Item>
        <Menu.SubMenu index="SubMenu" title="SubMenu">
          <Menu.Item index="One">One</Menu.Item>
          <Menu.Item index="Two">Two</Menu.Item>
          <Menu.Item index="Three">Three</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
    const target = getByText('SubMenu')
    await waitFor(() => {
      userEvent.hover(target)
      subItems.forEach(item => {
        const subMenuItem = queryByText(item)
        expect(subMenuItem).toBeInTheDocument()
      })
      userEvent.unhover(target)
    })
  })

  it('Trigger hover callback function when clicking on subMenu item', async () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Menu onSelect={onClick}>
        <Menu.SubMenu index="SubMenu" title="SubMenu">
          <Menu.Item index="One">One</Menu.Item>
          <Menu.Item index="Two">Two</Menu.Item>
          <Menu.Item index="Three">Three</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
    const target = getByText('SubMenu')
    await waitFor(() => {
      userEvent.hover(target)
      const subMenuItem = getByText('Two')
      fireEvent.click(subMenuItem)
      expect(onClick).toHaveBeenCalledWith('Two')
      userEvent.unhover(target)
    })
  })
  it('Trigger click  callback function when clicking on subMenu item', async () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Menu onSelect={onClick} trigger="click">
        <Menu.SubMenu index="SubMenu" title="SubMenu">
          <Menu.Item index="One">One</Menu.Item>
          <Menu.Item index="Two">Two</Menu.Item>
          <Menu.Item index="Three">Three</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
    const target = getByText('SubMenu')
    await waitFor(() => {
      userEvent.click(target)
      const subMenuItem = getByText('Three')
      fireEvent.click(subMenuItem)
      expect(onClick).toHaveBeenCalledWith('Three')
      userEvent.click(target)
    })
  })
})
