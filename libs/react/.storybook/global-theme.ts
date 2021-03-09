import { create } from '@storybook/theming/create';

// 设置Storybook界面页面颜色

export default create({
  base: 'light',
  brandTitle: 'PUI',
  brandImage: 'logo.svg',
  colorPrimary: '#d5001c',
  colorSecondary: '#d5001c',
  fontBase: "'Porsche Next', '黑体', '微软雅黑', 'SimHei', 'Helvetica', 'sans-serif'",
  fontCode: "'Porsche Next', '黑体', '微软雅黑', 'SimHei', 'Helvetica', 'sans-serif'"
});
