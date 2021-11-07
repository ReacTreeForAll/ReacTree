const path = require('path')

module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@base': path.resolve(__dirname, 'src/components/base'),
      '@domain': path.resolve(__dirname, 'src/components/domain'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
}
