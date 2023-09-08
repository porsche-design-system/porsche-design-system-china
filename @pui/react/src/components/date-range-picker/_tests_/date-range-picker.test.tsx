import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { DateRangePicker } from '../date-range-picker'

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

describe('date-range-picker', () => {
  it('should render the component', () => {
    render(<DateRangePicker />)
  })

  it('should render with label', () => {
    render(<DateRangePicker label="test123" />)

    expect(screen.getByText('test123')).toBeInTheDocument()
  })

  it('should render with placeholder start', () => {
    render(<DateRangePicker placeholderStartDate="开始时间" />)
    expect(screen.getByText('开始时间')).toBeInTheDocument()
  })

  it('should render with placeholder end', () => {
    render(<DateRangePicker placeholderEndDate="结束时间" />)
    expect(screen.getByText('结束时间')).toBeInTheDocument()
  })

  it('should render with disabled', () => {
    render(<DateRangePicker label="test" disabled />)
    const element = document.querySelector(
      '.pui-date-range-picker-disabled-true'
    ) as HTMLElement

    expect(element).toBeTruthy()

    fireEvent.click(element)

    const calendarsElement = document.querySelector(
      '.pui-date-range-picker-calendars'
    )
    expect(calendarsElement).toBeFalsy()
  })

  it('should render with a value given', () => {
    const dateRange = ['2023-03-27', '2023-06-27']
    render(<DateRangePicker value={dateRange} />)

    dateRange.forEach(date =>
      expect(screen.getByText(date)).toBeInTheDocument()
    )
  })

  it('should render with showClearButton', () => {
    const dateRange = ['2023-03-27', '2023-06-27']

    render(<DateRangePicker value={dateRange} showClearButton />)
    const element = document.querySelector(
      '.pui-date-range-picker-box-with-clear-button'
    ) as HTMLElement

    expect(element).toBeTruthy()
  })

  it('should render with filterMode', () => {
    render(<DateRangePicker label="test" filterMode />)

    const element = document.querySelector(
      '.pui-date-range-picker-filter-label'
    ) as HTMLElement

    expect(element).toBeTruthy()
  })

  it('should render with defaultOpen', () => {
    const dateRange = ['2023-03-27', '2023-06-27']

    render(<DateRangePicker value={dateRange} showClearButton defaultOpen />)

    const element = document.querySelector(
      '.pui-date-range-picker-calendar-head'
    ) as HTMLElement

    expect(element).toBeTruthy()
  })

  it('should call the onValueChange func when value changed', async () => {
    const mockChange = jest.fn()
    const dateRange = ['2023-03-27', '2023-06-27']

    render(
      <DateRangePicker
        value={dateRange}
        showClearButton
        defaultOpen
        onValueChange={mockChange}
      />
    )

    const blocks = screen.getAllByText('30')

    fireEvent.click(blocks[0])

    expect(mockChange).toBeCalled()
  })

  it('should be unavailable dates out of range', () => {
    const dateRange = ['2023-03-27', '2023-03-28']
    render(<DateRangePicker showClearButton defaultOpen range={dateRange} />)

    const unavailableElement = document.querySelector(
      '.pui-date-range-picker-calendar-unavailable'
    ) as HTMLElement

    expect(unavailableElement).toBeTruthy()
  })

  it('should select automatically when set initial date', async () => {
    const value = ['2023-03-01', '2023-03-02']

    render(<DateRangePicker value={value} />)

    const dateInit = screen.getByText('2023-03-01')

    fireEvent.click(dateInit)

    const initialDate = screen.getAllByText('1')[0]

    expect(initialDate).toHaveClass('pui-date-range-picker-calendar-picked')
  })

  it('should start date available with range time without selecting initial time', async () => {
    const value = ['2023-03-01', null]

    render(
      <DateRangePicker
        range={value}
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
      />
    )

    const startButton = screen.getByText('开始日期')

    fireEvent.click(startButton)

    const preDate = screen.getAllByText('28')[0]
    const startDateClassName = screen.getAllByText('1')[0].className

    expect(preDate).toHaveClass('pui-date-range-picker-calendar-unavailable')
    expect(startDateClassName).toBe(
      'pui-date-range-picker-calendar-block        '
    )
  })

  it('should show calendar today when no set value and range', async () => {
    render(
      <DateRangePicker
        placeholderStartDate="开始日期"
        placeholderEndDate="结束日期"
      />
    )

    const startButton = screen.getByText('开始日期')

    fireEvent.click(startButton)

    const calendarTodayElement = document.querySelector(
      '.pui-date-range-picker-calendar-today'
    ) as HTMLElement

    expect(calendarTodayElement).toBeTruthy()
  })

  describe('click delete button', () => {
    it('should delete date initial when click start delete button', async () => {
      render(
        <DateRangePicker
          value={['2023-03-27', '2023-03-28']}
          showClearButton
          placeholderStartDate="开始日期"
        />
      )

      const deleteButton = document.querySelector('.pui-drpci-start')

      fireEvent.click(deleteButton!)

      const placeholder = screen.getByText('开始日期')

      expect(placeholder).toBeInTheDocument()
      expect(screen.getByText('2023-03-28')).toBeInTheDocument()
      expect(screen.queryByText('2023-03-27')).toBeNull()
    })

    it('should delete date end when click end delete button', async () => {
      render(
        <DateRangePicker
          value={['2023-03-27', '2023-03-28']}
          showClearButton
          placeholderEndDate="结束日期"
        />
      )

      const deleteButton = document.querySelector('.pui-drpci-end')

      fireEvent.click(deleteButton!)

      const placeholder = screen.getByText('结束日期')

      expect(placeholder).toBeInTheDocument()
      expect(screen.getByText('2023-03-27')).toBeInTheDocument()
      expect(screen.queryByText('2023-03-28')).toBeNull()
    })
  })

  describe('click Icon Arrow', () => {
    const date = new Date()
    const actualMouth = date.getMonth() + 1
    const actualYear = date.getFullYear()

    it('should go back one year when click IconArrowDoubleLeft', async () => {
      render(<DateRangePicker defaultOpen />)

      const arrow = screen.getByLabelText('icon_-arrow-double-left')

      const textActual = `${actualYear}年${actualMouth}月`

      expect(screen.getByText(textActual)).toBeInTheDocument()

      fireEvent.click(arrow)

      const yearPrevious = `${actualYear - 1}年${actualMouth}月`

      expect(screen.getByText(yearPrevious)).toBeInTheDocument()
    })

    it('should go forward one year when click IconArrowDoubleRight', async () => {
      render(<DateRangePicker defaultOpen />)

      const arrow = screen.getByLabelText('icon_-arrow-double-right')

      const textActual = `${actualYear}年${actualMouth}月`

      expect(screen.getByText(textActual)).toBeInTheDocument()

      fireEvent.click(arrow)

      const yearPrevious = `${actualYear + 1}年${actualMouth}月`

      expect(screen.getByText(yearPrevious)).toBeInTheDocument()
    })

    it('should go back one month when click IconArrowHeadLeft', async () => {
      render(<DateRangePicker defaultOpen />)

      const arrow = screen.getByLabelText('icon_-arrow-head-left')

      const textActual = `${actualYear}年${actualMouth}月`

      expect(screen.getByText(textActual)).toBeInTheDocument()

      fireEvent.click(arrow)

      const yearPrevious = `${actualYear}年${actualMouth - 1}月`

      expect(screen.getByText(yearPrevious)).toBeInTheDocument()
    })

    it('should go forward one month when click IconArrowHeadRight', async () => {
      render(<DateRangePicker defaultOpen />)

      const arrow = screen.getByLabelText('icon_-arrow-head-right')

      const textActual = `${actualYear}年${actualMouth}月`

      expect(screen.getByText(textActual)).toBeInTheDocument()

      fireEvent.click(arrow)

      const yearPrevious = `${actualYear}年${actualMouth + 1}月`

      expect(screen.getByText(yearPrevious)).toBeInTheDocument()
    })
  })

  describe('mustPickStartEnd property', () => {
    it('should clean all picked date when click start delete button', async () => {
      render(
        <DateRangePicker
          mustPickStartEnd
          value={['2023-03-27', '2023-03-28']}
          showClearButton
          placeholderStartDate="开始日期"
          placeholderEndDate="结束日期"
        />
      )

      expect(screen.getByText('2023-03-27')).toBeInTheDocument()
      expect(screen.getByText('2023-03-28')).toBeInTheDocument()

      const deleteButton = document.querySelector('.pui-drpci-start')

      fireEvent.click(deleteButton!)

      expect(screen.getByText('开始日期')).toBeInTheDocument()
      expect(screen.getByText('结束日期')).toBeInTheDocument()
    })

    it('should clean all picked date when click end delete button', async () => {
      render(
        <DateRangePicker
          mustPickStartEnd
          value={['2023-03-27', '2023-03-28']}
          showClearButton
          placeholderStartDate="开始日期"
          placeholderEndDate="结束日期"
        />
      )

      expect(screen.getByText('2023-03-27')).toBeInTheDocument()
      expect(screen.getByText('2023-03-28')).toBeInTheDocument()

      const deleteButton = document.querySelector('.pui-drpci-end')

      fireEvent.click(deleteButton!)

      expect(screen.getByText('开始日期')).toBeInTheDocument()
      expect(screen.getByText('结束日期')).toBeInTheDocument()
    })
  })

  describe('range type is string', () => {
    it('should set range when range property is string', () => {
      render(<DateRangePicker range="2023-03-01,2023-03-02" defaultOpen />)

      const unavailableElement = document.querySelector(
        '.pui-date-range-picker-calendar-unavailable'
      ) as HTMLElement

      const outOfRangeDate = screen.getAllByText('3')[0]

      expect(unavailableElement).toBeTruthy()
      expect(outOfRangeDate).toHaveClass(
        'pui-date-range-picker-calendar-unavailable'
      )
    })

    it('should set range when range is in xxx days', () => {
      render(<DateRangePicker range="In3Days" defaultOpen />)

      const unavailableElement = document.querySelector(
        '.pui-date-range-picker-calendar-unavailable'
      ) as HTMLElement

      expect(unavailableElement).toBeTruthy()
    })
  })

  describe('picker box active', () => {
    it('should active box when select start date', async () => {
      render(
        <DateRangePicker
          placeholderStartDate="开始日期"
          placeholderEndDate="结束日期"
        />
      )

      const button = screen.getByText('开始日期')

      fireEvent.click(button)

      const pickerBox = document.querySelector('.pui-date-range-picker-box')

      expect(pickerBox).toHaveClass('pui-date-range-picker-box-active')
    })

    it('should active end pick box when select start date', async () => {
      render(
        <DateRangePicker
          placeholderStartDate="开始日期"
          placeholderEndDate="结束日期"
        />
      )

      const button = screen.getByText('开始日期')

      fireEvent.click(button)

      const startDate = screen.getAllByText('1')[0]

      fireEvent.click(startDate)

      const pickerBox = document.querySelectorAll(
        '.pui-date-range-picker-box'
      )[1]

      expect(pickerBox).toHaveClass('pui-date-range-picker-box-active')
    })

    it('should active start pick box when select end date', async () => {
      render(
        <DateRangePicker
          placeholderStartDate="开始日期"
          placeholderEndDate="结束日期"
        />
      )

      const button = screen.getByText('结束日期')

      fireEvent.click(button)

      const startDate = screen.getAllByText('1')[0]

      fireEvent.click(startDate)

      const pickerBox = document.querySelectorAll(
        '.pui-date-range-picker-box'
      )[0]

      expect(pickerBox).toHaveClass('pui-date-range-picker-box-active')
    })
  })
})
