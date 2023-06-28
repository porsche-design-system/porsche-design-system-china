import React from 'react'
import { fireEvent, render, screen, act } from '@testing-library/react'
import { Modal } from '../modal'

jest.mock('../../../shared/render-utils', () => ({
  renderNode: (node: any, container: any) => render(node, container)
}))

jest.mock('../../../shared/hooks', () => ({
  useDefaultSize: () => ['medium']
}))

describe('test modal component', () => {
  describe('test modal.show', () => {
    it('should show correct modal when called modal.show with custom footer', () => {
      Modal.show({
        style: { color: 'red' },
        className: 'test-show-modal',
        size: 'small',
        modalSize: 'medium',
        title: 'ShowModal',
        titleIconType: 'info',
        titleIcon: <span>titleIcon</span>,
        subtitle: 'ShowModalSubtitle',
        hasDivider: true,
        footer: <div>footer</div>,
        content: <div>modal content</div>
      })
      const puiModalChild = screen.getByTestId('pui-modal-wrap-child')
      expect(puiModalChild).toHaveAttribute('style', 'color: red;')
      expect(puiModalChild).toHaveClass(
        'pui-modal-modalsize-medium pui-modal-size-small test-show-modal'
      )
      expect(screen.getByText('ShowModal')).toBeInTheDocument()
      expect(screen.getByText('titleIcon')).toBeInTheDocument()
      expect(screen.getByText('ShowModalSubtitle')).toBeInTheDocument()
      expect(screen.getByText('footer')?.parentElement).toHaveClass(
        'pui-modal-footer-divider-true'
      )
      expect(screen.getByText('ShowModal').parentElement).toHaveClass(
        'pui-modal-header-divider-true'
      )
      expect(screen.getByText('modal content')).toBeInTheDocument()
    })

    it('should show correct modal when called modal.show with default footer and modal close', () => {
      const okFn = jest.fn()
      const cancelFn = jest.fn()
      Modal.show({
        style: { color: 'red' },
        className: 'test-show-modal',
        size: 'small',
        modalSize: 'medium',
        title: 'ShowModal',
        titleIconType: 'info',
        titleIcon: <span>titleIcon</span>,
        subtitle: 'ShowModalSubtitle',
        hasDivider: true,
        showOk: true,
        showClose: true,
        okText: '提交',
        okButtonProps: { type: 'secondary' },
        okIcon: <span>okIcon</span>,
        onOk: okFn,
        showCancel: true,
        cancelText: '取消',
        cancelButtonProps: { type: 'primary' },
        cancelIcon: <span>cancelIcon</span>,
        onCancel: cancelFn,
        content: <div onClick={() => Modal.close()}>modal content</div>
      })
      // ok btn
      const okBtn = screen.getByText('提交')
      expect(okBtn).toBeInTheDocument()
      expect(screen.getByText('okIcon')).toBeInTheDocument()
      expect(okBtn.parentElement).toHaveClass('pui-button-type-secondary')

      // cancel btn
      const cancelBtn = screen.getByText('取消')
      expect(cancelBtn).toBeInTheDocument()
      expect(screen.getByText('cancelIcon')).toBeInTheDocument()
      expect(cancelBtn.parentElement).toHaveClass('pui-button-type-primary')

      jest.spyOn(Modal, 'close').mockImplementation(() => jest.fn())
      fireEvent.click(screen.getByText('modal content'))
      expect(Modal.close).toHaveBeenCalled()
    })

    it('should call remove child twice when ok function is undefined', () => {
      Modal.show({
        size: 'small',
        modalSize: 'medium',
        title: 'ShowModal',
        showOk: true,
        showClose: true,
        okText: '提交',
        showCancel: true,
        cancelText: '取消',
        cancelIcon: <span>cancelIcon</span>,
        content: <div onClick={() => Modal.close()}>modal content</div>
      })
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      fireEvent.click(screen.getByText('提交'))
      expect(mockFn).toBeCalledTimes(2)
    })

    it('should call remove child twice when loading promise return value is undefined', () => {
      const okFn = jest.fn()
      Modal.show({
        size: 'small',
        modalSize: 'medium',
        title: 'ShowModal',
        showOk: true,
        showClose: true,
        okText: '提交Promise',
        onOk: okFn,
        showCancel: true,
        cancelText: '取消',
        cancelIcon: <span>cancelIcon</span>,
        content: <div onClick={() => Modal.close()}>modal content</div>
      })
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      fireEvent.click(screen.getByText('提交Promise'))
      expect(mockFn).toBeCalledTimes(2)
    })

    it('should call remove child twice when loading promise return value is not undefined', async () => {
      const okFn = jest.fn().mockResolvedValue('test')
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      Modal.show({
        size: 'small',
        modalSize: 'medium',
        title: 'ShowModal',
        showOk: true,
        showClose: true,
        okText: '提交Promise02',
        onOk: okFn,
        showCancel: true,
        cancelText: '取消',
        cancelIcon: <span>cancelIcon</span>,
        content: <div onClick={() => Modal.close()}>modal content</div>
      })
      await act(async () => {
        await fireEvent.click(screen.getByText('提交Promise02'))
      })
      expect(mockFn).toBeCalledTimes(2)
    })

    it('should call remove child twice when call cancel function', () => {
      const cancelFn = jest.fn()
      Modal.show({
        size: 'small',
        title: 'ShowModal',
        showOk: true,
        showClose: true,
        okText: '提交',
        showCancel: true,
        cancelText: '取消方法',
        onCancel: cancelFn,
        content: <div onClick={() => Modal.close()}>modal content</div>
      })
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      fireEvent.click(screen.getByText('取消方法'))
      expect(mockFn).toBeCalledTimes(2)
      expect(cancelFn).toBeCalled()
    })
  })
})
