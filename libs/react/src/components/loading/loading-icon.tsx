import React, { CSSProperties } from 'react'

import './loading-icon.scss'

export interface LoadingIconProps {
  text?: string
  size?: number
  style?: CSSProperties
}

export const LoadingIcon = ({
  size = 50,
  style,
  text = ''
}: LoadingIconProps) => {
  return (
    <div className="pui-loading-icon" style={style}>
      <svg height={size} width={size}>
        <circle
          className="pui-loading-icon-circle2"
          cx={size / 2}
          cy={size / 2}
          r={size / 4}
        />
        <circle
          className="pui-loading-icon-circle"
          cx={size / 2}
          cy={size / 2}
          r={size / 4}
        />
      </svg>
      <div className="pui-loading-icon-text">{text}</div>
    </div>
  )
}
