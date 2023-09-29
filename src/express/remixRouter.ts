import * as path from "node:path";
import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady, installGlobals } from "@remix-run/node";
import compression from "compression";
import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import chokidar from "chokidar";
import sourceMapSupport from "source-map-support";

sourceMapSupport.install();
installGlobals();

const BUILD_PATH = path.join(process.cwd(), "/build/remix/");
const NODE_ENV = process.env.NODE_ENV;

const uiRouter = express.Router();

uiRouter.use(compression());

uiRouter.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

uiRouter.use(express.static("public", { maxAge: "1h" }));

uiRouter.all("*", (request, response, next) => {
  if (NODE_ENV === "development") {
    createDevRequestHandler();
  } else {
    createRequestHandler({
      build: require(BUILD_PATH),
      mode: NODE_ENV,
    })(request, response, next);
  }
});

async function createDevRequestHandler() {
  let build = require(BUILD_PATH);

  async function handleServerUpdate() {
    Object.keys(require.cache).forEach((key) => {
      delete require.cache[key];
    });
    build = require(BUILD_PATH);
    broadcastDevReady(build);
  }

  chokidar
    .watch(BUILD_PATH, { ignoreInitial: true })
    .on("add", handleServerUpdate)
    .on("change", handleServerUpdate);

  broadcastDevReady(require(BUILD_PATH));

  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      return createRequestHandler({
        build,
        mode: NODE_ENV,
      })(request, response, next);
    } catch (error) {
      next(error);
    }
  };
}

export default uiRouter;
