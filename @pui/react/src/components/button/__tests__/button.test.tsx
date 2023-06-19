import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'

import { Button } from '../button'

test('button context', async () => {
  render(<Button>Button</Button>)
  expect(screen.getByText('Button')).toHaveTextContent('Button')

  render(
    <Button>
      <div>中文按钮</div>
    </Button>
  )
  expect(screen.getByText('中文按钮')).toHaveTextContent('中文按钮')
})

test('button clickable', async () => {
  let clicked = false
  render(
    <Button
      onClick={() => {
        clicked = true
      }}
    >
      Button
    </Button>
  )
  screen.getByText('Button').click()
  await act(() => {
    expect(clicked).toBe(true)
  })
})

test('renders button with icon', () => {
  const { getByTestId } = render(
    <Button icon={<span data-testid="icon">Icon</span>}>
      Button with Icon
    </Button>
  )

  const icon = getByTestId('icon')
  expect(icon).toBeInTheDocument()
})

test('loading button', async () => {
  let clicked = false
  render(
    <Button
      loading
      onClick={() => {
        clicked = true
      }}
    >
      Button
    </Button>
  )
  const button = screen.getByText('Button').parentElement!
  expect(button.firstChild).toHaveClass('pui-button-icon')
  button.click()
  await act(() => {
    expect(clicked).toBe(false)
  })
})
