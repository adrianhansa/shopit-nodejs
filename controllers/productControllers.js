const products = require("../data/products");

const getProducts = async (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { getProducts, getProduct };
