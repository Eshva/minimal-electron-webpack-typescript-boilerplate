const path = require('path');

console.log(__dirname);
let common_config = {
  node: {
    __dirname: false
  },
  mode: process.env.ENV || 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
};

module.exports = [
  Object.assign({}, common_config, {
    target: 'electron-main',
    entry: {
      main: './src/main/index.ts',
    },
    output: {
      filename: '[name]-bundle.js',
      path: path.resolve(__dirname, 'output/compiled/main')
    },
  }),
  Object.assign({}, common_config, {
    target: 'electron-renderer',
    entry: {
      renderer: './src/renderer/index.ts',
    },
    output: {
      filename: '[name]-bundle.js',
      path: path.resolve(__dirname, 'output/compiled/renderer')
    },
  })
]
