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
        test: /\.js$/i,
        use: 'babel-loader'
      },
      {
        test: /\.(jpg|png|git)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          "postcss-loader"
        ]
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
