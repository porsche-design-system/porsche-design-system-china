import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import {TextArea} from './textarea'

const defaultProps:any = {  
  defaultValue:"textarea",
  placeholder:"placeholder"
}
const functionProps:any = {
  ...defaultProps,
  onFocus:jest.fn(),
  onChange:jest.fn(),
  onBlur:jest.fn(),
  onValueChange: jest.fn(),

}
const disabledProps:any = {
  ...defaultProps,
  disabled: true,
}
const readOnlyProps:any = {  
  ...defaultProps,
  readOnly: true,
}
const maxLengthProps:any={
  ...defaultProps,
  maxLength:200,
}
const hidemaxLengthProps:any={
  ...defaultProps,
  maxLength:200,
  hideMaxLength:true
}
describe('test textarea component', () => {
  it('should render the correct default textarea', () => {
    const wrapper = render(<TextArea {...defaultProps} />)
    const element = wrapper.getByText('textarea')
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('placeholder','placeholder')
    expect(element).toHaveDisplayValue(defaultProps.defaultValue)
  })

  it('should render the correct disabled textarea', () => {
    const wrapper = render(<TextArea {...disabledProps}/>)
    const element = wrapper.getByText('textarea')
    expect(element).toBeInTheDocument()
    expect(element).toHaveProperty('disabled',true)
  }) 

  it('should render the correct readOnly textarea', () => {
    const wrapper = render(<TextArea {...readOnlyProps}/>)
    const element = wrapper.getByText('textarea')
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('readonly')
  })  

  it('should render the correct function textarea', () => {
    const wrapper = render(<TextArea {...functionProps}/>)
    const element = wrapper.getByText('textarea')
    expect(element).toBeInTheDocument()
    fireEvent.focus(element as HTMLElement)
    fireEvent.change(element as HTMLElement,{ target: { value: 'test' }} )
    fireEvent.blur(element as HTMLElement)    
    expect(functionProps.onFocus).toBeCalled()
    expect(functionProps.onBlur).toBeCalled()
    expect(functionProps.onChange).toBeCalled()
    expect(element).toHaveDisplayValue('test')
    expect(functionProps.onValueChange).toBeCalledWith('test')

  }) 



  it('should render the correct maxlength textarea', () => {
    const wrapper = render(<TextArea {...maxLengthProps}/>)
    const element = wrapper.getByText('textarea')
    const countElement = wrapper.container.querySelector('.pui-textarea-char-count')
    expect(countElement).toBeInTheDocument()
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('maxlength','200')
  })   

  it('should render the correct hidemaxlength textarea', () => {
    const wrapper = render(<TextArea {...hidemaxLengthProps}/>)
    const element = wrapper.getByText('textarea')
    const countElement = wrapper.container.querySelector('.pui-textarea-char-count')
    expect(countElement).not.toBeInTheDocument()
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('maxlength','200')
  }) 
})