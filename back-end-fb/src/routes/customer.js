const express = require("express");
const router = express.Router();

import {
  orderLikeTT,
  orderEyeTT,
  orderFollowTT,
  orderViewTT,
} from "../controllers/customer/OrderTikTokController";

import {
  orderLike,
  orderEye,
  orderView,
  orderSub,
  orderShare,
} from "../controllers/customer/OrderFaceBookController";
import {
  getAccount,
  handleLogin,
  handleRegister,
} from "../controllers/customer/AuthController";
import {
  getListFollowTT,
  getListEyeTT,
  getListLikeTT,
  getListViewTT,
  getListLikeFB,
  getListEyeFB,
  getListViewFB,
  getListShareFB,
  getListSubFB,
} from "../controllers/admin/ServerController";
import { middlewareLogin, validateLogin } from "../middleware/middleware";

//Auth
router.post("/register", handleRegister);
router.post("/login", validateLogin, middlewareLogin, handleLogin);
router.get("/account", getAccount);

//Order Facebook
router.post("/order_like_facebook", orderLike);
router.post("/order_eye_facebook", orderEye);
router.post("/order_view_facebook", orderView);
router.post("/order_sub_facebook", orderSub);
router.post("/order_share_facebook", orderShare);

//Order Tiktok
router.post("/order_like_tiktok", orderLikeTT);
router.post("/order_eye_tiktok", orderEyeTT);
router.post("/order_view_tiktok", orderViewTT);
router.post("/order_follow_tiktok", orderFollowTT);

//Get server facebook
router.get("/server_like_facebook", getListLikeFB);
router.get("/server_eye_facebook", getListEyeFB);
router.get("/server_view_facebook", getListViewFB);
router.get("/server_share_facebook", getListShareFB);
router.get("/server_sub_facebook", getListSubFB);

//Get server tiktok
router.get("/server_like_tiktok", getListLikeTT);
router.get("/server_eye_tiktok", getListEyeTT);
router.get("/server_view_tiktok", getListViewTT);
router.get("/server_follow_tiktok", getListFollowTT);

module.exports = router;
