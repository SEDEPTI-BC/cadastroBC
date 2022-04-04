module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/upload": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/cadastro-bc/": "" },
      },
    },
  },
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false,
      },
    },
  },
};
