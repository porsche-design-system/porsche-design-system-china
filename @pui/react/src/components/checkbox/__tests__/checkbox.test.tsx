import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckBox } from '../checkbox';

describe('Test Checkbox', () => {
  it('should generate classname correctly depending on props', () => {
    const {container} = render(<CheckBox className='testClassName' disabled size='medium'/>)
    const outerLabel = container.getElementsByClassName('pui-checkbox pui-checkbox-disabled-true pui-checkbox-size-medium testClassName')[0]
    expect(outerLabel).toBeInTheDocument()
  });

  it('should call onChange and onCheckedChange when click non disable checkbox', async() => {
    const user = userEvent.setup()

    const mockOnChange = jest.fn()
    const mockOnCheckedChange = jest.fn()
    render(<CheckBox value='testCheckbox' onChange={mockOnChange} onCheckedChange={mockOnCheckedChange}/>)
    const checkbox = screen.getByDisplayValue('testCheckbox')

    await user.click(checkbox)

    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(mockOnCheckedChange).toHaveBeenCalledTimes(1)
  });

  it('should disable the checkbox depending on props', async () => {
    const user = userEvent.setup()

    const mockOnChange = jest.fn()
    const mockOnCheckedChange = jest.fn()
    render(<CheckBox disabled value='testCheckbox' onChange={mockOnChange} onCheckedChange={mockOnCheckedChange}/>)
    const checkbox = screen.getByDisplayValue('testCheckbox')
    expect(checkbox).toBeInTheDocument()

    await user.click(checkbox)

    expect(mockOnChange).not.toHaveBeenCalled()
    expect(mockOnCheckedChange).not.toHaveBeenCalled()
  });

  it('should change icon for partChecked mode', async () => {
    const user = userEvent.setup()
    let partChecked = false
    const {container, rerender} = render(<CheckBox text="partChecked" partChecked={partChecked} onChange={() => {
      partChecked = !partChecked
    }} />)

    const checkbox = await screen.findByRole('checkbox')

    const iconCheck = await container.getElementsByClassName('pui-checkbox-checkmark')[0]
    const iconMinus = await container.getElementsByClassName('pui-checkbox-part-checkmark')[0]

    expect(iconCheck).toBeInTheDocument()
    expect(iconMinus).toBeInTheDocument()
    expect(iconMinus).toHaveStyle({opacity: 0})

    await user.click(checkbox)

    rerender(<CheckBox text="partChecked" partChecked={partChecked} onChange={() => {
      partChecked = !partChecked
    }} />)

    expect(iconCheck).not.toBeInTheDocument()
    expect(iconMinus).toHaveStyle({opacity: 1})
  });
});