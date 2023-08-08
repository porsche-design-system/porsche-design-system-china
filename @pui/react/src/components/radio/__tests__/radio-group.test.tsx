import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { RadioGroup } from "../radio-group"
import { Radio } from "../radio"


describe('test radio group component render', () => {
  it('should render radio group component text correctly', () => {
    render(<RadioGroup>
      <Radio text="选项1" value="val1" />
      <Radio text="选项2" value="val2" />
    </RadioGroup>)

    expect(screen.getByText('选项1')).toBeInTheDocument()
    expect(screen.getByText('选项2')).toBeInTheDocument()
  })

  it('should render disabled classname when prop is disabled', () => {
    render(<RadioGroup disabled> <Radio text="选项3" value="val3" /></RadioGroup>)

    expect(screen.getByText('选项3').parentElement).toHaveClass('pui-radio-group-disabled-true')
  })


  it('should render error classname when prop is error', () => {
    render(<RadioGroup error={{show: true}}> <Radio text="选项4" value="val4" /></RadioGroup>)

    expect(screen.getByText('选项4').parentElement).toHaveClass('pui-radio-group-error-true')
  })

})

describe('test radio group component function', () => {
  it('should render correct radio option when options is string', () => {
    render(<RadioGroup options="选项5:value5, 选项6:value6" />)

    expect(screen.getByText('选项5')).toBeInTheDocument()
    expect(screen.getByText('选项6')).toBeInTheDocument()
  })

  it('should render correct radio option when options is string array', () => {
    render(<RadioGroup options={['选项9', '选项10']} />)

    expect(screen.getByText('选项9')).toBeInTheDocument()
  })

  it('should render correct radio option when options is object array', () => {
    render(<RadioGroup options={[{text: '选项7', value: 'val7'}]} />)

    expect(screen.getByText('选项7')).toBeInTheDocument()
  })

  it('should render correct radio option when allowCancelSelection is true', () => {
    const valueChangeFn = jest.fn()
    render(<RadioGroup value="val8" options={[{text: '选项8', value: 'val8'}]} allowCancelSelection onValueChange={valueChangeFn}/>)

    fireEvent.click(screen.getByText('选项8'))

    expect(valueChangeFn).toBeCalledWith('', false)
  })
})
