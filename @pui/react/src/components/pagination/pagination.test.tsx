import React from 'react'
import {fireEvent,render } from '@testing-library/react'
import {Pagination} from './pagination'

const SimpleProps:any = {  
    pageSize:10,
    current:1,
    onCurrentChange:jest.fn(),
    total:50,
    className:'test'
}
const fullProps:any={
    ...SimpleProps,
    type:'full'
}
const rightProps:any={
    ...SimpleProps,

    align:"right"
}
const leftProps:any={
    ...SimpleProps,
    align:"center"
}
describe('test Pagination component', () => {
    it('should render the correct simple Pagination', () => {
        const wrapper=render(<Pagination {...SimpleProps} />)
        const container=document.getElementsByClassName('pui-pagination')[0]
        expect(container.getAttribute('style')).toEqual('justify-content: start;')
        expect(container).toHaveClass(SimpleProps.className)
        const element = wrapper.getByText(SimpleProps.current)    
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('pui-pagination-item-active')
        const nextPage = wrapper.getByText(SimpleProps.current+1)
        fireEvent.click(nextPage as HTMLElement)
        expect(SimpleProps.onCurrentChange).toBeCalledWith(SimpleProps.current+1)
    })
    
    it('should render the correct full pagaination',()=>{
        render(<Pagination {...fullProps} />)
        const moreInfo=document.getElementsByClassName('pui-pagination-more-info')[0]
        expect(moreInfo).toBeInTheDocument()
        const pageSizeElement=document.getElementsByClassName('pui-select')[0]
        expect(pageSizeElement).toBeInTheDocument()
    })

    it('should render the correct right pagaination',()=>{
         render(<Pagination {...rightProps} />)
         expect(document.getElementsByClassName('pui-pagination')[0].getAttribute('style')).toEqual('justify-content: end;')
    })
    
    it('should render the correct center pagaination',()=>{
        render(<Pagination {...leftProps} />)
         expect(document.getElementsByClassName('pui-pagination')[0].getAttribute('style')).toEqual('justify-content: center;')
    })
  })