const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    service: String,
    type: String,
    total_price: Number,
    order_detail: {
      link_id: String,
      server: String,
      quantity: Number,
      time: String,
    },
    user: {
      _id: String,
      username: String,
    },
    status: String,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
