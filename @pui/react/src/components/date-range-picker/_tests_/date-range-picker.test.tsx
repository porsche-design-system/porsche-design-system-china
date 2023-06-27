import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import { DateRangePicker } from '../date-range-picker';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (T: any) => T,
      i18n: {
        changeLanguage: () => new Promise(() => {
        })
      }
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {
    }
  }
}));


describe('date-range-picker', () => {
  it('should render the component', () => {
    render(<DateRangePicker />);
  });

  it('should render with label', () => {
    render(<DateRangePicker label='test123' />);

    expect(screen.getByText('test123')).toBeInTheDocument();

  });

  it('should render with placeholder start', () => {
    render(<DateRangePicker placeholderStartDate='开始时间' />);
    expect(screen.getByText('开始时间')).toBeInTheDocument();

  });

  it('should render with placeholder end', () => {
    render(<DateRangePicker placeholderEndDate='结束时间' />);
    expect(screen.getByText('结束时间')).toBeInTheDocument();


  });

  it('should render with disabled', () => {
    render(<DateRangePicker label='test' disabled />);
    const element = document.querySelector(
      '.pui-date-range-picker-disabled-true'
    ) as HTMLElement;

    expect(element).toBeTruthy();

    fireEvent.click(element);

    const calendarsElement = document.querySelector(
      '.pui-date-range-picker-calendars'
    );
    expect(calendarsElement).toBeFalsy();
  });

  it('should render with a value given', () => {
    const dateRange = ['2023-03-27', '2023-06-27'];
    render(<DateRangePicker value={dateRange} />);


    dateRange.forEach((date) => expect(screen.getByText(date)).toBeInTheDocument());
  });


  it('should render with showClearButton', () => {
    const dateRange = ['2023-03-27', '2023-06-27'];

    render(<DateRangePicker value={dateRange} showClearButton />);
    const element = document.querySelector('.pui-date-range-picker-box-with-clear-button') as HTMLElement;

    expect(element).toBeTruthy();
  });

  it('should render with filterMode', () => {
    render(<DateRangePicker label='test' filterMode />);

    const element = document.querySelector(
      '.pui-date-range-picker-filter-label'
    ) as HTMLElement;

    expect(element).toBeTruthy();
  });

  it('should render with defaultOpen', () => {
    const dateRange = ['2023-03-27', '2023-06-27'];

    render(<DateRangePicker value={dateRange} showClearButton  defaultOpen />);


    const element = document.querySelector('.pui-date-range-picker-calendar-head') as HTMLElement

    expect(element).toBeTruthy();

    ['2023年6月', '2023年7月'].forEach((text)=> expect(screen.getByText(text)).toBeInTheDocument())

  });


  it('should call the onValueChange func when value changed', async () => {
    const mockChange = jest.fn();
    const dateRange = ['2023-03-27', '2023-06-27'];

    render(<DateRangePicker value={dateRange} showClearButton defaultOpen onValueChange={mockChange} />);

    const blocks = screen.getAllByText('30')

    await userEvent.click(blocks[0]);

    expect(mockChange).toBeCalled();
    expect(mockChange).toBeCalledWith(['2023-05-30', '2023-06-27'])


  });


});


