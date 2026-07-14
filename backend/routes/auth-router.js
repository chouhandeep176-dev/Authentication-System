import express from "express";
const authRouter = express.Router();
import { signUp, login, logout } from "../controllers/auth.js";
import {
  validateSignup,
  validateLogin,
} from "../middlewares/auth.middleware.js";
import { signupSchema, loginSchema } from "../validators/auth.validator.js";

authRouter.post("/signup", validateSignup(signupSchema), signUp);

authRouter.post("/login", validateLogin(loginSchema), login);

authRouter.post("/logout", logout);

export default authRouter;
