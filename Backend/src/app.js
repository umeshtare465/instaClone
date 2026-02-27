const express = require("express");
const cookieParser = require("cookie-parser");
/* requiring routes */
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/users.routes");
const cors = require("cors");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(cookieParser());
/** using routes  */
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
module.exports = app;
