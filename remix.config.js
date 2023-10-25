/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "src/remix",
  // assetsBuildDirectory: "public/build",
  serverBuildPath: "build/remix/index.js",
  // publicPath: "/build/",
  tailwind: true,
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/", "routes/home.tsx");
      route("/pipelines", "routes/pipelines/pipelines.tsx");
      route("/newPipeline", "routes/pipelines/newPipeline.tsx");
    });
  },
  future: {
    v2_dev: true,
  },
  serverDependenciesToBundle: [
    /^remix-utils.*/,
    // If you installed is-ip optional dependency you will need these too
    "is-ip",
    "ip-regex",
    "super-regex",
    "clone-regexp",
    "function-timeout",
    "time-span",
    "convert-hrtime",
    "is-regexp",
  ],
};
