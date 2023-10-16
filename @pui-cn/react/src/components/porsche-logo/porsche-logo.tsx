import React, { CSSProperties, useEffect, useState } from 'react'
import { useTheme } from '../../shared/hooks'

export interface PorscheLogoProps {
  /** 样式 */
  style?: CSSProperties

  /** 样式 */
  className?: string

  /** 大小 */
  size?: number

  /** 主题样式 */
  mode?: 'dark' | 'light'

  /** 点击事件 */
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
  const [theme] = useTheme()
  if (!mode) {
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
