import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Layout from './index';

export default {
  title: 'Layout',
  component: Layout,
  decorators: [withKnobs]
};

export const knobsLayout = () => (
  <Layout
    {...{
      hasTop: true,
      style: {
        asideFlex: 1,
        contentFlex: 5
      }
    }}
  />
);

export const TheLayout = () => (
  <Layout
    {...{
      style: {
        asideFlex: 1,
        contentFlex: 5
      }
    }}
  />
);
