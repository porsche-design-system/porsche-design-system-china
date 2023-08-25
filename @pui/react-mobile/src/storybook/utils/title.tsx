import React from 'react'

interface TitleProps {
  children?: React.ReactNode
}
export const Title = ({ children }: TitleProps) => {
  return (
    <div style={{ textAlign: 'center', fontSize: '20px', marginTop: '10px' }}>
      {children}
    </div>
  )
}
