import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { SplitButton } from '../split-button'
// import { Menu } from '../..'

// const overlay = <Menu>
//   <Menu.Item index="a">
//     电子签署
//   </Menu.Item>
// </Menu>

describe('test SplitButton component', () => {
  it('should render the correct default SplitButton', () => {
    const wrapper = render(<SplitButton overlay={<></>} />)
    const dropdownElement = wrapper.container.querySelector('.pui-dropdown')
    expect(dropdownElement).toBeInTheDocument()
    const innerElement = wrapper.container.querySelector('.pui-split-button')
    expect(innerElement).toBeInTheDocument()
    expect(innerElement).toHaveClass('pui-split-button-type-primary')
    const afterAddonBtn = wrapper.container.querySelector(
      '.afterAddon .pui-button'
    )
    fireEvent.click(afterAddonBtn as HTMLElement)
    const popWrap = document.querySelector('#pui-pop-wrap') as Element
    expect(popWrap.querySelector('.pui-dropdown-open')).toBeTruthy()
  })

  it('should render the disabled SplitButton', () => {
    const wrapper = render(<SplitButton disabled overlay={<></>} />)
    const clickBtn = wrapper.container.querySelector('.afterAddon .pui-button')
    fireEvent.click(clickBtn as HTMLElement)
    const popWrap = document.querySelector('#pui-pop-wrap') as Element
    expect(popWrap.querySelector('.pui-dropdown-open')).toBeNull()
  })

  it('should render the loading SplitButton', () => {
    const wrapper = render(<SplitButton loading overlay={<></>} />)
    const clickBtn = wrapper.container.querySelector('.afterAddon .pui-button')
    fireEvent.click(clickBtn as HTMLElement)
    const popWrap = document.querySelector('#pui-pop-wrap') as Element
    expect(popWrap.querySelector('.pui-dropdown-open')).toBeNull()
    const icon = wrapper.container.querySelector('.pui-button-icon')
    expect(icon).toBeInTheDocument()
  })
})
