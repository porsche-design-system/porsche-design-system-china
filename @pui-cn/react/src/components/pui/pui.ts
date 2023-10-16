import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { getGlobalStateSetter } from '../../shared/global-state'

i18n.use(initReactI18next).init({
  resources: {},
  lng: 'zh-CN',
  fallbackLng: 'zh-CN',
  interpolation: {
    escapeValue: false
  }
})

type ThemeName = 'light' | 'dark'
type LangCode = 'en' | 'zh-CN'
export const PUI: Record<string, any> = {
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
  },
  setScrollBarAutoHide(type: 'never' | 'scroll' | 'leave' | 'move') {
    this['_scrollBarAutoHide'] = type
    if (getGlobalStateSetter('SCROLLBAR_AUTO_HIDE')) {
      getGlobalStateSetter('SCROLLBAR_AUTO_HIDE')(type)
    }
  },
  addLangResources(
    nameSpace: string,
    resource: { en?: Record<string, string>; 'zh-CN'?: Record<string, string> }
  ) {
    Object.keys(resource).forEach(lang => {
      i18n.addResources(lang, nameSpace, resource[lang as keyof typeof resource])
    })
  },
  changeLang(lang: LangCode) {
    i18n.changeLanguage(lang)
  },
  getLang() {
    return i18n.language as LangCode
  }
}
  ; (window as any).PUI = PUI

if (document.body.className.indexOf('pui-theme-') < 0) {
  PUI.setTheme('light')
}

if (document.body.className.indexOf('pui-default-size-') < 0) {
  PUI.setDefaultSize('medium')
}
