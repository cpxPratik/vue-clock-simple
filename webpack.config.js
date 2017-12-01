const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    moment: 'moment'
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        },
      },
      sourceMap: true
    })
  ]
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-clock.min.js',
      libraryTarget: 'window',
      library: 'VueClock',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/components/Clock.vue'),
    output: {
      filename: 'vue-clock.js',
      libraryTarget: 'umd',
      library: 'vue-clock',
      umdNamedDefine: true
    }
  })
];
