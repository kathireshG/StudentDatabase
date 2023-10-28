const mongoose = require("mongoose");
const express = require("express");
const studentRoutes = require("./studentRoutes/studentRoutes");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.vcr89wi.mongodb.net/School"
);

const db = mongoose.connection;

db.on("open", () => {
  console.log("connected to the database");
});
db.on("error", () => {
  console.log("could not connect to the database");
});
app.use(express.json());
app.use(cors());
app.use("/Student", studentRoutes);

const port = 5500;
app.listen(port, () => {
  console.log("Server Started on " + port);
});
