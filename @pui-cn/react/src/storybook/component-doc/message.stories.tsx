import React from 'react'
import { Button, Message } from '../..'

export default {
  title: 'Feedback/Message',
  component: Message
}

export const knobsMessage = () => {
  const msg = 'Hello, this is a message from PUI'

  return (
    <div>
      <Button onClick={() => Message.info(msg)} type="default">
        Info
      </Button>
      <Button onClick={() => Message.warning(msg)} type="primary">
        Warning
      </Button>
      <Button onClick={() => Message.success(msg)} type="secondary">
        Success
      </Button>
      <Button onClick={() => Message.error(msg)} type="primary">
        Error
      </Button>
      <Button
        onClick={() => Message.error(msg, { closable: true })}
        type="default"
      >
        Closeable
      </Button>
    </div>
  )
}
