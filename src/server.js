import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");
app.use(logger);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/videos", videoRouter);

app.listen(PORT, () =>
  console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`)
);
console.log(process.cwd());
