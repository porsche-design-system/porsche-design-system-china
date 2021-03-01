import React from 'react';
import { Example } from './example';
import './example.stories.scss';

export default {
  title: 'Example/Example',
  component: Example
};

export const ExampleStoryBook = () => {
  return <div>Example</div>;
};

ExampleStoryBook.storyName = 'Example';
