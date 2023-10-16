import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Steps, StepsProps } from '../steps'
import { Step } from '../step'

const generateSteps = (props: StepsProps) => {
  return (
    <Steps {...props}>
      <Step title="步骤1" />
      <Step title="步骤2" />
      <Step title="步骤3" />
      <Step title="步骤4" />
    </Steps>
  )
}

const defaultProps: StepsProps = {
  children: <></>,
  current: 2
}
const navigationProps: StepsProps = {
  children: <></>,
  current: 2,
  type: 'navigation',
  onCurrentChange: jest.fn()
}

const assignStatusProps: StepsProps = {
  children: <></>,
  current: 2,
  status: 'finish'
}

describe('test Steps component', () => {
  it('should render the correct default Steps', () => {
    const wrapper = render(generateSteps(defaultProps))
    const activeElement = wrapper.getByText('步骤3')
      .parentElement as HTMLElement
    const stepsElement = wrapper.container.querySelector(
      '.pui-steps'
    ) as HTMLElement

    expect(stepsElement).toBeInTheDocument()
    expect(stepsElement).toHaveClass(
      'pui-steps-type-default pui-steps-size-default pui-steps-label-placement-center'
    )
    expect(activeElement).toHaveClass('pui-step-item pui-step-item-process')
    const finishedStep = wrapper.container.querySelectorAll(
      '.pui-step-item-finish'
    )
    const lastElement = stepsElement.lastChild as HTMLElement
    expect(finishedStep.length).toEqual(2)
    expect(lastElement).toHaveClass('pui-step-item-wait')
  })

  it('should render the correct navigation type Steps', () => {
    const wrapper = render(generateSteps(navigationProps))
    const stepsElement = wrapper.container.querySelector(
      '.pui-steps'
    ) as HTMLElement
    expect(stepsElement).toHaveClass('pui-steps-type-navigation')
    const itemElement = wrapper.container.querySelector(
      '.pui-steps .pui-step-item'
    ) as HTMLElement

    expect(itemElement).toHaveClass('pui-step-item-select')

    fireEvent.click(itemElement)
    expect(itemElement).toHaveClass('pui-step-item-selected')
    expect(navigationProps.onCurrentChange).toHaveBeenCalledWith(0)
  })

  it('should render the correct assigned status Steps', () => {
    const wrapper = render(generateSteps(assignStatusProps))
    const activeElement = wrapper.getByText('步骤3')
      .parentElement as HTMLElement
    expect(activeElement).toHaveClass('pui-step-item-finish')
  })
})
