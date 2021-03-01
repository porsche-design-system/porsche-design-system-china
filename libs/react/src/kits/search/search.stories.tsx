import React from 'react';
import { Search } from './search';
import './search.stories.scss';

export default {
  title: 'General/Search',
  component: Search
};

export const InputStoryBook = () => {
  return (
    <div>
      <Search placeHolder="请输入" />
    </div>
  );
};

InputStoryBook.storyName = 'Search';
