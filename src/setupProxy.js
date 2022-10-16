const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/store",
    createProxyMiddleware({
      target: "https://ohou.se",
      changeOrigin: true,
    })
  );
};
