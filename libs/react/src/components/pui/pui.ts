/* eslint-disable dot-notation */
type ThemeName = 'light' | 'dark'
export const PUI = {
  defaultSize: 'medium',
  setTheme(themeName: ThemeName) {
    this['_themeName'] = themeName
    document.body.className =
      document.body.className.replace(/pui-theme-[^ ]+/, '') +
      ' pui-theme-' +
      themeName
  },
  getTheme() {
    return this['_themeName'] as ThemeName
  },
  setDefaultSize(size: 'medium' | 'big' | 'small') {
    this.defaultSize = size
  }
}
;(window as any).PUI = PUI

if (document.body.className.indexOf('pui-theme-') < 0) {
  PUI.setTheme('light')
}
