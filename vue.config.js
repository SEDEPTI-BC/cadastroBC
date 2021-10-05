module.exports = {
  publicPath: "/cadastro-bc/",
  devServer: {
    proxy: {
      "/upload": {
        target: "http://localhost:8080/",
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
