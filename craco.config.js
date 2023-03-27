const path = require('path')
module.exports = {
  webpack: {
    alias: {
      // '@': path.resolve(__dirname, 'src')
      '@': path.resolve('src'),
      '@pages': path.resolve('src/pages'),
    },
  },
}
