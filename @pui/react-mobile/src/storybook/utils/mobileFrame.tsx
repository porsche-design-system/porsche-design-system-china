import React from 'react'

import './mobileFrame.scss'
interface MobileFrameProps {
  children: React.ReactNode
}
export const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className={`mobileFrame`}>
      <div className="mobileFrame-wrapper">{children}</div>
    </div>
  )
}
