import User from "../models/User";
import userRepositorty from "../repositories/userRepository";
import verifyToken from "./jwt";
import { body, validationResult } from "express-validator";
require("dotenv").config();

export const middlewareCustomer = async (req, res, next) => {
  try {
    const token = req.body.access_token;
    console.log("token", token);
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Vui lòng hãy đăng nhập !",
      });
    }
    const dataDecoded = verifyToken(token);
    const user = await userRepositorty.getUserById(dataDecoded._id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Vui lòng hãy đăng nhập !",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const middlewareAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Vui lòng hãy đăng nhập",
      });
    }
    let data_token = verifyToken(token);
    let user = await User.findOne({
      _id: data_token._id,
    });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Vui lòng hãy đăng nhập",
      });
    }
    if (!user.role !== "ADMIN") {
      return res.status(401).json({
        success: false,
        message: "Bạn không có quyền truy cập",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const middlewareLogin = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      data: {},
      message: errors.array()[0].msg,
    });
  }
  next();
};

export const validateLogin = [
  body("username").notEmpty().withMessage("Kiểm tra tên đăng nhập"),
  body("password").notEmpty().withMessage("Kiểm tra mật khẩu đăng nhập"),
];

export const validateRegister = [
  body("username").notEmpty().withMessage("Kiểm tra tên đăng nhập"),
  body("name").notEmpty().withMessage("Kiểm tra họ và tên đăng ký"),
  body("password").notEmpty().withMessage("Kiểm tra mật khẩu đăng ký"),
  body("phone").notEmpty().withMessage("Kiểm tra số điện thoại đăng ký"),
  body("email").notEmpty().withMessage("Kiểm tra email đăng ký"),
];
