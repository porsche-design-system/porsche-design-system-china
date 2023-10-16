import { addons } from '@storybook/addons'
import globalTheme from './global-theme'

addons.setConfig({
  theme: globalTheme,
  showToolbar: false
})
