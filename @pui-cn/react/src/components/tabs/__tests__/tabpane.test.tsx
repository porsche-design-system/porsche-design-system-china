import React from 'react'
import { render, screen } from '@testing-library/react';
import { TabPane } from '../tabpane';

describe('should render tab panel correctly', () => {
  it('should render child', () => {
    render(<TabPane title='tab'>tab panel</TabPane>)

    expect(screen.getByText('tab panel')).toBeInTheDocument()
  });
});
