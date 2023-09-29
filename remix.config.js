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
      route("/", "routes/index.tsx");
    });
  },
  future: {
    v2_dev: true,
  },
};
