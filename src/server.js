// for server only

import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/videos", videoRouter);

console.log(process.cwd());

export default app;
