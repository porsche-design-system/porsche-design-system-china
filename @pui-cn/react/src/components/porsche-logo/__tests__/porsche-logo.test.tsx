import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { PorscheLogo } from '../porsche-logo'

describe('Test Porsche Logo', () => {
  test('test render porsche logo', async () => {
    await act(async () => {
      await render(<PorscheLogo size={200} />)
    })
    expect(screen.getByRole('img')).toHaveAttribute('width', '200px')
  })

  test('porsche logo clickable', async () => {
    const mockClickFn = jest.fn()
    await act(async () => {
      await render(<PorscheLogo onClick={mockClickFn} />)
    })
    fireEvent.click(screen.getByRole('img'))

    await waitFor(() => {
      expect(mockClickFn).toHaveBeenCalled()
    })
  })
})
