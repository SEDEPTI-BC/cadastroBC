module.exports = {
  devServer: {
    proxy: "http://localhost:3000"
  },
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
