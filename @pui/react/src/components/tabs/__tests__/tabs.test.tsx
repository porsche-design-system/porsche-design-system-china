import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from '../tabs';
import { TabPane } from '../tabpane';


describe('test tabs component render', () => {
  it('should render no border in tab component when prop has not border', () => {
    render(<Tabs>
      <TabPane title="标题一">内容一</TabPane>
      <TabPane title="标题二">内容二</TabPane>
    </Tabs>)
    const titleEl = screen.getByText('标题一')
    expect(titleEl?.parentElement?.parentElement).not.toHaveClass('line')
  });

  it('should render border in tab component when prop has border', () => {
    render(<Tabs hasLine>
      <TabPane title="标题一">有线TAB1</TabPane>
    </Tabs>)
    const titleEl = screen.getByText('标题一')
    expect(titleEl?.parentElement?.parentElement).toHaveClass('pui-tabs-header-line-true')
  });
});

describe('test tabs reactive', () => {
  it('should active tab by change tab key', () => {
    const activeKeyChange = jest.fn()
    render(
      <Tabs hasLine activeKey='Tab1' onActiveKeyChange={activeKeyChange}>
        <TabPane title="标题一" tabKey="Tab1">
          内容一
        </TabPane>
        <TabPane title="标题二" tabKey="Tab2">
          内容二
        </TabPane>
      </Tabs>
    )

    fireEvent.click(screen.getByText('标题二'))
    expect(activeKeyChange).toHaveBeenCalled()
  });
});
