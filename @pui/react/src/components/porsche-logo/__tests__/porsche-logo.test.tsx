import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { PorscheLogo } from '../porsche-logo'


describe('Test Porsche Logo', () => {
  test('test render porsche logo', async () => {
    render(<PorscheLogo size={200} />)

    expect(screen.getByRole('img')).toHaveAttribute('width', '200px')
  })

  test('porsche logo clickable', async () => {
    const mockClickFn = jest.fn();
    render(
      <PorscheLogo
        onClick={mockClickFn}
      />
    )

    fireEvent.click(screen.getByRole('img'))

    await waitFor(() => {
      expect(mockClickFn).toHaveBeenCalled()
    })

  })
})
