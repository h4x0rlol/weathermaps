const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  
  entry: [
    './src/main.js'
  ],
  plugins: [
    new Dotenv({
      path: './.env',
      safe: true 
    })
  ],
  // mode: 'development',
  mode: 'production',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'babel-loader' }
        ]
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      }
    ]
  }
}