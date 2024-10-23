const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// Strapi is assumed to run on localhost:1337, adjust if necessary
const strapiPort = 1338;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      // Exclude /cms from being handled by Next.js
      if (pathname.startsWith("/cms")) {
        // Proxy request to Strapi
        createProxyMiddleware({
          target: `http://localhost:${strapiPort}`,
          changeOrigin: true,
        })(req, res);
      } else {
        // For all other requests, handle with Next.js
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
