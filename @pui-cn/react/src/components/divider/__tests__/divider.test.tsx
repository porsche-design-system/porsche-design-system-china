import React from 'react'
import { render } from '@testing-library/react'
import { Divider } from '../divider'

describe('Divider component', () => {
  it('Default rendering horizontal separator line', () => {
    const { container } = render(<Divider />)
    const divider = container.querySelector('.pui-divider')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveClass('pui-divider-type-horizontal')
  })

  it('Rendering Vertical Dividers', () => {
    const { container } = render(<Divider type="vertical" />)
    const divider = container.querySelector('.pui-divider')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveClass('pui-divider-type-vertical')
  })

  it('Low contrast styles', () => {
    const { container } = render(<Divider contrast="low" />)
    const divider = container.querySelector('.pui-divider')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveClass('pui-divider-contrast-low')
  })

  it('Medium contrast styles', () => {
    const { container } = render(<Divider contrast="medium" />)
    const divider = container.querySelector('.pui-divider')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveClass('pui-divider-contrast-medium')
  })

  it('High contrast styles', () => {
    const { container } = render(<Divider contrast="high" />)
    const divider = container.querySelector('.pui-divider')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveClass('pui-divider-contrast-high')
  })

  it('Custom styles', () => {
    const customStyle = { color: 'red', marginTop: '10px' }
    const { container } = render(<Divider style={customStyle} />)
    const divider = container.querySelector('.pui-divider')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveStyle('color: red')
    expect(divider).toHaveStyle('margin-top: 10px')
  })
  it('Custom class name', () => {
    const { container } = render(<Divider className="custom-divider" />)
    const divider = container.querySelector('.pui-divider')
    expect(divider).toHaveClass('custom-divider')
  })
})
