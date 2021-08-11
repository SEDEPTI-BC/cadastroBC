module.exports = {
  devServer: {
    proxy: "http://10.7.2.72:6013"
  },
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
