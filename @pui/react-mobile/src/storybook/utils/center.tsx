import React from 'react'

interface CenterProps {
  children?: React.ReactNode
}
export const Center = ({ children }: CenterProps) => {
  return <div style={{ textAlign: 'center' }}>{children}</div>
}
