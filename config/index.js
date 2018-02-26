// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),//默认
    assetsRoot: path.resolve(__dirname, '../dist'),
    index: path.resolve(__dirname, '../../index.html'), //其他位置打包
    assetsRoot: path.resolve(__dirname, '../../'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8334,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {//反向代理
      '/pie': {
        target: 'http://localhost:3000',//node
        // target: 'http://www.bench.com',//php
        // target: 'http://localhost:3003',//mock
        changeOrigin: true,
        pathRewrite: {
          '^/pie': '/'
        }
      },
      /* '/api': {
        target: 'http://localhost:3003',//mock
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      } */
    },
    cssSourceMap: false
  }
}