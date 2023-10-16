import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Row } from '../row';


describe('Row', () => {
  it('should render row without crashing', () => {
    render(<Row />);
  });

  it('should render row with its children', () => {

    render(<Row>
      <div>test</div>
    </Row>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const onClick = jest.fn();

    const { getByText } = render(<Row onClick={onClick}>Click me</Row>);
    fireEvent.click(getByText('Click me'));

    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1)
  });
});
