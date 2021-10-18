const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log(`DB connected!`);
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch((error) => console.log(error.message));
