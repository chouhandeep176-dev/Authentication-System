import express from "express";
const userRouter = express.Router();
import { giveProfileData } from "../controllers/user.js";
import { authenticate } from "../middlewares/auth.middleware.js";

userRouter.get("/profile", authenticate, giveProfileData);

export default userRouter;