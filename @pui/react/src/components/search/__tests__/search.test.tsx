import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Search } from '../search'

describe('search', () => {
  it('should render Search with a default style', () => {
    render(
      <Search
        className="testClassName"
        style={{ color: 'red' }}
        width="120px"
        marginRight="30px"
        marginLeft="40px"
        size="small"
      />
    )
    const search = document.getElementsByClassName('pui-search')[0]
    expect(search).toBeInTheDocument()
    expect(search).toHaveClass('testClassName pui-search-size-small')
    expect(search.getAttribute('style')).toContain('color: red;')
    expect(search.getAttribute('style')).toContain('width: 120px')
    expect(search.getAttribute('style')).toContain('margin-right: 30px')
    expect(search.getAttribute('style')).toContain('margin-left: 40px')
  })

  it('should render Search with a default input', () => {
    const { getByRole } = render(
      <Search
        placeholder="testPlaceholder"
        defaultValue="defaultValue"
        maxLength={300}
      />
    )

    const search = getByRole('textbox') as HTMLInputElement
    expect(search.getAttribute('placeholder')).toBe('testPlaceholder')
    expect(search.getAttribute('value')).toBe('defaultValue')
    expect(search).toHaveAttribute('maxLength', '300')
  })

  it('should render in disabled status', () => {
    render(<Search value="123" disabled />)
    const search = document.getElementsByClassName('pui-search')[0]
    expect(search).toHaveClass('pui-search-disabled-true')
  })

  it('should show clear button when input value', () => {
    render(<Search value="123" showClearButton />)
    const search = document.getElementsByClassName('pui-input-clear')
    expect(search.length > 0).toBe(true)
  })

  it('should show search button background', () => {
    render(<Search showSearchButtonBg />)
    const search = document.getElementsByClassName('pui-search')[0]
    expect(search).toHaveClass('pui-search-show-search-button-bg-true')
  })

  it('should show error remind when input do not meet the type', () => {
    const { getByRole } = render(
      <Search
        rules={[{ type: 'email', message: '输入的内容必须是邮件地址' }]}
      />
    )
    const search = getByRole('textbox') as HTMLInputElement

    waitFor(() => {
      fireEvent.change(search, { target: { value: 'new value' } })
      expect(search.parentElement).toHaveClass('pui-input-error-true')
    })
  })

  it('shoud call onValueChange', () => {
    const onValueChange = jest.fn()
    const { getByRole } = render(<Search onValueChange={onValueChange} />)
    const inputElement = getByRole('textbox') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'new value' } })
    fireEvent.change(inputElement, { target: { value: 'another value' } })

    expect(onValueChange).toHaveBeenCalledTimes(2)
  })

  it('shoud call onSearch', () => {
    const onSearch = jest.fn()
    render(<Search onSearch={onSearch} />)
    const element = document.getElementsByClassName(
      'pui-search-button'
    )[0] as HTMLDivElement
    waitFor(() => {
      fireEvent.click(element)
      expect(onSearch).toBeCalled()
    })
  })

  it('shoud call onBlur', () => {
    const onBlur = jest.fn()
    const { getByRole } = render(<Search onBlur={onBlur} />)
    const element = getByRole('textbox') as HTMLInputElement
    waitFor(() => {
      fireEvent.blur(element)
      expect(onBlur).toBeCalled()
    })
  })
})
