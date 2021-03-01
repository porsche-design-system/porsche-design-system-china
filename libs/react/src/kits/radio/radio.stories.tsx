import React from 'react';
import { Radio } from './radio';
import './radio.stories.scss';

export default {
  title: 'General/Radio',
  component: Radio
};

export const RadioStoryBook = () => {
  return (
    <div>
      <Radio />
    </div>
  );
};

RadioStoryBook.storyName = 'Radio';
