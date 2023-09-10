import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import compression from "compression";
import express from "express";
import path from "path";

installGlobals();

const BUILD_PATH = path.join(process.cwd(), "build/remix");

const app = express();

app.use(compression());

app.disable("x-powered-by");

app.use(
	"/build",
	express.static("public/build", { immutable: true, maxAge: "1y" })
);

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static("public", { maxAge: "1h" }));

app.all(
	"*",
	createRequestHandler({
		build: require(BUILD_PATH),
		mode: process.env.NODE_ENV,
	})
);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
	console.log(`Express server listening on port ${port}`);
});
