import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;
const logger = morgan("dev");

// const logger = (req, res, next) => {
//   console.log(`${req.method}: ${req.url}`);
//   next();
// };
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};

app.use(logger);
app.use(privateMiddleware);
app.get("/private", (req, res) => {
  return res.send("Welcome to the private page");
});
app.get("/", (req, res) => {
  return res.send("middleware middleware teest");
});

app.get("/login", (req, res) => {
  return res.send("login page");
});
app.listen(PORT, () =>
  console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`)
);
