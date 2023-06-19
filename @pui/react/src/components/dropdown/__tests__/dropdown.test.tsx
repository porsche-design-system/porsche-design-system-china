import React from 'react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menu } from '../../menu'
import { Button } from '../../button/button'
import { Dropdown } from '../dropdown'

describe('Dropdown component', () => {
  it('Rendering Dropdown Menu', async () => {
    const items = ['Home', 'About', 'Contact']
    const defaultMenu = (
      <Menu>
        <Menu.Item index="Home">Home</Menu.Item>
        <Menu.Item index="About">About</Menu.Item>
        <Menu.Item index="Contact">Contact</Menu.Item>
      </Menu>
    )
    const { queryByText, getByRole } = render(
      <Dropdown overlay={defaultMenu}>
        <Button type="primary">Dropdown</Button>
      </Dropdown>
    )
    waitFor(() => {
      userEvent.hover(getByRole('button'))
      items.forEach(item => {
        const menuItem = queryByText(item)
        expect(menuItem).toBeInTheDocument()
      })
      userEvent.unhover(getByRole('button'))
    })
  })
})
