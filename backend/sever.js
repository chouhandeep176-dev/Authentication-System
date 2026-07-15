import { app } from "./app.js";
import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

// connect to database -->
import connect_db from "./config/db.js";
connect_db();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running at http://localhost:${PORT}`);
});

