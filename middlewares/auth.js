const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("token");
  try {
    const userVerified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userVerified;
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Unauthorized access. Invalid token." });
  }
  next();
};

module.exports = auth;
