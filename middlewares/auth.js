const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    const userVerified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userVerified;
    next();
  } else {
    return res
      .status(401)
      .json({ message: "Unauthorized access. Invalid token." });
  }
};

module.exports = auth;
