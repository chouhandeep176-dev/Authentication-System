import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  try {
    console.log("cookies:", req.cookies);
    // fetch token -->
    const token = req.cookies.token;

    // validate token -->
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "invalid or expired token !",
      });
    }

    const decoded = jwt.verify(token, process.env.secretKey);

    const userId = decoded._id;
    const userData = await userModel.findById(userId).select("-password");

    // check is user data is valid and not explicitly or implicitly deleted -->
    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // add user to request body -->
    req.user = userData;
    next();
  } catch (err) {
    console.log("Error : ", err);
    res.status(500).json({
      success: false,
      message: "Can't get profile data !",
    });
  }
};

export const validateSignup = (signupSchema) => {
  return (req, res, next) => {
    const { error } = signupSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    next();
  };
};

export const validateLogin = (loginSchema) => {
  return (req, res, next) => {
    const { error } = loginSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    next();
  };
};
