import React from 'react';
import { Button, Message } from '../..';

export default {
  title: 'Feedback/Message'
};

export const knobsMessage = () => {
  const tx = 'Hello, this is a message from PUI';
  const onClick = (type: any, config?: any) => {
    Message.pop(type, tx, config);
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
