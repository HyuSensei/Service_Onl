const User = require("../models/User");

const findUserByEmail = async (email) => {
  const user = await User.findOne({
    email: email,
  });
  if (user) {
    return true;
  }
  return false;
};

const findUserByUserName = async (username) => {
  const user = await User.findOne({
    username: username,
  });
  if (user) {
    return true;
  }
  return false;
};

const findUserByPhone = async (phone) => {
  const user = await User.findOne({
    phone: phone,
  });
  if (user) {
    return true;
  }
  return false;
};

const registerUser = async (data) => {
  return await User.create({
    ...data,
  });
};

const getUserByUserName = async (username) => {
  const user = await User.findOne({
    username: username,
  });
  return user;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

module.exports = {
  findUserByEmail,
  findUserByUserName,
  findUserByPhone,
  registerUser,
  getUserByUserName,
  getUserById,
};
