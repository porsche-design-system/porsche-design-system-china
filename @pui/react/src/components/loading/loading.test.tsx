import React from 'react'
import { render} from '@testing-library/react'
import {Loading,LoadingProps} from './loading'

const defaultProps:LoadingProps = {  
  visible:true
}
describe('test loading component', () => {
  it('should render the correct default loading', () => {
    render(<Loading {...defaultProps} />)
  })

  it('should render the correct loading with text', () => {
  render(<Loading {...defaultProps} text='test'/>)
    expect(document.getElementsByClassName('pui-loading-text')[0].innerHTML).toEqual('test');
  })

  it('should render the correct loading with size', () => {
    render(<Loading {...defaultProps} text='test' size={40}/>)
    const element=document.getElementsByTagName('svg')[0]
      expect(element).toBeInTheDocument();
      expect(element.getAttribute('height')).toEqual('40')
      expect(element.getAttribute('width')).toEqual('40')
    })

    it('should render the correct loading with top', () => {
      render(<Loading {...defaultProps} top='50px'/>)
      const element=document.getElementsByClassName('pui-loading-svg')[0]
        expect(element).toBeInTheDocument();
        expect(element.getAttribute('style')).toEqual('margin-top: 50px;')
      })
})