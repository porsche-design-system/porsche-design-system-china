import { PUI } from '../pui'

test('setTheme sets the theme name correctly', () => {
  const themeName = 'light'
  const mockSetTheme = jest.fn(themeName => {
    PUI.setTheme(themeName)
  })
  mockSetTheme(themeName)
  expect(mockSetTheme).toHaveBeenCalledWith(themeName)
})

test('getTheme returns the correct theme name', () => {
  const themeName = 'dark'
  const mockSetTheme = jest.fn(themeName => {
    PUI.setTheme(themeName)
  })
  mockSetTheme(themeName)
  expect(PUI.getTheme()).toBe(themeName)
})

test('setDefaultSize sets the default size correctly', () => {
  const size = 'medium'
  const mockSetDefaultSize = jest.fn(size => {
    PUI.setDefaultSize(size)
  })
  mockSetDefaultSize(size)
  expect(mockSetDefaultSize).toHaveBeenCalledWith(size)
})

test('getDefaultSize returns the correct default size', () => {
  const defaultSize = 'small'
  const mockSetDefaultSize = jest.fn(size => {
    PUI.setDefaultSize(size)
  })
  mockSetDefaultSize(defaultSize)
  expect(PUI.getDefaultSize()).toBe(defaultSize)
})

test('setScrollBarAutoHide sets the scroll bar auto hide type correctly', () => {
  const type = 'never'
  const mockSetScrollBarAutoHide = jest.fn(type => {
    PUI.setScrollBarAutoHide(type)
  })
  mockSetScrollBarAutoHide(type)
  expect(mockSetScrollBarAutoHide).toHaveBeenCalledWith(type)
})

test('addLangResources adds language resources correctly', () => {
  const nameSpace = 'zh-CN'
  const resource = { en: {}, 'zh-CN': {} }
  const mockAddLangResources = jest.fn((nameSpace, resource) => {
    PUI.addLangResources(nameSpace, resource)
  })
  mockAddLangResources(nameSpace, resource)
  expect(mockAddLangResources).toHaveBeenCalledWith(nameSpace, resource)
})

test('changeLang changes the language correctly', () => {
  const lang = 'en'
  const mockChangeLang = jest.fn(lang => {
    PUI.changeLang(lang)
  })
  mockChangeLang(lang)
  expect(mockChangeLang).toHaveBeenCalledWith(lang)
})

test('getLang returns the correct language code', () => {
  const langCode = 'zh-CN'
  const mockChangeLang = jest.fn(lang => {
    PUI.changeLang(lang)
  })
  mockChangeLang(langCode)
  expect(PUI.getLang()).toBe(langCode)
})
