import bcrypt from "bcrypt";
import { createJWT, verifyToken } from "../../middleware/jwt";
import userRepository from "../../repositories/userRepository";

export const handleRegister = async (req, res) => {
  try {
    const data = req.body;
    const [isEmailExit, isUserNameExit, isPhoneExit] = await Promise.all([
      userRepository.findUserByEmail(data.email),
      userRepository.findUserByUserName(data.username),
      userRepository.findUserByPhone(data.phone),
    ]);
    if (isEmailExit === true) {
      return res.status(400).json({
        success: false,
        message: "Email đã tồn tại !",
      });
    }
    if (isUserNameExit === true) {
      return res.status(400).json({
        success: false,
        message: "Tên đăng nhập đã tồn tại !",
      });
    }
    if (isPhoneExit === true) {
      return res.status(400).json({
        success: false,
        message: "Số điện thoại đã tồn tại !",
      });
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await userRepository.registerUser({
      ...data,
      password: hashedPassword,
      role: "KHÁCH HÀNG",
    });
    return res.json({
      success: true,
      message: "Đăng ký thành công !",
      data: {
        _id: user._id,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    return res.json({
      success: false,
      error: error.message,
    });
  }
};

export const checkPassword = async (password, hashedPassword) => {
  const checkPass = await bcrypt.compare(password, hashedPassword);
  return checkPass;
};

export const handleLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userRepository.getUserByUserName(username);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Tên đăng nhập không tồn tại !",
      });
    }
    const isPasswordExit = await checkPassword(password, user.password);
    if (user.role == "ADMIN" || !isPasswordExit) {
      return res.status(403).json({
        success: false,
        message: "Thông tin đăng nhập không chính xác !",
      });
    }
    const payload = {
      sub: "token-auth",
      iss: "Buff-Server",
      _id: user._id,
    };
    const token = createJWT(payload);
    return res.json({
      success: true,
      message: "Đăng nhập thành công",
      access_token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getAccount = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.json({
        success: false,
        data: {},
        message: "Vui lòng đăng nhập !",
      });
    }
    const token = authHeader.split(" ")[1];
    const dataToken = verifyToken(token);
    if (!dataToken) {
      return res.json({
        success: false,
        data: {},
        message: "Vui lòng đăng nhập !",
      });
    }
    const user = await userRepository.getUserById(dataToken._id);
    if (!user) {
      return res.json({
        success: false,
        data: {},
        message: "Yêu cầu truy cập thất bại !",
      });
    }
    return res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.json({
      success: false,
      data: {},
      error: error.message,
    });
  }
};

export const handleChangePassword = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: error.message,
    });
  }
};
