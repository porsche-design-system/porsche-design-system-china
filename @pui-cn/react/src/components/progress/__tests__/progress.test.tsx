import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Info, Progress, validProgress } from '../progress'

jest.mock('@pui-cn/icons/lib/icons/IconCorrectFilled', () => () => (
  <div>MockIconCorrectFilled</div>
))
jest.mock('@pui-cn/icons/lib/icons/IconErrorFilled', () => () => (
  <div>MockIconErrorFilled</div>
))

describe('Test Progress', () => {
  describe('Test validProgress', () => {
    it('should determine if the progress is valid (0-100)', () => {
      expect(validProgress(undefined)).toEqual(0)
      expect(validProgress(-1)).toEqual(0)
      expect(validProgress(0)).toEqual(0)
      expect(validProgress(50)).toEqual(50)
      expect(validProgress(100)).toEqual(100)
      expect(validProgress(200)).toEqual(100)
    })
  })

  describe('Test Info', () => {
    it('should render IconCorrectFilled when status is success', () => {
      render(<Info status="success" percent={50} />)
      expect(screen.getByText('MockIconCorrectFilled')).toBeInTheDocument()
    })

    it('should render IconErrorFilled when status is error', () => {
      render(<Info status="error" percent={50} />)
      expect(screen.getByText('MockIconErrorFilled')).toBeInTheDocument()
    })

    it('should render a span with percentage when status is normal', () => {
      render(<Info percent={50} />)
      expect(screen.getByText('50%')).toBeInTheDocument()
    })
  })

  describe('Test Progress Component', () => {
    describe('test classname is passed correctly', () => {
      it('should render progress component with -success classname when percent is 100 regardless of status', () => {
        const { container } = render(<Progress percent={100} />)
        expect(
          container.getElementsByClassName(
            'pui-progress pui-progress-status-success'
          )[0]
        ).toBeInTheDocument()
        expect(
          container.getElementsByClassName(
            'pui-progress-text pui-progress-text-status-success'
          )[0]
        ).toBeInTheDocument()
      })

      it('should render progress component with classname depending on the status', () => {
        const { container: normalContainer } = render(
          <Progress percent={50} status="error" />
        )
        expect(
          normalContainer.getElementsByClassName(
            'pui-progress pui-progress-status-error'
          )[0]
        ).toBeInTheDocument()
        expect(
          normalContainer.getElementsByClassName(
            'pui-progress-text pui-progress-text-status-error'
          )[0]
        ).toBeInTheDocument()
      })
    })

    it('should render an inner progress bar with passed percent', () => {
      const { container } = render(<Progress percent={70} />)
      expect(
        container.getElementsByClassName('pui-progress-inner')[0]
      ).toHaveStyle({ width: '70%' })
    })

    it('should not show info when showInfo is set to false', () => {
      render(<Progress percent={25} status="success" showInfo={false} />)
      expect(
        screen.queryByText('MockIconCorrectFilled')
      ).not.toBeInTheDocument()
    })

    it('should show close button when status is normal and call onStop when click', () => {
      const mockFn = jest.fn()
      const { container } = render(
        <Progress percent={25} status="normal" onStop={mockFn} />
      )
      const closeBtn = container.getElementsByClassName('pui-progress-close')[0]
      expect(closeBtn).toBeInTheDocument()

      fireEvent.click(closeBtn)

      expect(mockFn).toHaveBeenCalledTimes(1)
    })
  })
})
