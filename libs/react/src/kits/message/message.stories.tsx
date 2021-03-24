import React from 'react';
import { message, MessageType } from './index';
import { withKnobs, text, boolean, color, select, number } from '@storybook/addon-knobs';

const Options: MessageType[] = ['info', 'success', 'error', 'warning', 'loading', 'default'];

export default {
  title: 'General/Message',
  decorators: [withKnobs]
};

export const knobsMessage = () => {
  const se = select<MessageType>('iconType', Options, 'default');
  const op = {
    delay: number('delay', 2000),
    animationDuring: number('animationDuring', 300),
    background: color('background', '#fff'),
    color: color('color', '#333')
  };
  const tx = text('content', 'hello message');
  const onClick = () => message[se](tx, op);

  return (
    <div>
      <button onClick={onClick}>click</button>
    </div>
  );
};
