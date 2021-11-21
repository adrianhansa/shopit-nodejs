const router = require("express").Router();
const { login, register, profile } = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.post("/login", login);
router.post("/register", register);
router.get("/profile", auth, profile);

module.exports = router;
