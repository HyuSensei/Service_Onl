import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../page/404";
import DashBoard from "../page/admin/DashBoard";
import Login from "../page/admin/Login";
import LayoutComponent from "../components/admin/Layout";
import ManageUser from "../page/admin/ManageUser";
import ManageServer from "../page/admin/ManageServer";
import ManageOrder from "../page/admin/ManageOrder";
import ManageWallet from "../page/admin/MangeWallet";
import ManageBank from "../page/admin/ManageBank";

const AdminRoute = (props) => {
    return (
      <Routes>
        <Route
          path="/dashboard"
          element={
            <LayoutComponent>
              <DashBoard />
            </LayoutComponent>
          }
        />
        <Route
          path="/manage_user"
          element={
            <LayoutComponent>
              <ManageUser />
            </LayoutComponent>
          }
        />
        <Route
          path="/manage_server"
          element={
            <LayoutComponent>
              <ManageServer />
            </LayoutComponent>
          }
        />
        <Route
          path="/manage_order"
          element={
            <LayoutComponent>
              <ManageOrder />
            </LayoutComponent>
          }
        />
        <Route
          path="/manage_wallet"
          element={
            <LayoutComponent>
              <ManageWallet />
            </LayoutComponent>
          }
        />
        <Route
          path="/manage_bank"
          element={
            <LayoutComponent>
              <ManageBank />
            </LayoutComponent>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
};

export default AdminRoute;
