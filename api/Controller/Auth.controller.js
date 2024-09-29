import User from "../models/user.model";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/Error";

export const signup = async (req, res, next) => {
  const { username, email, password } = res.body;

  if (
    !username ||
    !email ||
    !password ||
    username === " " ||
    email === " " ||
    password === " "
  ) {
    next(errorHandler(400, "All fields are require"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
  } catch (error) {
    next(error);
  }
};
