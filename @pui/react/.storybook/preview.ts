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
        ['Getting Start', 'Best Practice'],
        'Foundation',
        'Layout',
        'Navigation',
        'Data Entry',
        'Data Display',
        'Feedback',
        'Example'
      ]
    }
  }
}