import { IconArrowHeadDown, IconEdit } from '@pui/icons'
import React from 'react'
import { Dropdown } from '../dropdown/dropdown'
import { Button } from './button'
import { componentClassNames } from '../../shared/class-util'
import './split-button.scss'

type OverlayFunc = () => React.ReactElement

export interface SplitButtonProps {
  // 组件属性 //

  /** 类名 */
  className?: string

  /** 类型 */
  type?: 'default' | 'primary' | 'secondary' | 'text' | 'link'

  /** 大小 */
  size?: 'medium' | 'small' | 'tiny'

  /** 菜单 */
  overlay: React.ReactElement | OverlayFunc

  /** 子组件 */
  children?: React.ReactNode

  /** 是否加载中 */
  loading?: boolean

  /** 是否禁用 */
  disabled?: boolean

   /* 左边距 */
   marginLeft?: string

   /* 右边距 */
   marginRight?: string
 

  // 组件事件 //

  /* 点击事件 */
  onClick?: React.MouseEventHandler

  /* 鼠标移入事件 */
  onMouseEnter?: React.MouseEventHandler

  /* 鼠标移出事件 */
  onMouseLeave?: React.MouseEventHandler
}

const SplitButton = ({
  className,
  type = 'primary',
  size,
  overlay,
  children,
  disabled = false,
  loading = false,
  marginRight,
  marginLeft,
  onClick,
  onMouseEnter,
  onMouseLeave
}: SplitButtonProps) => {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <Dropdown
        overlay={overlay}
        disabled={disabled || loading}
        trigger="click"
        visible={visible}
        onVisibleChange={setVisible}
      >
        <div  className={componentClassNames('pui-split-button', { type }, className)} style={{ display: 'flex',marginLeft, marginRight }}>
          <Button
            type={type}
            icon={IconEdit}
            disabled={disabled}
            size={size}
            loading={loading}
            onClick={evt => {
              if (!loading) {
                onClick && onClick(evt)
              }
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {children}
          </Button>
          <div className="afterAddon">
            <Button
              type={type}
              icon={IconArrowHeadDown}
              disabled={disabled || loading}
              size={size}
              onClick={() => setVisible(!visible)}
            />
          </div>
        </div>
      </Dropdown>
    </>
  )
}

SplitButton.displayName = 'SplitButton'
export { SplitButton }
