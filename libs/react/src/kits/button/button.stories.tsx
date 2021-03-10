import React from 'react';
import { Button } from './button';
import './button.stories.scss';

import { ArrowHeadRight } from '@pui/icons';

export default {
  title: 'General/Button',
  component: Button
};

export const ButtonStoryBook = () => {
  return (
    <div>
      <div className="group">
        <div className="title">Types</div>
        <div className="show-case">
          <Button type="default" icon={<ArrowHeadRight />}>
            Default Button
          </Button>
          <Button type="primary">Primary Button</Button>
          <Button type="secondary">Secondary Button</Button>
          <Button type="text">Text Button</Button>
        </div>
      </div>

      <div className="group">
        <div className="title">Sizes</div>
        <div className="show-case">
          <Button size="small">Small Button</Button>
          <Button size="middle">Middle Button</Button>
          <Button size="large">Large Button</Button>
        </div>
      </div>
    </div>
  );
};

ButtonStoryBook.storyName = 'Button';
