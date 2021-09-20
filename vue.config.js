module.exports = {
  publicPath: "./",
  devServer: {
    proxy: "http://localhost:8080"
  },
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
