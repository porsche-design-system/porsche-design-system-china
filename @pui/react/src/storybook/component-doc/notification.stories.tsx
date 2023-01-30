import React from 'react'
import { Button, Notification } from '../..'

export default {
  title: 'Feedback/Notification',
  component: Notification
}

export const NotificationStoryBook1 = () => {
  const config = {
    type: 'info',
    cancelText: '三级按钮',
    okText: '一级按钮',
    message: '通知标题',
    description:
      '通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。'
  }
  const onClick = (config?: any) => {
    Notification.pop(config)
  }

  return (
    <div>
      <Button
        onClick={() => onClick({ ...config, showButton: false })}
        type="default"
      >
        Info
      </Button>
      <Button
        onClick={() =>
          onClick({ ...config, type: 'warning', showButton: false })
        }
        type="primary"
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          onClick({ ...config, type: 'success', showButton: false })
        }
        type="secondary"
      >
        Success
      </Button>
      <Button
        onClick={() => onClick({ ...config, type: 'error', showButton: false })}
        type="primary"
      >
        Error
      </Button>
    </div>
  )
}
NotificationStoryBook1.storyName = '基本'
export const NotificationStoryBook2 = () => {
  const config = {
    type: 'info',
    cancelText: '三级按钮',
    okText: '一级按钮',
    message: '通知标题',
    key: '1',
    onOk: () => {
      Notification.close(config.key)
    },
    description:
      '通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。'
  }
  const onClick = (config?: any) => {
    Notification.pop(config)
  }

  return (
    <div>
      <Button onClick={() => onClick({ ...config })} type="default">
        Info
      </Button>
      <Button
        onClick={() => onClick({ ...config, type: 'warning' })}
        type="primary"
      >
        Warning
      </Button>
      <Button
        onClick={() => onClick({ ...config, type: 'success' })}
        type="secondary"
      >
        Success
      </Button>
      <Button
        onClick={() => onClick({ ...config, type: 'error' })}
        type="primary"
      >
        Error
      </Button>
    </div>
  )
}
NotificationStoryBook2.storyName = '自定义按钮'
export const NotificationStoryBook3 = () => {
  const config = {
    type: 'info',
    cancelText: '三级按钮',
    okText: '一级按钮',
    message: '通知标题',
    description:
      '通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。'
  }
  const onClick = (config?: any) => {
    Notification.pop(config)
  }

  return (
    <div>
      <Button
        onClick={() => onClick({ ...config, closable: false })}
        type="default"
      >
        隐藏关闭按钮
      </Button>
    </div>
  )
}
NotificationStoryBook3.storyName = '隐藏关闭按钮'
export const NotificationStoryBook4 = () => {
  const config = {
    type: 'info',
    cancelText: '三级按钮',
    okText: '一级按钮',
    message: '通知标题',
    description:
      '通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。'
  }
  const onClick = (config?: any) => {
    Notification.pop(config)
  }

  return (
    <div>
      <Button
        marginRight="10px"
        onClick={() =>
          onClick({ ...config, showButton: false, placement: 'topRight' })
        }
        type="default"
      >
        右上角
      </Button>
      <Button
        marginRight="10px"
        onClick={() =>
          onClick({ ...config, showButton: false, placement: 'bottomRight' })
        }
        type="default"
      >
        右下角
      </Button>
      <Button
        marginRight="10px"
        onClick={() =>
          onClick({ ...config, showButton: false, placement: 'bottomLeft' })
        }
        type="default"
      >
        左下角
      </Button>
      <Button
        onClick={() =>
          onClick({ ...config, showButton: false, placement: 'topLeft' })
        }
        type="default"
      >
        左上角
      </Button>
    </div>
  )
}
NotificationStoryBook4.storyName = '位置'

const link = () => {
  console.log('link to ul')
}

const doSomething = () => {
  console.log('doSomething')
}
export const NotificationStoryBook5 = () => {
  const config = {
    type: 'info',
    showButton: true,
    message: '通知标题',
    description:
      '通知内容，用于系统主动发起的提示、引导，而非操作反馈。上下内边距固定，自适应高度。',
    footer: (
      <div style={{ width: '90%', margin: '0px auto', marginTop: '20px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <Button onClick={link} type="link">
              链接按钮
            </Button>
          </div>
          <div>
            <Button onClick={doSomething} type="default">
              次要按钮
            </Button>
          </div>
        </div>
      </div>
    )
  }
  const onClick = (config?: any) => {
    Notification.pop(config)
  }

  return (
    <div>
      <Button onClick={() => onClick({ ...config })} type="default">
        自定义footer
      </Button>
    </div>
  )
}
NotificationStoryBook5.storyName = '自定义footer'
