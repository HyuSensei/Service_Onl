const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    role: String,
    bank_code: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
