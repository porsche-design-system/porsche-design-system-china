import { getGlobalStateSetter } from '../../shared/global-state'

/* eslint-disable dot-notation */
type ThemeName = 'light' | 'dark'
export const PUI = {
  setTheme(themeName: ThemeName) {
    this['_themeName'] = themeName
    if (getGlobalStateSetter('THEME_NAME')) {
      getGlobalStateSetter('THEME_NAME')(themeName)
    }
    document.body.className =
      document.body.className.replace(/pui-theme-[^ ]+/, '') +
      ' pui-theme-' +
      themeName
  },
  getTheme() {
    return this['_themeName'] as ThemeName
  },
  setDefaultSize(size: 'medium' | 'small') {
    this['_defaultSize'] = size
    if (getGlobalStateSetter('DEFAULT_SIZE')) {
      getGlobalStateSetter('DEFAULT_SIZE')(size)
    }
    document.body.className =
      document.body.className.replace(/pui-default-size-[^ ]+/, '') +
      ' pui-default-size-' +
      size
  },
  getDefaultSize() {
    return this['_defaultSize'] || 'medium'
  }
}
;(window as any).PUI = PUI

if (document.body.className.indexOf('pui-theme-') < 0) {
  PUI.setTheme('light')
}

if (document.body.className.indexOf('pui-default-size-') < 0) {
  PUI.setDefaultSize('medium')
}
