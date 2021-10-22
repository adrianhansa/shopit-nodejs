const User = require("../models/User");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    //
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
