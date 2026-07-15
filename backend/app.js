import express from "express";
import authRouter from "./routes/auth-router.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user-router.js";
import cors from "cors";

export const app = express();

// apply cors -->
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

// Application level middleware -->
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("api working");
});



// apply auth and user router -->
app.use("/auth", authRouter);
app.use("/user", userRouter);
