const mongoose = require("mongoose");
const { Schema } = mongoose;

const walletSchema = new Schema(
  {
    account_balance: Number,
    amount_deposited: Number,
    user: {
      _id: String,
      username: String,
    },
  },
  {
    timestamps: true,
  }
);

const Wallet = mongoose.model("Wallet", walletSchema);
module.exports = Wallet;
