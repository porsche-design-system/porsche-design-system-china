import { getGlobalStateSetter } from '../../shared/global-state'

/* eslint-disable dot-notation */
type ThemeName = 'light' | 'dark'
export const PUI = {
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
  setDefaultSize(size: 'medium' | 'small') {
    getGlobalStateSetter('DEFAULT_SIZE')(size)
  }
}
;(window as any).PUI = PUI

if (document.body.className.indexOf('pui-theme-') < 0) {
  PUI.setTheme('light')
}
