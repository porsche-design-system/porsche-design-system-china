import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Modal } from '../modal'

jest.mock('../../../shared/render-utils', () => ({
  renderNode: (node: any, container: any) => render(node, container)
}))

jest.mock('../../../shared/hooks', () => ({
  useDefaultSize: () => ['medium']
}))

describe('test modal component', () => {
  describe('test modal', () => {
    it('should render correct when props are true', () => {
      const cancelFn = jest.fn()
      const okFn = jest.fn()
      render(
        <Modal
          visible
          title="对话框标题"
          okText="主要按钮"
          cancelText="次要按钮"
          hasDivider
          showClose
          titleIconType="info"
          subtitle="第二标题"
          showOk
          showCancel
          onCancel={() => cancelFn()}
          onOk={() => okFn()}
        >
          <div>modal children</div>
        </Modal>
      )

      const title = screen.getByText('对话框标题')
      const footerOkBtn = screen.getByText('主要按钮')
      const footerCancelBtn = screen.getByText('次要按钮')
      expect(title).toBeInTheDocument()
      expect(screen.getByText('主要按钮')).toBeInTheDocument()
      expect(screen.getByText('次要按钮')).toBeInTheDocument()
      expect(screen.getByText('第二标题')).toBeInTheDocument()

      // divider test
      expect(footerOkBtn.parentElement?.parentElement).toHaveClass(
        'pui-modal-footer-divider-true'
      )
      expect(title.parentElement).toHaveClass('pui-modal-header-divider-true')

      // show close and footer
      expect(screen.getAllByLabelText('icon_-close')).toHaveLength(2)

      // show title icon
      expect(
        screen.getByLabelText('icon_-informationFilled')
      ).toBeInTheDocument()

      // click
      fireEvent.click(footerOkBtn)
      expect(okFn).toBeCalled()

      fireEvent.click(footerCancelBtn)
      expect(cancelFn).toBeCalled()
    })

    it('should render correct when props are false', () => {
      render(
        <Modal
          visible
          title="False对话框标题"
          okText="False主要按钮"
          cancelText="False次要按钮"
          hasDivider={false}
          showClose={false}
          showOk={false}
          showCancel={false}
        >
          <div>modal false children</div>
        </Modal>
      )

      const falseTitle = screen.getByText('False对话框标题')
      const footerOkBtn = screen.queryByText('False主要按钮')
      const footerCancelBtn = screen.queryByText('False次要按钮')
      expect(falseTitle).toBeInTheDocument()
      expect(footerOkBtn).not.toBeInTheDocument()
      expect(footerCancelBtn).not.toBeInTheDocument()

      // show close and footer
      expect(screen.queryAllByLabelText('icon_-close')).toHaveLength(0)

      // show title icon
      expect(
        screen.queryByLabelText('icon_-informationFilled')
      ).not.toBeInTheDocument()
    })

    it('should render success icon type when icon type is success', () => {
      render(
        <Modal visible title="IconTypeTest" titleIconType="success">
          <div>IconTypeTest</div>
        </Modal>
      )

      expect(screen.getByLabelText('icon_-correctFilled')).toBeInTheDocument()
    })

    it('should render warning icon type when icon type is warning', () => {
      render(
        <Modal visible title="IconTypeTest" titleIconType="warning">
          <div>IconTypeTest</div>
        </Modal>
      )

      expect(screen.getByLabelText('icon_-warningFilled')).toBeInTheDocument()
    })

    it('should render error icon type when icon type is error', () => {
      render(
        <Modal visible title="IconTypeTest" titleIconType="error">
          <div>IconTypeTest</div>
        </Modal>
      )

      expect(screen.getByLabelText('icon_-errorFilled')).toBeInTheDocument()
    })

    it('should call cancel function correct when prop cancel function', () => {
      const cancelFn = jest.fn()
      render(
        <Modal visible title="CancelTitle" showClose onCancel={cancelFn}>
          <div>cancelFn</div>
        </Modal>
      )
      fireEvent.click(screen.getAllByLabelText('icon_-close')[0])
      expect(cancelFn).toBeCalled()
    })
  })

  describe('test modal.alert', () => {
    it('should render alert component correct when call alert function', () => {
      Modal.alert('AlertModal', <div>alert content</div>, jest.fn(), '确认')
      expect(screen.getByText('AlertModal')).toBeInTheDocument()
      expect(screen.getByText('alert content')).toBeInTheDocument()

      const puiModalChild = screen.getByTestId('pui-modal-wrap-child')
      expect(puiModalChild).toHaveClass('pui-modal-modalsize-small')

      const okBtn = screen.getByText('确认')
      expect(okBtn).toBeInTheDocument()

      expect(document.getElementById('$ModalContainer')).not.toBeNull()
      expect(screen.queryAllByLabelText('icon_-close')).toHaveLength(0)
    })

    it('should call remove child twice when ok function is undefined', () => {
      Modal.alert('Alert Modal title', <div>modal</div>, undefined, 'Alert好的')
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      fireEvent.click(screen.getByText('Alert好的'))
      expect(mockFn).toBeCalledTimes(2)
    })

    it('should call remove child twice when loading promise return value is undefined', () => {
      const okFn = jest.fn()
      Modal.alert(
        'Alert Modal title',
        <div>modal</div>,
        okFn,
        'Alert好的Promise'
      )
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      fireEvent.click(screen.getByText('Alert好的Promise'))
      expect(mockFn).toBeCalledTimes(2)
    })

    it('should call remove child twice when loading promise return value is not undefined', async () => {
      const okFn = jest.fn().mockResolvedValue('test')
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      Modal.alert(
        'Alert Modal title',
        <div>modal</div>,
        okFn,
        'Alert好的Promise02'
      )
      await act(async () => {
        await fireEvent.click(screen.getByText('Alert好的Promise02'))
      })
      expect(mockFn).toBeCalledTimes(2)
    })
  })

  describe('test modal.confirm', () => {
    it('should render confirm component correct when call confirm function', async () => {
      const okFn = jest.fn()
      const cancelFn = jest.fn()
      const removeChildFn = jest.fn()
      await Modal.confirm(
        'ConfirmModal',
        <div>confirm content</div>,
        okFn,
        cancelFn,
        '确定',
        '关闭'
      )
      Object.defineProperty(global.document.body, 'removeChild', {
        value: removeChildFn
      })
      expect(screen.getByText('ConfirmModal')).toBeInTheDocument()
      expect(screen.getByText('confirm content')).toBeInTheDocument()
      expect(screen.getByText('确定')).toBeInTheDocument()
      expect(screen.getByText('关闭')).toBeInTheDocument()
      expect(document.getElementById('$ModalContainer-1')).not.toBeNull()
      expect(screen.queryAllByLabelText('icon_-close')).toHaveLength(1)
      fireEvent.click(screen.getByText('关闭'))
      expect(removeChildFn).toBeCalled()
      expect(cancelFn).toBeCalled()
    })

    it('should call remove child twice when ok function is undefined', () => {
      Modal.confirm(
        'Confirm Modal title',
        <div>modal</div>,
        undefined,
        undefined,
        '确认按钮'
      )
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      fireEvent.click(screen.getByText('确认按钮'))
      expect(mockFn).toBeCalledTimes(2)
    })

    it('should call remove child twice when loading promise return value is undefined', () => {
      const okFn = jest.fn()
      Modal.confirm(
        'Confirm Modal title',
        <div>modal</div>,
        okFn,
        undefined,
        '提交 Confirm Promise'
      )
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      fireEvent.click(screen.getByText('提交 Confirm Promise'))
      expect(mockFn).toBeCalledTimes(2)
    })

    it('should call remove child twice when loading promise return value is not undefined', async () => {
      const okFn = jest.fn().mockResolvedValue('test')
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      Modal.confirm(
        'Confirm Modal title',
        <div>modal</div>,
        okFn,
        undefined,
        '提交 Confirm Promise02'
      )
      await act(async () => {
        await fireEvent.click(screen.getByText('提交 Confirm Promise02'))
      })
      expect(mockFn).toBeCalledTimes(2)
    })
  })

  describe('test Modal.close', () => {
    it('should call remove child twice when call modal close', () => {
      const mockFn = jest.fn()
      jest.spyOn(document.body, 'removeChild').mockImplementation(mockFn)
      Modal.show({})
      Modal.close()
      expect(mockFn).toBeCalledTimes(2)
    })
  })
})
