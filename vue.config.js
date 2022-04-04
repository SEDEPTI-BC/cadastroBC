module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: `http://localhost:${process.env.VUE_APP_API_PORT}/`,
        changeOrigin: true,
        logLevel: 'debug',
      },
    },
  },
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== 'production' ? true : false,
      },
    },
  },
}
