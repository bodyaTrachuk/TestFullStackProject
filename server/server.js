const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()

const routes = require("./routes/routes");

const app = express();

const port = process.env.PORT;

app.listen(port, () => console.log(`SERVER IS STARTED ON PORT ${port}`));

const db = process.env.MONGO_URL

mongoose
  .connect(db)
  .then(() => console.log("connect to db succsees"))
  .catch((e) => console.log(e));

app.use(cors());
app.use(express.json())

app.use(routes);
