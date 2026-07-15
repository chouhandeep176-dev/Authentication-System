import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import mongoose from "mongoose";
import { storeUser } from "../util/auth.utils.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // return if user alreasy exist -->
    const user = await userModel.findOne({ email });

    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "user already exist !" });
    }

    // Store data in database -->
     await storeUser(req.body);

    // send registration response -->
    res.status(200).json({
      success: true,
      message: "user data registered on database",
      data: {
        name: name,
        email: email,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1: Identification -->
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Wrong email or password !",
      });
    }

    // 2: Verification -->
    const hashPassword = user.password;

    const isMatch = await bcrypt.compare(password, hashPassword);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Wrong email or password !",
      });
    }

    // 3: set Token for user in cookie -->
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.secretKey,
      { expiresIn: "12h" },
    );

    // 4: send response -->
    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true, // true in production
        sameSite: "lax",
      })
      .json({
        success: true,
        user: {
          name: user.name,
          email: user.email,
          date: user.createdAt
        },
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "login failed !",
    });
  }
};

export const logout = async(req, res)=>{

  res
    .clearCookie("token", {
      httpOnly: true,
      secure: true, // true in production
      sameSite: "lax",
    })
    .json({
      success: true,
      message: "Logged out successfully",
    });
}
