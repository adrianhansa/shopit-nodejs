const jwt = require("jsonwebtoken");

const sendToken = (user, statusCode, res) => {
  const token = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
      fullName: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET
  );
  res.status(statusCode).header("token", token).json({ isAuth: true, token });
};

module.exports = sendToken;
