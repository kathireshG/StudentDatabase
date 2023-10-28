const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    collection: "Student",
  }
);

module.exports = mongoose.model("Student", studentSchema);
