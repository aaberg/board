const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(`environment set to: ${process.env.NODE_ENV}`);

module.exports = env => {
  return {
    entry: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:8080',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      path.resolve(__dirname, 'src/app.jsx')
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js',
      publicPath: '/'
    },
    module: {
      loaders: [
        {
          enforce: "pre",
          test: /\.jsx?$/,
          exclude: [/node_modules/],
          loaders: ['eslint-loader']
        },
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/],
          loaders: ['babel-loader']
        }, {
          test: /\.sass$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }, {
          test: /\.svg$/,
          loader: 'svg-inline'
        }
      ]
    },

    resolve: {
      alias: {
      },
      extensions: ['.json', '.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, "dist"),
      publicPath: '/',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally

      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates

      new webpack.DefinePlugin({ "ENABLE_REDUX_LOGGING": true }),

      new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]
  }
};
