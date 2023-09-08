import i18n from 'i18next'
import { PUI } from '../pui'

test('setTheme sets the theme name correctly', () => {
  const themeName = 'light'
  PUI.setTheme(themeName)
  expect(PUI.setTheme).toHaveBeenCalledWith(themeName)
})

test('getTheme returns the correct theme name', () => {
  const themeName = 'dark'
  expect(PUI.getTheme()).toBe(themeName)
})

test('setDefaultSize sets the default size correctly', () => {
  const size = 'medium'
  PUI.setDefaultSize(size)
  expect(PUI.setDefaultSize).toHaveBeenCalledWith(size)
})

test('getDefaultSize returns the correct default size', () => {
  const defaultSize = 'medium'
  expect(PUI.getDefaultSize()).toBe(defaultSize)
})

test('setScrollBarAutoHide sets the scroll bar auto hide type correctly', () => {
  const type = 'never'
  PUI.setScrollBarAutoHide(type)
  expect(PUI.setScrollBarAutoHide).toHaveBeenCalledWith(type)
})

test('addLangResources adds language resources correctly', () => {
  const nameSpace = 'zh-CN'
  const resource = { en: {}, 'zh-CN': {} }
  PUI.addLangResources(nameSpace, resource)
  expect(PUI.addLangResources).toHaveBeenCalledWith(nameSpace, resource)
})

test('changeLang changes the language correctly', () => {
  const lang = 'en'
  PUI.changeLang(lang)
  expect(PUI.changeLang).toHaveBeenCalledWith(lang)
  expect(i18n.changeLanguage).toHaveBeenCalledWith(lang)
})

test('getLang returns the correct language code', () => {
  const langCode = 'en'
  expect(PUI.getLang()).toBe(langCode)
})
