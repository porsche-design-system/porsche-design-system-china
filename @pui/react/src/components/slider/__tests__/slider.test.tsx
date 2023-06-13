import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Slider } from '../slider'

describe('test slider component', () => {
  test('should render with a value', () => {
    const value = 30
    const { container } = render(<Slider value={value} />)
    const sliderElement = container.querySelector(
      '.pui-slider'
    ) as HTMLDivElement

    expect(sliderElement.getAttribute('aria-valuenow')).toBe(value.toString())
  })

  test('should render with a range', () => {
    const value = [30, 50]
    const { container } = render(<Slider value={value} range />)
    const sliderElement = container.querySelector(
      '.pui-slider'
    ) as HTMLDivElement

    expect(sliderElement.getAttribute('aria-valuenow')).toBe(value.join(','))
  })

  test('should render in disabled status', () => {
    const { container } = render(<Slider disabled />)
    const sliderElement = container.querySelector(
      '.pui-slider'
    ) as HTMLDivElement

    expect(sliderElement).toHaveClass('pui-slider-disabled')
  })

  test('should move slider to right', () => {
    const handleValueChange = jest.fn()

    const { container } = render(<Slider onValueChange={handleValueChange} />)

    const handleElement = container.querySelector(
      '.pui-slider-handle'
    ) as HTMLDivElement

    fireEvent.mouseDown(handleElement, { clientX: 0 })
    fireEvent.mouseMove(handleElement, { clientX: 50 })
    fireEvent.mouseUp(handleElement)
    expect(handleValueChange).toHaveBeenCalled()
  })
})
