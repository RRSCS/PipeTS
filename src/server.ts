import express from "express";
import uiRouter from "./express/remixRouter";
import "dotenv/config";

const app = express();

app.use(uiRouter);

const PORT = process.env["port"];

app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
