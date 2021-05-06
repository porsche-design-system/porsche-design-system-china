import React from 'react'

import './loading.scss'

export interface LoadingProps {
  visible: boolean
}

export const Loading = ({ visible = false }: LoadingProps) => {
  const loadingSize = 40
  return (
    <>
      {visible && (
        <div className="pui-loading">
          <svg
            height={loadingSize}
            width={loadingSize}
            className="pui-loading-svg"
          >
            <circle
              className="pui-loading-circle2"
              cx={loadingSize / 2}
              cy={loadingSize / 2}
              r={loadingSize / 4}
            />
            <circle
              className="pui-loading-circle"
              cx={loadingSize / 2}
              cy={loadingSize / 2}
              r={loadingSize / 4}
            />
          </svg>
        </div>
      )}
    </>
  )
}
