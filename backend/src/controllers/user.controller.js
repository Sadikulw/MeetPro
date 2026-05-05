import httpStatus from "http-status";
import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import crypto from "node:crypto";
const register = async (req, res) => {
  const { username, password, name,email } = req.body;

  if (!username || !password || !name || !email) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(httpStatus.CONFLICT).json({
        message: "User already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      name,
      password: hashedPassword,
      email,
    });

    await newUser.save();

    res.status(httpStatus.CREATED).json({
      message: "User Registered",
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Problem in register",
    });
  }
};


const login = async (req, res) => {
  const {email, password } = req.body;

  if (!email || !password) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: "Please enter username & password",
    });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: "Invalid credentials",
      });
    }

    const token = crypto.randomBytes(20).toString("hex");

    user.token = token;
    await user.save();

    res.status(httpStatus.OK).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Login failed",
    });
  }
};
export{login,register}
