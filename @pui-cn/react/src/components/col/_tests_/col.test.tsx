import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Col } from '../col';


describe('Col', () => {
  it('should render col without crashing', () => {
    render(<Col />);
  });

  it('should render its children', () => {
    render(<Col>
      <div>children</div>
    </Col>);

    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();

    const { getByText } = render(<Col onClick={onClick}>Click me</Col>);
    fireEvent.click(getByText('Click me'));

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toBeCalledTimes(1);
  });

});
