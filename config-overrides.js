const { override, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  ),
  (config) => {
    config.resolve.fallback = {
      querystring: require.resolve('querystring-es3'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      timers: require.resolve('timers-browserify'),
    };
    return config;
  }
);
