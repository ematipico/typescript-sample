const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')
const webpack = require('webpack')
const bundler = webpack(config)

module.exports = {
  server: {
    baseDir: 'src',
    index: 'index.html'
  },
  middleware: [
    webpackDevMiddleware(bundler, {
      publicPath: bundler.options.output.publicPath,
      stats: {
        colors: true,
        usedExports: true,
        reasons: true
      }
    }),
    webpackHotMiddleware(bundler)
  ],
  files: [
    '../js/**/*.js',
    '../css/app.css',
    '../**/*.html'
  ],
  online: false,
  ghostMode: true,
  minify: false
}
