import React, { CSSProperties } from 'react'
import { Loading } from './loading'

import './loading-wrap.scss'

export interface LoadingWrapProps {
  text?: string
  size?: number
  visible: boolean
  style?: CSSProperties
  top?: string
  blurContent?: boolean
  className?: string
  children?: React.ReactNode
}

export const LoadingWrap = ({
  visible = false,
  size = 50,
  text = '',
  style,
  blurContent = false,
  top = 'calc(50% - 55px)',
  className = '',
  children
}: LoadingWrapProps) => {
  return (
    <div style={style} className={'pui-loading-wrap ' + className}>
      <div style={{ filter: visible && blurContent ? 'blur(2px)' : '' }}>
        {children}
      </div>
      <Loading top={top} visible={visible} size={size} text={text} />
    </div>
  )
}
