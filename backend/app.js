import express from "express";
import authRouter from "./routes/auth-router.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user-router.js";
import cors from "cors";

export const app = express();

// apply cors -->
app.use(
  cors({
    origin: [process.env.CLIENT_URL,  "http://localhost:5173"],
    credentials: true,
  }),
);

// Application level middleware -->
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("data sent");
});

// apply auth and user router -->
app.use("/auth", authRouter);
app.use("/user", userRouter);
