const WebpackShellPlugin = require('webpack-shell-plugin');
const webpack = require('webpack');

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react','es2015'],
        plugins: [
          'transform-flow-strip-types',
          'transform-class-properties',
          'transform-object-rest-spread',
          ['transform-builtin-extend', {globals: ['Error']}],
          'add-module-exports',
          'react-hot-loader/babel'
        ],
        cacheDirectory: true,
      },
    }],

  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin
  ]
};

if (process.env.DEV_ENV === 'npmtest') {
    config.plugins.push(
        new WebpackShellPlugin({
            onBuildEnd: ['npm run test-true'],
            dev: false
        })
    )
}

module.exports = config;
