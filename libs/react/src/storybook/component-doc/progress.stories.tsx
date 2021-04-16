import React from 'react';
import { Progress } from '../..';

import './progress.stories.scss';

export default {
  title: 'Feedback/Progress',
  component: Progress
};

export const ProgressStoryBook = () => {
  return (
   <div className="progress-demo">
    <Progress percent={ 15 } />
    <br/>
    <Progress percent={100} />
    <br/>
    <Progress percent={50} showInfo={false} status="error" />
   </div>
  )
}

ProgressStoryBook.storyName = 'Progress';
