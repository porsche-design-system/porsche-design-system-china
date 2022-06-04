import { create } from '@storybook/theming/create'

import puiConfig from '../pui.config'

// 设置Storybook界面页面颜色
const themeColor = puiConfig.baseTheme === 'light' ? '#d5001c' : '#2193FF'
const logo =
  puiConfig.baseTheme === 'light' ? 'logo-light.svg' : 'logo-dark.svg'
export default create({
  base: puiConfig.baseTheme as any,
  brandTitle: 'PUI',
  brandImage: logo,
  colorPrimary: themeColor,
  colorSecondary: themeColor,
  fontBase:
    "'Porsche Next', '黑体', '微软雅黑', 'SimHei', 'Helvetica', 'sans-serif'",
  fontCode:
    "'Porsche Next', '黑体', '微软雅黑', 'SimHei', 'Helvetica', 'sans-serif'"
})
