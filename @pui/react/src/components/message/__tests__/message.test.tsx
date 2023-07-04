import React from 'react'
import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Message } from '../message'

const removeMessageNode = async (text: string) => {
  await Promise.all(
    screen.queryAllByText(text).map(dom => {
      return userEvent.clear(dom)
    })
  )
}

describe('Test Message', () => {
  test('test render info message', async () => {
    render(<div onClick={() => Message.info('提示message')}>中文按钮</div>)

    await userEvent.click(screen.getByText('中文按钮'))

    expect(screen.getByText('提示message')).not.toBeNull()

    await waitForElementToBeRemoved(() => screen.getByText('提示message'), {
      timeout: 2200
    })
  })

  test('test render warning message', async () => {
    await removeMessageNode('提示message')

    render(<div onClick={() => Message.warning('警告message')}>中文按钮</div>)

    await userEvent.click(screen.getByText('中文按钮'))

    expect(screen.getByText('警告message')).not.toBeNull()

    await waitForElementToBeRemoved(() => screen.getByText('警告message'), {
      timeout: 2200
    })
  })

  test('test render success message', async () => {
    await removeMessageNode('警告message')

    render(<div onClick={() => Message.success('成功message')}>中文按钮</div>)

    await userEvent.click(screen.getByText('中文按钮'))

    expect(screen.getByText('成功message')).not.toBeNull()

    await waitForElementToBeRemoved(() => screen.getByText('成功message'), {
      timeout: 2200
    })
  })

  test('test render error message', async () => {
    await removeMessageNode('成功message')

    render(<div onClick={() => Message.error('错误message')}>中文按钮</div>)

    await userEvent.click(screen.getByText('中文按钮'))

    expect(screen.getByText('错误message')).not.toBeNull()

    await waitForElementToBeRemoved(() => screen.getByText('错误message'), {
      timeout: 2200
    })
  })

  test('test render closable message', async () => {
    await removeMessageNode('错误message')

    render(
      <div onClick={() => Message.error('可关闭弹窗', { closable: true })}>
        按钮
      </div>
    )

    await userEvent.click(screen.getByText('按钮'))

    expect(screen.getByText('可关闭弹窗')).toBeInTheDocument()

    await userEvent.click(screen.getByLabelText('icon_-close'))

    await waitForElementToBeRemoved(() => screen.getByText('可关闭弹窗'))
  })
})
