const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../src/assets')
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components')
    config.resolve.alias['@domain'] = path.resolve(__dirname, '../src/components/domain')
    config.resolve.alias['@base'] = path.resolve(__dirname, '../src/components/base')
    config.resolve.alias['@contexts'] = path.resolve(__dirname, '../src/contexts')
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '../src/hooks')
    config.resolve.alias['@pages'] = path.resolve(__dirname, '../src/pages')
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils')
    return config
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
}
