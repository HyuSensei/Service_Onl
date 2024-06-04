import jwt from "jsonwebtoken";
require("dotenv").config();

export const createJWT = (payload) => {
  try {
    if (!payload) {
      return null;
    }
    const key = process.env.JWT_SECRET;
    const token = jwt.sign(payload, key);
    return token;
  } catch (error) {
    return null;
  }
};

export const verifyToken = (token) => {
  try {
    if (!token) {
      return null;
    }
    const key = process.env.JWT_SECRET;
    return jwt.verify(token, key);
  } catch (error) {
    return {};
  }
};
