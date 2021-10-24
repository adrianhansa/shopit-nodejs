const User = require("../models/User");
const bcrypt = require("bcryptjs");
const sendToken = require("../utils/sendToken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email/Password are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "The password must contain at least 6 characters" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email/password" });
    }
    const passwordVerified = await bcrypt.compare(password, user.password);
    if (!passwordVerified) {
      return res.status(400).json({ message: "Invalid email/password" });
    }
    sendToken(user, 200, res);
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, passwordVerify, isAdmin } = req.body;
    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: "Email/Password/Name are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "The password must contain at least 6 characters" });
    }
    if (password !== passwordVerify) {
      return res
        .status(400)
        .json({ message: "The two passwords do not match" });
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "This user already exists. Please login" });
    }
    const user = await User.create({ name, email, password, isAdmin });
    sendToken(user, 200, res);
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
};

const profile = async (req, res) => {
  try {
    //
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
};

module.exports = { login, register, profile };
