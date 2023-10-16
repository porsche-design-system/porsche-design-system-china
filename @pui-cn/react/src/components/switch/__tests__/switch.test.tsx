import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Switch, SwitchProps } from '../switch'
// import { act } from 'react-dom/test-utils'

const defaultProps: SwitchProps<any> = {
  onValueChange: jest.fn()
}

const disabledProps: SwitchProps<any> = {
  disabled: true
}

const digitValueProps: SwitchProps<any> = {
  onValueChange: jest.fn(),
  alterValues: 'ZeroOrOne'
}

const customValueProps: SwitchProps<any> = {
  onValueChange: jest.fn(),
  alterValues: 'Male,Female'
}

describe('test switch component', () => {
  it('should render the correct default switch', () => {
    const wrapper = render(<Switch {...defaultProps} size='small' />)
    const element = wrapper.container.querySelector('.pui-switch')
    const innerElement = wrapper.container.querySelector('.pui-switch-bar')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('pui-switch-enabled-false pui-switch-size-small')
    fireEvent.click(innerElement as HTMLElement)
    expect(defaultProps.onValueChange).toHaveBeenCalledWith(true)
  })

  it('should render the correct disabled switch', () => {
    const wrapper = render(<Switch {...disabledProps} />)
    const element = wrapper.container.querySelector('.pui-switch')
    expect(element).toHaveClass('pui-switch-disabled-true')
    const innerElement = wrapper.container.querySelector('.pui-switch-bar')
    fireEvent.click(innerElement as HTMLElement)
    expect(digitValueProps.onValueChange).not.toHaveBeenCalledWith(true)
  })

  it('should render the correct digitValue switch', () => {
    const wrapper = render(<Switch {...digitValueProps} />)
    const innerElement = wrapper.container.querySelector('.pui-switch-bar')
    fireEvent.click(innerElement as HTMLElement)
    expect(digitValueProps.onValueChange).toHaveBeenCalledWith(1)
  })

  it('should render the correct customValue switch', () => {
    const wrapper = render(<Switch {...customValueProps} />)
    const innerElement = wrapper.container.querySelector('.pui-switch-bar')
    fireEvent.click(innerElement as HTMLElement)
    expect(customValueProps.onValueChange).toHaveBeenCalledWith('Female')
  })
})