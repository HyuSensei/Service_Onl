const {
  FACEBOOK,
  BUFF_LIKE,
  BUFF_EYE,
  BUFF_SHARE,
  BUFF_VIEW,
  BUFF_SUB,
  TIKTOK,
  BUFF_FOLLOW,
} = require("../const/service");
const Server = require("../models/Server");

const saveServer = async (data) => {
  return await Server.create({
    ...data,
  });
};

const getLikeFBs = async () => {
  return await Server.find({
    type: FACEBOOK,
    service: BUFF_LIKE,
  });
};

const getEyeFBs = async () => {
  return await Server.find({
    type: FACEBOOK,
    service: BUFF_EYE,
  });
};

const getShareFBs = async () => {
  return await Server.find({
    type: FACEBOOK,
    service: BUFF_SHARE,
  });
};

const getViewFBs = async () => {
  return await Server.find({
    type: FACEBOOK,
    service: BUFF_VIEW,
  });
};

const getSubFBs = async () => {
  return await Server.find({
    type: FACEBOOK,
    service: BUFF_SUB,
  });
};

const getLikeTTs = async () => {
  return await Server.find({
    type: TIKTOK,
    service: BUFF_LIKE,
  });
};

const getFollowTTs = async () => {
  return await Server.find({
    type: TIKTOK,
    service: BUFF_FOLLOW,
  });
};

const getEyeTTs = async () => {
  return await Server.find({
    type: TIKTOK,
    service: BUFF_EYE,
  });
};

const getViewTTs = async () => {
  return await Server.find({
    type: TIKTOK,
    service: BUFF_VIEW,
  });
};

module.exports = {
  saveServer,
  getLikeFBs,
  getEyeFBs,
  getShareFBs,
  getViewFBs,
  getSubFBs,
  getLikeTTs,
  getFollowTTs,
  getEyeTTs,
  getViewTTs,
};
