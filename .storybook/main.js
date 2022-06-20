// module.exports = {
//   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//     '@chakra-ui/storybook-addon',
//   ],
//   features: {
//     emotionAlias: false,
//   },
//   framework: '@storybook/react',
//   core: {
//     builder: '@storybook/builder-webpack5',
//   },
// }

const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)

const { propNames } = require('@chakra-ui/styled-system')
const excludedPropNames = propNames.concat(['as', 'apply', 'sx', '__css'])

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        const isStyledSystemProp = excludedPropNames.includes(prop.name)
        const isHTMLElementProp =
          prop.parent?.fileName.includes('node_modules') ?? false
        return !(isStyledSystemProp || isHTMLElementProp)
      },
    },
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],
  features: {
    emotionAlias: false,
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    }
  },
}
