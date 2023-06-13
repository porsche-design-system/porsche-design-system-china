import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Input } from '../input'

describe('test input component', () => {
  it('should render with a default value', () => {
    const { getByRole } = render(<Input defaultValue="PUI Input" />)
    const inputElement = getByRole('textbox') as HTMLInputElement

    expect(inputElement.value).toBe('PUI Input')
  })

  it('should render and trigger onChange event', () => {
    const onChange = jest.fn()
    const { getByRole } = render(<Input onChange={onChange} />)
    const inputElement = getByRole('textbox') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'new value' } })

    expect(inputElement.value).toBe('new value')
    expect(onChange).toHaveBeenCalled()
  })

  it('should render with a default value and trigger onChange event', () => {
    const onChange = jest.fn()
    const { getByRole } = render(
      <Input defaultValue="PUI Input" onChange={onChange} />
    )
    const inputElement = getByRole('textbox') as HTMLInputElement

    expect(inputElement.value).toBe('PUI Input')

    fireEvent.change(inputElement, { target: { value: 'new value' } })

    expect(inputElement.value).toBe('new value')
    expect(onChange).toHaveBeenCalled()
  })

  it('should render in disabled status', () => {
    const { getByRole } = render(<Input defaultValue="123" disabled />)
    const inputElement = getByRole('textbox') as HTMLInputElement

    expect(inputElement.disabled).toBe(true)
  })

  it('should render with suffixContent', () => {
    const { getByRole } = render(<Input suffixContent="元" />)
    const inputElement = getByRole('textbox') as HTMLInputElement

    expect(inputElement.nextElementSibling).toHaveClass('pui-input-suffix-icon')
  })

  it('shoud call onValueChange', () => {
    const onValueChange = jest.fn()
    const { getByRole } = render(<Input onValueChange={onValueChange} />)
    const inputElement = getByRole('textbox') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'new value' } })
    fireEvent.change(inputElement, { target: { value: 'another value' } })

    expect(onValueChange).toHaveBeenCalledTimes(2)
  })

  it('should render with a error', () => {
    const wrapper = render(
      <Input error={{ show: true, message: '输入信息有误' }} />
    )
    const inputElement = wrapper.getByRole('textbox') as HTMLInputElement
    expect(inputElement.parentElement).toHaveClass('pui-input-error-true')
  })

  it('should be readonly', () => {
    const { getByRole } = render(<Input value="PUI Input" readOnly />)
    const inputElement = getByRole('textbox') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'new value' } })

    expect(inputElement.value).toBe('PUI Input')
  })
})
