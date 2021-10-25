const router = require("express").Router();
const {
  getProducts,
  getProduct,
} = require("../controllers/productControllers");
const auth = require("../middlewares/auth");

router.get("/", getProducts);
router.get("/:id", getProduct);

module.exports = router;
