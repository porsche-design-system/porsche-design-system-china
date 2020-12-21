import React from 'react';
import Button from './index';
import { ButtonType, ButtonTypes, SizeType, SIZES } from './types';
import { withKnobs, text, select, color } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
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
