import React from 'react'
import { IconAugmentedReality, IconAuthCode } from '@pui-cn/icons'
import { fireEvent, screen, act, waitFor } from '@testing-library/react'
import { Notification } from '../notification'
import type { NotificationConfigProps } from '../notification'

describe('notification', () => {
  afterEach(async () => {
    // clear up
    Notification.close('1')

    jest.useRealTimers()
  })

  it('should notification component render correct ', () => {
    act(() => {
      for (let i = 0; i < 3; i += 1) {
        Notification.pop({
          key: `${i}`,
          type: 'info',
          message: 'Notification Title',
          description:
            'Notification Description, This is the notification description.'
        })
      }
    })

    expect(document.querySelectorAll('.pui-notification')).toHaveLength(3)

    for (let i = 0; i < 3; i += 1) {
      Notification.close(`${i}`)
    }
  })

  it('should be able to open with icon', () => {
    const list = ['success', 'info', 'warning', 'error'] as const

    act(() => {
      list.forEach((type, i) => {
        Notification.pop({
          key: `${i}`,
          type,
          message: 'Notification Title',
          description:
            'Notification Description, This is the notification description.'
        })
      })
    })

    list.forEach(type => {
      const iconMap = {
        success: 'correct',
        info: 'information',
        warning: 'warning',
        error: 'error'
      }

      expect(document.querySelectorAll(`.${type}`)).toHaveLength(1)
      expect(
        screen.getByRole('img', { name: `icon_-${iconMap[type]}Filled` })
      ).toBeInTheDocument()
    })

    list.forEach((_, i) => {
      Notification.close(`${i}`)
    })
  })

  it('should be able to hide manually', () => {
    act(() => {
      Notification.pop({
        key: '1',
        type: 'info',
        message: 'Notification Title',
        description:
          'Notification Description, This is the notification description.'
      })
      Notification.pop({
        key: '2',
        type: 'info',
        message: 'Notification Title',
        description:
          'Notification Description, This is the notification description.'
      })
    })

    expect(document.querySelectorAll('.pui-notification')).toHaveLength(2)

    // Close 1
    Notification.close('1')
    expect(document.querySelectorAll('.pui-notification')).toHaveLength(1)

    // Close 2
    Notification.close('2')

    expect(document.querySelectorAll('.pui-notification')).toHaveLength(0)
  })

  it('should be update', async () => {
    const defaultConfig: NotificationConfigProps = {
      key: 'update-1',
      type: 'info',
      message: <h1>Notification Title</h1>,
      description:
        'Notification Description, This is the notification description.'
    }

    await act(() => {
      Notification.pop(defaultConfig)
    })

    expect(
      screen.getByRole('heading', { name: 'Notification Title' })
    ).toBeInTheDocument()

    act(() => {
      Notification.update({
        ...defaultConfig,
        message: <h1>New Notification Title</h1>
      })
    })

    expect(
      screen.getByRole('heading', { name: 'New Notification Title' })
    ).toBeInTheDocument()

    Notification.close('update-1')
  })

  it('should component custom okIcon work', async () => {
    act(() => {
      Notification.pop({
        key: '1',
        type: 'info',
        message: 'Notification Title',
        okIcon: <IconAugmentedReality />,
        description:
          'Notification Description, This is the notification description.'
      })
    })

    expect(
      screen.getByRole('img', { name: 'icon_-augmented-reality' })
    ).toBeInTheDocument()
  })

  it('should component custom cancelIcon work', async () => {
    act(() => {
      Notification.pop({
        key: '1',
        type: 'info',
        message: 'Notification Title',
        cancelIcon: <IconAuthCode />,
        description:
          'Notification Description, This is the notification description.'
      })
    })

    expect(
      screen.getByRole('img', { name: 'icon_-auth-code' })
    ).toBeInTheDocument()
  })

  it('should duration work', async () => {
    jest.useFakeTimers()
    const callback = jest.fn()

    act(() => {
      Notification.pop({
        key: '1',
        type: 'info',
        message: 'Notification Title',
        closable: false,
        delay: 3000,
        callback,
        description:
          'Notification Description, This is the notification description.'
      })
    })

    expect(document.querySelector('.pui-notification')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'icon_-close' })).toBeInTheDocument()

    // Advance 1000ms
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(document.querySelector('.pui-notification')).toBeInTheDocument()

    // Advance 1000ms
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(document.querySelector('.pui-notification')).toBeInTheDocument()

    // Advance 1000ms
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(document.querySelector('.pui-notification')).toBeNull()
    expect(callback).toBeCalled()
  })

  it('should component custom footer work', async () => {
    act(() => {
      Notification.pop({
        key: '1',
        type: 'info',
        message: 'Notification Title',
        description:
          'Notification Description, This is the notification description.',
        footer: <h1>custom footer</h1>
      })
    })

    expect(
      screen.getByRole('heading', { name: 'custom footer' })
    ).toBeInTheDocument()
  })

  it('trigger callback', async () => {
    const callback = jest.fn()

    act(() => {
      Notification.pop({
        key: 'callback-1',
        showButton: false,
        type: 'info',
        message: 'Notification Title',
        callback,
        description:
          'Notification Description, This is the notification description.'
      })
    })

    expect(document.querySelector('.pui-notification')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('img', { name: 'icon_-close' }))

    await waitFor(() => {
      expect(callback).toHaveBeenCalled()
    })
  })

  it('trigger onOk', async () => {
    const onOk = jest.fn()

    act(() => {
      Notification.pop({
        key: '1',
        type: 'info',
        message: 'Notification Title',
        okText: 'OK Button',
        onOk,
        description:
          'Notification Description, This is the notification description.'
      })
    })

    expect(document.querySelectorAll('.pui-notification')).toHaveLength(1)

    fireEvent.click(screen.getByRole('button', { name: /OK Button/ }))

    expect(onOk).toBeCalled()
  })

  it('trigger onCancel', async () => {
    const onClick = jest.fn()

    act(() => {
      Notification.pop({
        key: '1',
        type: 'info',
        message: 'Notification Title',
        cancelText: 'Cancel Button',
        onCancel: onClick,
        description:
          'Notification Description, This is the notification description.'
      })
    })

    expect(document.querySelector('.pui-notification')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Cancel Button/ }))

    expect(onClick).toHaveBeenCalled()
  })
})
