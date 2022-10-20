//dependencies
const express = require("express");
const db = require("./utils/database");
//files
const { port } = require("./config");

//Routes
const userRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const initModels = require("./models/initModels");
//initial configs
const app = express();

app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Database Autenticated");
  })
  .catch((err) => {
    console.log(err);
  });
db.sync()
  .then(() => {
    console.log("Database Synsed");
  })
  .catch((err) => {
    console.log(err);
  });
initModels();
app.get(
  "/",
  (req, res, next) => {
    console.log("Se esta ejecutando un midlewere", req.method);
    next();
  },
  (req, res) => {
    res.status(200).json({
      message: "ok!",
      users: `localhost:${port}/api/v1/users`,
    });
  }
);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
