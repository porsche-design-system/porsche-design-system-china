import React from 'react'
import { Timeline, TimelineItem } from '../..'
import './timeline.stories.scss'

export default {
  title: 'Data Display/Timeline',
  component: Timeline,
  subcomponents: { TimelineItem }
}

export const TimelineStoryBook = () => {
  return (
    <div>
      <Timeline>
        <TimelineItem color="green">
          Create a services site 2015-09-01
        </TimelineItem>
        <TimelineItem color="green">
          Create a services site 2015-09-01
        </TimelineItem>
        <TimelineItem color="red">
          <p>Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </TimelineItem>
        <TimelineItem>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </TimelineItem>
        <TimelineItem color="gray">
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </TimelineItem>
        <TimelineItem color="gray">
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

TimelineStoryBook.storyName = 'Timeline'
