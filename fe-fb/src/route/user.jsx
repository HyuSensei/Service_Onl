import { React } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../page/404";
import Home from "../page/user/Home";
import Login from "../page/user/Login";
import Register from "../page/user/Register";
import OrderEyeFacebook from "../page/user/order_facebook/OrderEyeFacebook";
import OrderEyeTiktok from "../page/user/order_tiktok/OrderEyeTiktok";
import OrderShareFacebook from "../page/user/order_facebook/OrderShareFacebook";
import OrderLikeFacebook from "../page/user/order_facebook/OrderLikeFacebook";
import OrderSubFacebook from "../page/user/order_facebook/OrderSubFacebook";
import LayoutComponent from "../components/user/Layout";
import OrderFollowTikTok from "../page/user/order_tiktok/OrderFollowTikTok";
import OrderViewFacebook from "../page/user/order_facebook/OrderViewFacebook";
import OrderLikeTiktok from "../page/user/order_tiktok/OrderLikeTiktok";
import OrderViewTiktok from "../page/user/order_tiktok/OrderViewTiktok";
import Bank from "../page/user/Bank";
import OrderHistory from "../page/user/OrderHistory";
import Account from "../page/user/Account";
import { useSelector } from "react-redux";

const UserRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutComponent>
            <Home />
          </LayoutComponent>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/order_eye_facebook"
        element={
          <LayoutComponent>
            <OrderEyeFacebook />
          </LayoutComponent>
        }
      />
      <Route
        path="/order_share_facebook"
        element={
          <LayoutComponent>
            <OrderShareFacebook />
          </LayoutComponent>
        }
      />
      <Route
        path="/order_like_facebook"
        element={
          <LayoutComponent>
            <OrderLikeFacebook />
          </LayoutComponent>
        }
      />
      <Route
        path="/order_sub_facebook"
        element={
          <LayoutComponent>
            <OrderSubFacebook />
          </LayoutComponent>
        }
      />
      <Route
        path="/order_view_facebook"
        element={
          <LayoutComponent>
            <OrderViewFacebook />
          </LayoutComponent>
        }
      />
      <Route
        path="/order_like_tiktok"
        element={
          <LayoutComponent>
            <OrderLikeTiktok />
          </LayoutComponent>
        }
      />
      <Route
        path="/order_view_tiktok"
        element={
          <LayoutComponent>
            <OrderViewTiktok />
          </LayoutComponent>
        }
      />
      <Route
        path="/order_eye_tiktok"
        element={
          <LayoutComponent>
            <OrderEyeTiktok />
          </LayoutComponent>
        }
      />
      <Route
        path="/order_follow_tiktok"
        element={
          <LayoutComponent>
            <OrderFollowTikTok />
          </LayoutComponent>
        }
      />
      <Route
        path="/bank"
        element={
          <LayoutComponent>
            <Bank />
          </LayoutComponent>
        }
      />
      <Route
        path="/order_history"
        element={
          <LayoutComponent>
            <OrderHistory />
          </LayoutComponent>
        }
      />
      <Route
        path="/account"
        element={
          <LayoutComponent>
            <Account />
          </LayoutComponent>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRoute;
