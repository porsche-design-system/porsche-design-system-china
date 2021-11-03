import React, { CSSProperties, useEffect, useState } from 'react'
import { useTheme } from '../../shared/hooks'

export interface PorscheLogoProps {
  style?: CSSProperties
  className?: string
  size?: number
  mode?: 'dark' | 'light'
  onClick?: React.MouseEventHandler
}

export const PorscheLogo = ({
  style,
  className,
  size = 100,
  mode,
  onClick
}: PorscheLogoProps) => {
  const [logoData, setLogoData] = useState<any>({})
  if (!mode) {
    const [theme] = useTheme()
    mode = theme
  }
  const logo = mode === 'light' ? logoData.light : logoData.dark

  useEffect(() => {
    import('./logo-data').then(data => {
      setLogoData(data.default)
    })
  }, [])

  return (
    <img
      src={logo}
      alt=""
      width={size + 'px'}
      style={style}
      className={className}
      onClick={onClick}
    />
  )
}
