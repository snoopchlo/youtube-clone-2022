// for server only

import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localMiddleware } from "./middlewares";

const app = express();

const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// initialise the express session middleware before the root router
app.use(
  session({
    secret: "Hello",
    resave: true,
    saveUninitialized: true,
  })
);
app.use((req, res, next) => {
  console.log(res);
  req.sessionStore.all((error, sessions) => {
    console.log(sessions);
    next();
  });
});
app.use(localMiddleware);
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/videos", videoRouter);

console.log(process.cwd());

export default app;
