import globalTheme from './global-theme'

export const parameters = {
  docs: {
    theme: globalTheme
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'Coding',
        ['Getting Start', 'Best Practice', 'Develop PUI'],
        'Foundation',
        'Theming & Language',
        'Navigation',
        'Data Entry',
        'Data Display',
        'Feedback',
        'Layout',
        'Example'
      ]
    }
  }
}
