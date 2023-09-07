import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckBoxGroup, sortFunc } from '../checkbox-group';

describe('Test Checkbox Group', () => {
  describe('Test sortFunc', () => {
    it('should ', () => {
      expect(sortFunc('a', 'c')).toBe(-1)
      expect(sortFunc('abandon', 'abandon')).toBe(0)
      expect(sortFunc(999, 2)).toBe(997)
    });
  });

  describe('it should render checkbox group depending on different type of options', () => {
    const getCheckboxTextAndValue = () => {
      const checkboxInput1 = screen.getAllByRole('checkbox')[0];
      const checkboxText1 = checkboxInput1.parentElement?.textContent
      const checkboxValue1 = checkboxInput1.getAttribute('value')
      const checkboxInput2 = screen.getAllByRole('checkbox')[1];
      const checkboxText2 = checkboxInput2.parentElement?.textContent
      const checkboxValue2 = checkboxInput2.getAttribute('value')
      return [checkboxText1, checkboxValue1, checkboxText2, checkboxValue2]
    }
    it('should render string options as checkboxes', () => {
      render(<CheckBoxGroup options='test1,test2'/>)
      expect(getCheckboxTextAndValue()).toStrictEqual(['test1', 'test1', 'test2', 'test2'])
    });

    it('should render string array as checkboxes', () => {
      render(<CheckBoxGroup options={['stringArrVal1', 'stringArrVal2']}/>)
      expect(getCheckboxTextAndValue()).toStrictEqual(['stringArrVal1', 'stringArrVal1', 'stringArrVal2', 'stringArrVal2'])
    });

    it('should render SelectOption array as checkboxes', () => {
      render(<CheckBoxGroup options={[{text: 'testText1', value: 'testValue1'}, {text: 'testText2', value: 'testValue2'}]}/>)
      expect(getCheckboxTextAndValue()).toStrictEqual(['testText1', 'testValue1', 'testText2', 'testValue2'])
    });
  });

  it('should show error message correctly', () => {
    render(<CheckBoxGroup options={[{text: 'testText1', value: 'testValue1'}, {text: 'testText2', value: 'testValue2'}]} error={{show: true, message: 'testErrorMsg'}}/>)
    expect(screen.getByText('testErrorMsg')).toBeInTheDocument()
  });

  it('should call onValueChange when click every single checkbox', async () => {
    const user = userEvent.setup()
    const mockFn = jest.fn()
    render(<CheckBoxGroup options={[{text: 'testText1', value: 'testValue1'}, {text: 'testText2', value: 'testValue2'}]} onValueChange={mockFn}/>)
    const checkbox1 = await screen.getAllByRole('checkbox')[0];
    const checkbox2 = await screen.getAllByRole('checkbox')[1];

    await user.click(checkbox1)
    expect(mockFn).toHaveBeenCalledTimes(1)

    await user.click(checkbox2)
    expect(mockFn).toHaveBeenCalledTimes(2)
  });

  it('should trigger onValueChange data correction automatically when value is not in options', () => {
    const mockFn = jest.fn()
    render(<CheckBoxGroup value={['falseValue']} options={[{text: 'testText1', value: 'testValue1'}, {text: 'testText2', value: 'testValue2'}]} onValueChange={mockFn}/>)
    expect(mockFn).toHaveBeenCalledWith([], true)
  });
});