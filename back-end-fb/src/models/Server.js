const mongoose = require("mongoose");
const { Schema } = mongoose;

const serverSchema = new Schema(
  {
    name: String,
    service: String,
    description: String,
    price: Number,
    type: String,
  },
  {
    timestamps: true,
  }
);

const Server = mongoose.model("Server", serverSchema);
module.exports = Server;
