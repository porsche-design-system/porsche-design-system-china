/* eslint-disable dot-notation */
type ThemeName = 'light' | 'dark';
export const PUITheme = {
  set(themeName: ThemeName) {
    this['_themeName'] = themeName;
    document.body.className =
      document.body.className.replace(/pui-theme-[^ ]+/, '') +
      ' pui-theme-' +
      themeName;
  },
  get() {
    return this['_themeName'] as ThemeName;
  }
};

(window as any).PUITheme = PUITheme;

if (document.body.className.indexOf('pui-theme-') < 0) {
  PUITheme.set('light');
}
