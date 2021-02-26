const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: {
    path: path.join(__dirname, './src/index.jsx'),
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
          <head>
              <title>2101 React Demo</title>
          </head>
          <body>
              <div id='app'></div>
          </body>
        </html>
      `,
    })
  ]
};

module.exports = webpackConfig;
