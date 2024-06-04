const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    price: Number,
    content: String,
    user: {
      _id: String,
      username: String,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
