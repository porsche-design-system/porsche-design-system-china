import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DateTimePicker } from './date-time-picker'

describe('test the DateTimePicker component', () => {
  it('should render with a default', () => {
    render(
      <DateTimePicker
        width="300px"
        label="年月日时分"
        placeholder="年月日时分"
        showStyle="CommonHHMMSS"
        componentId="testTime4"
        size="small"
      />
    )

    const element = document.getElementById('testTime4') as HTMLDivElement
    expect(element.getAttribute('placeholder')).toBe('年月日时分')
  })

  test('change DateTimePicker.', () => {
    const handlerChange = jest.fn()

    render(
      <DateTimePicker
        width="300px"
        label="年月日时分"
        placeholder="年月日时分"
        showStyle="CommonHHMMSS"
        componentId="testTime5"
        size="small"
        onValueChange={handlerChange}
      />
    )
    const element = document.getElementById('testTime5') as HTMLDivElement
    fireEvent.click(element)
    const okElement = document.getElementsByClassName(
      'setok'
    )[0] as HTMLDivElement
    fireEvent.click(okElement)
    expect(handlerChange).toHaveBeenCalled()
  })

  test('test range dateTimePicker component', () => {
    render(
      <DateTimePicker
        isRange
        width="300px"
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        showStyle="Common"
        componentId="testTime3b"
      />
    )
    const element = document.getElementById('testTime3b') as HTMLDivElement
    expect(element.getAttribute('placeholder')).toBe('开始日期')

    const elementEnd = document.getElementById(
      'testTime3bposend'
    ) as HTMLDivElement
    expect(elementEnd.getAttribute('placeholder')).toBe('结束日期')
  })

  test('test the range dateTimePicker  opens panel.', () => {
    render(
      <DateTimePicker
        isRange
        width="300px"
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
        showStyle="Common"
        componentId="testTime3a"
      />
    )

    const element = document.getElementById('testTime3a') as HTMLDivElement
    fireEvent.click(element)
    const wrapElement = document.getElementsByClassName(
      'pui-pick-date-wrap'
    )[0] as HTMLDivElement
    expect(wrapElement).toHaveClass('pui-pick-date-wrap')
  })

  test('test the dateTimePicker of the filterMode', () => {
    render(
      <DateTimePicker
        label="到港日期"
        filterMode
        labelPosition="left"
        showStyle="HHMM"
        componentId="testTime5cb"
      />
    )

    const element = document.getElementsByClassName(
      'filterMode'
    )[0] as HTMLDivElement
    expect(element).toHaveClass('filterMode')
  })

  test('test the dateTimePicker of the filterMode opens the panel', () => {
    render(
      <DateTimePicker
        label="到港日期"
        filterMode
        labelPosition="left"
        showStyle="HHMM"
        componentId="testTimeOpens"
      />
    )
    const element = document.getElementsByClassName(
      'filterMode'
    )[0] as HTMLDivElement
    fireEvent.click(element)
    const panel = document.getElementsByClassName(
      'filterMode-single'
    )[0] as HTMLDivElement
    expect(panel).toHaveClass('filterMode-single')
  })
})
