import { themes } from '@storybook/theming';

export const parameters = {
  docs: {
    theme: themes.dark
  },
  actions: { argTypesRegex: '^on[A-Z].*' }
};
