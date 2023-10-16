import React from 'react'
import { render } from '@testing-library/react'
import { ButtonGroup } from '../button-group'

describe('test buttonGroup component', () => {
  it('should render the correct default buttonGroup', () => {
    const wrapper = render(<ButtonGroup />)
    const element = wrapper.container.querySelector('.pui-button-group')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('pui-button-group-disabled-false pui-button-group-align-left')
  })
  it('should render the different align buttonGroup', () => {
    const wrapper1 = render(<ButtonGroup align='center' />)
    const element1 = wrapper1.container.querySelector('.pui-button-group')
    expect(element1).toHaveClass('pui-button-group-align-center')
    const wrapper2 = render(<ButtonGroup align='right' />)
    const element2 = wrapper2.container.querySelector('.pui-button-group')
    expect(element2).toHaveClass('pui-button-group-align-right')
  })
  it('should render the disabled buttonGroup', () => {
    const wrapper = render(<ButtonGroup disabled />)
    const element = wrapper.container.querySelector('.pui-button-group')
    expect(element).toHaveClass('pui-button-group-disabled-true')
  })
  it('should render the has the label buttonGroup', () => {
    const wrapper = render(<ButtonGroup label='LabelText' />)
    const element = wrapper.container.querySelector('.pui-button-group')
    expect(element).toHaveTextContent('LabelText')
  })
})