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
        [
          'Getting Start',
          'Change Logs',
          'Best Practice',
          'Develop PUI',
          'Testing PUI',
          'Update Icons',
          'Open Source Software Notice'
        ],
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
