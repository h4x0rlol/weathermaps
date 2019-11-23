const path = require('path');

module.exports = {
  entry: [
    './src/main.js'
  ],
  //mode: 'development',
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