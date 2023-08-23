import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Radio } from '../radio';

describe('test radio component render', () => {
  it('should render radio component text correctly', () => {
    render(<Radio text="选项1" value="val1" />)

    expect(screen.getByText('选项1')).toBeInTheDocument()
  });

  it('should render disable radio when prop disable is true', () => {
    render(<Radio text="选项2" value="val2" disabled />)
    const radioElement = screen.getByDisplayValue('val2') as HTMLInputElement

    expect(radioElement.disabled).toBe(true)
  });

  it('should render checked radio when prop checked is true', () => {
    render(<Radio text="选项3" value="val3" checked />)
    const radioElement = screen.getByDisplayValue('val3') as HTMLInputElement

    expect(radioElement.checked).toBe(true)
  });

  it('should render checked radio when prop checked is false', () => {
    render(<Radio text="选项4" value="val4" />)
    const radioElement = screen.getByDisplayValue('val4') as HTMLInputElement

    expect(radioElement.checked).toBe(false)
  });

  it('should render checked radio when prop checked is false', () => {
    render(<Radio text="选项4" value="val4" defaultChecked/>)
    const radioElement = screen.getByDisplayValue('val4') as HTMLInputElement

    expect(radioElement.defaultChecked).toBe(true)
  });
});

describe('test radio component function', () => {
  it('should call radio change function correctly', () => {
    const changeFn = jest.fn()
    render(<Radio text="选项5" value="val5" onChange={changeFn} />)
    const radioElement = screen.getByDisplayValue('val5') as HTMLInputElement

    fireEvent.click(radioElement)
    expect(changeFn).toBeCalledTimes(1)
  });

  it('should call radio check change function correctly', () => {
    const checkChangeFn = jest.fn()
    render(<Radio text="选项6" value="val6" onCheckedChange={checkChangeFn} />)
    const radioElement = screen.getByDisplayValue('val6') as HTMLInputElement

    fireEvent.click(radioElement)
    expect(checkChangeFn).toBeCalledTimes(1)
  })

});
