const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "crypto": require.resolve("crypto-browserify"),
          "buffer": require.resolve("buffer/"),
          "stream": require.resolve("stream-browserify"),
          "path": require.resolve("path-browserify"),
          "process": require.resolve("process/browser"),
          "vm": require.resolve("vm-browserify"),
          // Polyfill for process
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],   // Ensure process is globally available
        }),
      ],
    },
  },
};
