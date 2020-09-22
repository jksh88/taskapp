const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age cannot be negative.");
      }
    },
  },
  email: {
    type: String,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
  password: {
    type: String,
    trim: true,
    validate(value) {
      if (value.length < 7) {
        throw new Error("pw needs to be at least 8 characters");
      }
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
