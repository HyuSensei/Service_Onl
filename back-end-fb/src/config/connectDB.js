import mongoose from "mongoose";
require("dotenv").config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.URL_CONNECT_DB);
    if (mongoose.connection.readyState === 1) {
      console.log("----------Connect DB Success----------");
    } else {
      console.log("---------Connect DB Fail-----------");
    }
  } catch (error) {
    handleError(error);
  }
};
module.exports = connection;
