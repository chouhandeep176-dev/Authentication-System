import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";

export async function storeUser(user) {
  const { name, email, password } = user;

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({
    name: name,
    email: email,
    password: hashPassword,
  });
  await newUser.save();

  return;
}
