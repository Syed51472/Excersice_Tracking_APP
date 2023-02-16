const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRouter = require("./Routes/taskRouter");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/route", taskRouter);

//for connecting the database
mongoose.connect("mongodb://127.0.0.1:27017/excersiceDB", {
  useNewUrlParser: true,
});

//for checking database connected
mongoose.connection.once("open", () => {
  console.log("Database connected!");
});

app.listen(PORT, () => {
  console.log(`Port is Connected http://localhost:${PORT}`);
});
