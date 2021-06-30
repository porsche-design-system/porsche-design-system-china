import React from 'react'

import './loading.scss'

export interface LoadingProps {
  text?: string
  size?: number
  visible: boolean
  top?: string
}

export const Loading = ({
  visible = false,
  size = 50,
  text = '',
  top = 'calc(50vh - 50px)'
}: LoadingProps) => {
  return (
    <>
      {visible && (
        <div className="pui-loading">
          <div className="pui-loading-svg" style={{ marginTop: top }}>
            <svg height={size} width={size}>
              <circle
                className="pui-loading-circle2"
                cx={size / 2}
                cy={size / 2}
                r={size / 4}
              />
              <circle
                className="pui-loading-circle"
                cx={size / 2}
                cy={size / 2}
                r={size / 4}
              />
            </svg>
            <div className="pui-loading-text">{text}</div>
          </div>
        </div>
      )}
    </>
  )
}
