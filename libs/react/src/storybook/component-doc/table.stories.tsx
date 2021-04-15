import React from 'react';
import { Table } from '../..';

export default {
  title: 'Data Display/Table',
  component: Table
};

export const TableStoryBook = () => {
  return (
    <div>
      <Table />
    </div>
  );
};

TableStoryBook.storyName = 'Table';
