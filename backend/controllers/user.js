import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const giveProfileData = async (req, res) => {
  const { name, email, createdAt } = req.user;

  res.status(200).json({
    success: true,
    data: {
      name: name,
      email: email,
      date: createdAt,
    },
  });
};
