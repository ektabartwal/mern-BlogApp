import User from "../models/user.model";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = res.body;

  if (
    !username ||
    !email ||
    !password ||
    username === " " ||
    email === " " ||
    password === " "
  ) {
    return res.status(400).jason({ message: "All fields are require" });
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
    res.status(500).json({ message: "error.message" });
  }
};
