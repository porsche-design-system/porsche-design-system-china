module.exports = {
  extends: ['prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true
  },
  settings: {
    'import/resolver': 'webpack',
    webpack: {
      config: 'conf/webpack.dev.js' // 这是你设置alias的配置文件路径
    },
    alias: {
      map: [
        ['@src', './src'],
        ['@kits', './src/kits'],
        ['@styles', './src/styles']
      ]
    },
    react: {
      version: 'detect'
    }
  },
  plugins: ['prettier', 'react'],
  overrides: [
    {
      files: ['cypress-base/**/*'],
      rules: {
        'import/no-unresolved': [2, { commonjs: true, amd: true, caseSensitive: true }],
        'global-require': 0
      }
    },
    {
      files: ['webpack*.js'],
      env: {
        node: true
      },
      settings: {
        'import/resolver': {
          node: {}
        }
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
      ],
      plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'react'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/ban-ts-comment': 0, // disabled temporarily
        '@typescript-eslint/ban-types': 0, // disabled temporarily
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-use-before-define': 1, // disabled temporarily
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0, // re-enable up for discussion
        camelcase: 0,
        'class-methods-use-this': 0,
        curly: 1,
        'func-names': 0,
        'guard-for-in': 0,
        'import/no-cycle': 0, // re-enable up for discussion, might require some major refactors
        'import/extensions': [
          'error',
          {
            '.ts': 'always',
            '.tsx': 'always',
            '.json': 'always'
          }
        ],
        'import/no-named-as-default-member': 0,
        'import/prefer-default-export': 0,
        indent: 0,
        'jsx-a11y/anchor-is-valid': 1,
        'jsx-a11y/click-events-have-key-events': 0, // re-enable up for discussion
        'jsx-a11y/mouse-events-have-key-events': 0, // re-enable up for discussion
        'new-cap': 0,
        'no-bitwise': 0,
        'no-continue': 0,
        'no-mixed-operators': 0,
        'no-multi-assign': 0,
        'no-multi-spaces': 0,
        'prefer-template': 0,
        'no-prototype-builtins': 0,
        'no-restricted-properties': 0,
        'no-plusplus': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'antd',
                message: 'Please import Ant components from the index of common/components'
              }
            ]
          }
        ],
        'no-shadow': 0, // re-enable up for discussion
        'no-use-before-define': 0, // disabled temporarily
        'padded-blocks': 0,
        'prefer-arrow-callback': 0,
        'prefer-destructuring': ['error', { object: true, array: false }],
        'react/destructuring-assignment': 0, // re-enable up for discussion
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-fragments': 1,
        'react/jsx-no-bind': 0,
        'react/jsx-props-no-spreading': 0, // re-enable up for discussion
        'react/no-array-index-key': 0,
        'react/no-string-refs': 0,
        'react/no-unescaped-entities': 0,
        'react/no-unused-prop-types': 0,
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/static-property-placement': 0, // re-enable up for discussion
        'prettier/prettier': 'error'
      },
      settings: {
        'import/resolver': {
          webpack: {},
          typescript: {}
        },
        react: {
          version: 'detect'
        }
      }
    },
    {
      files: ['*.stories.jsx', '*.stories.tsx'],
      rules: {
        // this is to keep eslint from complaining about storybook addons,
        // since they are included as dev dependencies rather than direct dependencies.
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
      }
    }
  ],
  rules: {
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
        properties: 'never'
      }
    ],
    'class-methods-use-this': 0,
    curly: 1,
    'func-names': 0,
    'guard-for-in': 0,
    'import/extensions': [
      'error',
      {
        '.js': 'always',
        '.jsx': 'always',
        '.ts': 'always',
        '.tsx': 'always',
        '.json': 'always'
      }
    ],
    'import/no-cycle': 0, // re-enable up for discussion, might require some major refactors
    'import/prefer-default-export': 0,
    indent: 0,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/click-events-have-key-events': 0, // re-enable up for discussion
    'jsx-a11y/mouse-events-have-key-events': 0, // re-enable up for discussion
    'new-cap': 0,
    'no-bitwise': 0,
    'no-continue': 0,
    'no-mixed-operators': 0,
    'no-multi-assign': 0,
    'no-multi-spaces': 0,
    'no-prototype-builtins': 0,
    'no-restricted-properties': 0,
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'antd',
            message: 'Please import Ant components from the index of common/components'
          }
        ]
      }
    ],
    'no-shadow': 0, // re-enable up for discussion
    'padded-blocks': 0,
    'prefer-arrow-callback': 0,
    'prefer-object-spread': 1,
    'prefer-destructuring': ['error', { object: true, array: false }],
    'react/destructuring-assignment': 0, // re-enable up for discussion
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-fragments': 1,
    'react/jsx-no-bind': 0,
    'react/jsx-props-no-spreading': 0, // re-enable up for discussion
    'react/no-array-index-key': 0,
    'react/no-string-refs': 0,
    'react/no-unescaped-entities': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/static-property-placement': 0, // disabled temporarily
    'prettier/prettier': 'error'
  }
};
