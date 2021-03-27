export const PUITheme = {
  set(themeName: 'light' | 'dark') {
    document.body.className =
      document.body.className.replace(/pui-theme-[^ ]+/, '') + ' pui-theme-' + themeName;
  }
};

(window as any).PUITheme = PUITheme;

if (document.body.className.indexOf('pui-theme-') < 0) {
  PUITheme.set('light');
}
