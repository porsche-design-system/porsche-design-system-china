import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menu } from '../../menu'
import { Button } from '../../button/button'
import { Dropdown } from '../dropdown'

describe('Dropdown component', () => {
  const items = ['Home', 'About', 'Contact']
  const defaultMenu = (
    <Menu>
      <Menu.Item index="Home">Home</Menu.Item>
      <Menu.Item index="About">About</Menu.Item>
      <Menu.Item index="Contact">Contact</Menu.Item>
    </Menu>
  )
  it('should show Dropdown content on mouse hover', async () => {
    const { queryByText, getByRole } = render(
      <Dropdown overlay={defaultMenu}>
        <Button type="primary">Dropdown</Button>
      </Dropdown>
    )
    waitFor(() => {
      userEvent.hover(getByRole('button'))
      items.forEach(item => {
        const menuItem = queryByText(item) as HTMLElement
        expect(menuItem).toBeInTheDocument()
      })
      userEvent.unhover(getByRole('button'))
    })
  })
  it('should show Dropdown content on mouse click', async () => {
    const { queryByText, getByRole } = render(
      <Dropdown overlay={defaultMenu} trigger="click">
        <Button type="primary">Dropdown</Button>
      </Dropdown>
    )
    waitFor(() => {
      userEvent.click(getByRole('button'))
      items.forEach(item => {
        const menuItem = queryByText(item) as HTMLElement
        expect(menuItem).toBeInTheDocument()
      })
      userEvent.click(getByRole('button'))
    })
  })
  it('External event control display dropdown menu', async () => {
    let visible = false
    const { queryByText, getByRole } = render(
      <>
        <Button type="primary" onClick={() => (visible = true)}>
          Dropdown
        </Button>
        <Dropdown visible={visible} overlay={defaultMenu} trigger="click">
          controls by another event
        </Dropdown>
      </>
    )
    waitFor(() => {
      userEvent.click(getByRole('button'))
      items.forEach(item => {
        const menuItem = queryByText(item) as HTMLElement
        expect(menuItem).toBeInTheDocument()
      })
      userEvent.click(getByRole('button'))
    })
  })

  it('should call onVisibleChange callback correctly', async () => {
    const onVisibleChange = jest.fn()
    const { getByRole } = render(
      <Dropdown
        onVisibleChange={onVisibleChange}
        overlay={defaultMenu}
        trigger="click"
      >
        <Button type="primary">Dropdown</Button>
      </Dropdown>
    )
    waitFor(() => {
      userEvent.click(getByRole('button'))
      expect(onVisibleChange).toBeCalled()
      userEvent.click(getByRole('button'))
    })
  })

  it('Click to select the dropdown menu item', async () => {
    const onClick = jest.fn()
    const TestMenu = (
      <Menu onSelect={onClick}>
        <Menu.Item index="Home">Home</Menu.Item>
        <Menu.Item index="About">About</Menu.Item>
        <Menu.Item index="Contact">Contact</Menu.Item>
      </Menu>
    )
    const { getByText, getByRole } = render(
      <Dropdown overlay={TestMenu} trigger="click">
        <Button type="primary">Dropdown</Button>
      </Dropdown>
    )
    await waitFor(() => {
      userEvent.click(getByRole('button'))
      const subMenuItem = getByText('About')
      fireEvent.click(subMenuItem)
      expect(onClick).toHaveBeenCalledWith('About')
      userEvent.click(getByRole('button'))
    })
  })
})
