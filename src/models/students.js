const mongoose = require("mongoose");
const validator = require("validator");

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    unique: [true, "this email is already present."],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email..!");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Student = new mongoose.model("Student", studentsSchema);
module.exports = Student;
