import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { InputNumber } from '../input-number';

describe('test inputNumber component render', () => {
  it('should render with a default value', () => {
    const { getByRole } = render(<InputNumber defaultValue="PUI Input number" />)
    const inputElement = getByRole('textbox') as HTMLInputElement

    expect(inputElement.value).toBe('PUI Input number')
  })

  it('should render in disabled status', () => {
    const { getByRole } = render(<InputNumber defaultValue="123" disabled />)
    const inputElement = getByRole('textbox') as HTMLInputElement

    expect(inputElement.disabled).toBe(true)
  })

  it('should render default minus and plus in inputNumber', () => {
    render(<InputNumber defaultValue="123" type="default" />)
    expect(screen.getByLabelText('icon_-minus')).toBeInTheDocument()
    expect(screen.getByLabelText('icon_-plus')).toBeInTheDocument()
  })

  it('should render default arrow-head-up and arrow-head-down in inputNumber', () => {
    render(<InputNumber defaultValue="123" type="arrow" />)
    expect(screen.getByLabelText('icon_-arrow-head-up')).toBeInTheDocument()
    expect(screen.getByLabelText('icon_-arrow-head-down')).toBeInTheDocument()
  })

  it('should render suffixIcon in inputNumber', () => {
    render(<InputNumber defaultValue="123" suffixIcon={<div>suffixIcon</div>} />)
    expect(screen.getByText('suffixIcon')).toBeInTheDocument()
  })
})



describe('test inputNumber component add function', () => {
  it('should add value correct when click add button', () => {
    const onValueChange = jest.fn()
    render(<InputNumber defaultValue={2} type="default" onValueChange={onValueChange}/>)
    const addBtn = screen.getByLabelText('icon_-plus')
    fireEvent.click(addBtn)
    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    expect(inputElement.value).toBe("3")
    expect(onValueChange).toHaveBeenCalledTimes(1)
  })

  it('should disable add button when value is the same as 3', () => {
    render(<InputNumber defaultValue={2} type="default" max={3}/>)
    const addBtn = screen.getByLabelText('icon_-plus')
    fireEvent.click(addBtn)
    expect(addBtn.parentElement).toHaveClass('pui-input-number-icon-disabled')
  })

  it('should call valueChange once when click add button twice', () => {
    const onValueChange = jest.fn()
    render(<InputNumber defaultValue={2} type="default" max={3} onValueChange={onValueChange}/>)
    const plusBtn = screen.getByLabelText('icon_-plus')
    fireEvent.click(plusBtn)
    fireEvent.click(plusBtn)
    expect(onValueChange).toHaveBeenCalledTimes(1)
  })
})

describe('test inputNumber minus function', () => {
  it('should minus value correct when click minus button', () => {
    render(<InputNumber defaultValue={3} type="default"/>)
    const minusBtn = screen.getByLabelText('icon_-minus')
    fireEvent.click(minusBtn)
    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    expect(inputElement.value).toBe("2")
  })

  it('should disable minus button when value is the same as 1', () => {
    render(<InputNumber defaultValue={2} type="default" min={1}/>)
    const minusBtn = screen.getByLabelText('icon_-minus')
    fireEvent.click(minusBtn)
    expect(minusBtn.parentElement).toHaveClass('pui-input-number-icon-disabled')
  })

  it('should call valueChange once when click minus button twice', () => {
    const onValueChange = jest.fn()
    render(<InputNumber defaultValue={2} type="default" min={1} onValueChange={onValueChange}/>)
    const minusBtn = screen.getByLabelText('icon_-minus')
    fireEvent.click(minusBtn)
    fireEvent.click(minusBtn)
    expect(onValueChange).toHaveBeenCalledTimes(1)
  })
});

describe('test inputNumber blur function', () => {
  it('should set current value to empty string when blur an input with a NaN value', () => {
    // @ts-ignore
    const NaNValue = 10 / 'hello'
    const onValueChange = jest.fn()
    const { getByRole } = render(<InputNumber defaultValue={NaNValue} onValueChange={onValueChange}/>)
    const inputElement = getByRole('textbox') as HTMLInputElement

    fireEvent.blur(inputElement)
    expect(inputElement.value).toBe('')
    expect(onValueChange).toBeCalledWith('')
  });

  it('should set current value to max when input value is bigger than max', () => {
    const onValueChange = jest.fn()
    const { getByRole } = render(<InputNumber defaultValue={4} max={2} onValueChange={onValueChange}/>)
    const inputElement = getByRole('textbox') as HTMLInputElement

    fireEvent.blur(inputElement)
    expect(inputElement.value).toBe('2')
    expect(onValueChange).toBeCalledWith(2)
  });

  it('should set current value to min when input value is smaller than max', () => {
    const onValueChange = jest.fn()
    const { getByRole } = render(<InputNumber defaultValue={1} min={3} onValueChange={onValueChange}/>)
    const inputElement = getByRole('textbox') as HTMLInputElement

    fireEvent.blur(inputElement)
    expect(inputElement.value).toBe('3')
    expect(onValueChange).toBeCalledWith(3)
  });

  it('should not call valueChange when input value is the same as default', () => {
    const onValueChange = jest.fn()
    const { getByRole } = render(<InputNumber defaultValue={1} onValueChange={onValueChange}/>)
    const inputElement = getByRole('textbox') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 1 } });
    fireEvent.blur(inputElement)
    expect(onValueChange).toBeCalledTimes(0)
  });

  it('should not call valueChange when input value is not the same as default', () => {
    const onValueChange = jest.fn()
    const { getByRole } = render(<InputNumber defaultValue={1} onValueChange={onValueChange}/>)
    const inputEL = getByRole('textbox') as HTMLInputElement

    fireEvent.change(inputEL, { target: { value: 3 } });
    fireEvent.blur(inputEL)
    expect(onValueChange).toBeCalledTimes(1)
  });
})

describe('test inputNumber change function', () => {
  it('should call onValueChange when input number is valid', () => {
    const onValueChange = jest.fn()
    const { getByRole } = render(<InputNumber defaultValue={1} onValueChange={onValueChange}/>)
    const inputEL = getByRole('textbox') as HTMLInputElement

    fireEvent.change(inputEL, { target: { value: 3 } });
    expect(onValueChange).toBeCalledWith(3)
  });

  it('should not call onValueChange when input number is not valid', () => {
    const onValueChange = jest.fn()
    const { getByRole } = render(<InputNumber onValueChange={onValueChange}/>)
    const inputEL = getByRole('textbox') as HTMLInputElement

    fireEvent.change(inputEL, { target: { value: 'test' } });
    expect(onValueChange).toBeCalledTimes(0)
  });
});
