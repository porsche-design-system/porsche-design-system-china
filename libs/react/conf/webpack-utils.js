/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');

const getSassResources = () => {
  let theme = 'light';
  const configPath = path.resolve(__dirname, '../pui.config.js');
  const sassResources = [];
  if (fs.existsSync(configPath)) {
    const puiConfig = require(configPath);
    theme = puiConfig.baseTheme;
    const { overrideVars } = puiConfig;
    if (overrideVars) {
      let overrideScss = `
      $pui-theme: ${theme};\n
      @if ( $pui-theme == 'dark' ){
        $background-color-2: black !global;
        $text-color-1: white !global;
      }@else{
        $background-color-2: white !global;
        $text-color-1: black !global;
      }
      .docs-story {
        background-color: $background-color-2;
        color: $text-color-1;
      }
      `;
      for (const key in overrideVars) {
        overrideScss += `${key} :${overrideVars[key]};\n`;
      }
      fs.writeFileSync('override.scss', overrideScss);
      sassResources.push('override.scss');
    }
  }
  return sassResources;
};

module.exports = { getSassResources };
