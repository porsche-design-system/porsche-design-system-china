import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { ButtonType, ButtonTypes, SizeType, SIZES } from './types';

import Button from './button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const knobsButton = () => (
  <Button
    size={select<SizeType>('size', SIZES, 'large')}
    type={select<ButtonType>('type', ButtonTypes, 'primary')}
  >
    {text('123', '123')}
  </Button>
);

export const Btn = () => <Button type="ghost">12344</Button>;
