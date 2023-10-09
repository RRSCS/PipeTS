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
      route("/pipelines", "routes/pipelines.tsx");
      // route("/", "routes/home.tsx");
    });
  },
  future: {
    v2_dev: true,
  },
};
