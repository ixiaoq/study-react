const path = require('path')

function resolve (filePath) {
    return path.resolve(__dirname, filePath)
}

module.exports = {
  devtool: 'inline-cheap-source-map',

  mode: 'development',

  entry: resolve('src/index.js'),

  output: {
    path: resolve('./dist'),
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      '@': resolve('src')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    static: {
      directory: resolve('dist')
    },
    port: 3000,
    host: 'localhost',
    historyApiFallback: true
  }
}
