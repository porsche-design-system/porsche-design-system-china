import React from 'react';
import { Button, message } from '../..';

export default {
  title: 'Feedback/Message'
};

export const knobsMessage = () => {
  const op = {
    delay: 2000,
    animationDuring: 300
  };
  const tx = 'hello message';
  const onClick = (type: string, config?: any) => {
    message[type](tx, config || op);
  };

  return (
    <div>
      <Button onClick={() => onClick('info')} type="default">
        Info
      </Button>
      <Button onClick={() => onClick('warning')} type="primary">
        Warning
      </Button>
      <Button onClick={() => onClick('success')} type="secondary">
        Success
      </Button>
      <Button onClick={() => onClick('error')} type="primary">
        Error
      </Button>
      <Button onClick={() => onClick('info', { closeble: true })} type="default">
        Closeable
      </Button>
    </div>
  );
};
