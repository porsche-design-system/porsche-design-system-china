import React from 'react';
import { Search } from '../..';

export default {
  title: 'Data Entry/Search',
  component: Search
};

export const InputStoryBook = () => {
  return (
    <div>
      <Search placeholder="请输入" />
    </div>
  );
};

InputStoryBook.storyName = 'Search';
