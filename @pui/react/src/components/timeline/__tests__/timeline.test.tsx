import React from 'react'
import { render } from '@testing-library/react'
import { Timeline } from '../timeline'
import { TimelineItem } from '../timeline-item'

describe('test Timeline component', () => {
  it('should render the correct default size Timeline', () => {
    const wrapper = render(
      <Timeline>
        <TimelineItem color="green" className="timeline-item">
          Timeline 1
        </TimelineItem>
        <TimelineItem color="green" className="timeline-item">
          Timeline 2
        </TimelineItem>
        <TimelineItem color="red" className="timeline-item">
          <p>Timeline 3</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </TimelineItem>
      </Timeline>
    )

    const items = wrapper.container.querySelectorAll('.timeline-item')
    const redItems = wrapper.container.querySelectorAll(
      '.pui-timeline-item-head-color-red'
    )
    const greenItems = wrapper.container.querySelectorAll(
      '.pui-timeline-item-head-color-green'
    )

    expect(items.length).toEqual(3)
    expect(greenItems.length).toEqual(2)
    expect(redItems.length).toEqual(1)
    expect(wrapper.container.querySelector('.pui-timeline')).toHaveClass(
      'pui-timeline pui-timeline-size-medium'
    )
  })

  it('should render the correct small size Timeline', () => {
    const wrapper = render(
      <Timeline size="small" data-testid="t1">
        <TimelineItem>Timeline 1</TimelineItem>
      </Timeline>
    )

    const items = wrapper.getAllByText('Timeline 1')
    const defaultItems = wrapper.container.querySelectorAll(
      '.pui-timeline-item-content'
    )

    expect(items.length).toEqual(1)
    expect(defaultItems.length).toEqual(1)
    expect(wrapper.container.querySelector('.pui-timeline')).toHaveClass(
      'pui-timeline-size-small'
    )
  })
})
