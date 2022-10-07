const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://ohou.se/store.json?v=5&wedding=true",
      changeOrigin: true,
    })
  );
  app.use(
    "/store",
    createProxyMiddleware({
      target: "https://ohou.se",
      changeOrigin: true,
    })
  );
};

// /store/category.json?v=2&order=popular&page=1&per=24
