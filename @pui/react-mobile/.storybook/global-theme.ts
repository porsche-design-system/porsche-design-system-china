import { create } from '@storybook/theming'

// 设置Storybook界面页面颜色
const themeColor = '#d5001c'
const logo = 'logo-light.svg'
export default create({
  base: 'light',
  brandTitle: 'PUI',
  brandImage: logo,
  colorPrimary: themeColor,
  colorSecondary: themeColor,
  fontBase: "'Porsche Next', '微软雅黑', 'Helvetica', 'sans-serif'",
  fontCode: "'Porsche Next', '微软雅黑', 'Helvetica', 'sans-serif'"
})
