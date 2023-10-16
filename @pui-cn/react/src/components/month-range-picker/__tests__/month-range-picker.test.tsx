import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { MonthRangePicker } from '../month-range-picker'

// Mock the useTranslation hook
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (T: any) => T,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    }
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {}
  }
}))

describe('MonthRangePicker component', () => {
  it('should render', () => {
    const { getByText } = render(<MonthRangePicker label="保修日期" />)
    expect(getByText('保修日期')).toBeInTheDocument()
  })

  it('should render with disabled', () => {
    render(<MonthRangePicker label="保修日期" disabled />)
    const element = document.querySelector(
      '.pui-month-range-picker-disabled-true'
    ) as HTMLElement

    expect(element).toBeTruthy()

    fireEvent.click(element)

    const calendarsElement = document.querySelector(
      '.pui-month-range-picker-calendars'
    )
    expect(calendarsElement).toBeFalsy()
  })

  it('should render with default open', () => {
    render(<MonthRangePicker label="保修日期" defaultOpen />)
    const element = document.querySelector('.pui-month-range-picker-calendars')
    expect(element).toBeTruthy()
  })

  it('should render with defaultValue', () => {
    render(
      <MonthRangePicker
        label="保修日期"
        defaultOpen
        defaultValue={['2022-01', '2023-06']}
      />
    )
    const element = document.querySelector(
      '.pui-month-range-picker'
    ) as HTMLElement
    fireEvent.click(element)
    const selectElement = document.querySelectorAll(
      '.pui-month-range-picker-calendar-in-pick-range'
    )
    expect(selectElement).toHaveLength(18)
  })

  it('should render with range', () => {
    render(<MonthRangePicker label="保修日期" range={['2023-06', '2023-12']} />)

    const element = document.querySelector(
      '.pui-month-range-picker'
    ) as HTMLElement

    fireEvent.click(element)

    const disabledElement = document.querySelectorAll(
      '.pui-month-range-picker-calendar-unavailable'
    )

    expect(disabledElement).toHaveLength(17)
  })
  it('should render with filterMode', () => {
    render(<MonthRangePicker label="保修日期" filterMode />)

    const element = document.querySelector(
      '.pui-month-range-picker-filter-label'
    ) as HTMLElement

    expect(element).toBeTruthy()
  })
})
