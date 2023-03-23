const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const auth = require("./middleware/auth");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
