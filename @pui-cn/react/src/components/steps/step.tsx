import React, { ReactNode } from 'react'
import { IconCheck, IconArrowHeadRight } from '@pui-cn/icons'
import classNames from 'classnames'
import './step.scss'

const prefixCls = 'pui-step-item'

export interface StepProps {
  /** 步骤数字 */
  count?: number

  /** 选中步骤回调 */
  onSelect?: React.MouseEventHandler

  /** 步骤是否选中 */
  selected?: boolean

  /** 步骤是否显示线条或者箭头 */
  showLineOrArrow?: boolean

  /** 指定当前步骤的状态，可选 wait process finish */
  status?: 'wait' | 'process' | 'finish'

  /** 标签名 */
  title?: string | ReactNode

  /** 步骤条类型，有 default 和 navigation 两种 */
  type?: 'default' | 'navigation'
}

const Step = ({
  count,
  onSelect,
  selected = false,
  showLineOrArrow = true,
  status = 'wait',
  title,
  type = 'default'
}: StepProps) => {
  return type === 'default' ? (
    <div className={`${prefixCls} ${prefixCls}-${status}`}>
      <div className={`${prefixCls}-top`}>
        <div className={`${prefixCls}-circle`}>
          {status === 'finish' ? (
            <IconCheck className={`${prefixCls}-icon`} />
          ) : (
            count
          )}
        </div>
        {showLineOrArrow && <div className={`${prefixCls}-line`} />}
      </div>
      <p className={`${prefixCls}-text`}>{title}</p>
    </div>
  ) : (
    <div
      className={classNames(
        prefixCls,
        `${prefixCls}-${status}`,
        `${prefixCls}-navigation`,
        {
          [`${prefixCls}-selected`]: selected,
          [`${prefixCls}-select`]: onSelect
        }
      )}
      onClick={onSelect}
    >
      <div className={`${prefixCls}-navigation-left`}>
        <div className={`${prefixCls}-circle`}>
          {status === 'finish' ? (
            <IconCheck className={`${prefixCls}-icon`} />
          ) : (
            count
          )}
        </div>
        <span className={`${prefixCls}-navigation-left-text`}>{title}</span>
      </div>
      {showLineOrArrow && <IconArrowHeadRight />}
    </div>
  )
}

Step.displayName = 'Step'

export { Step }
