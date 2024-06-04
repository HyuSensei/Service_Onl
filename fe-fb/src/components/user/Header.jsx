import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "antd";
import {
  UserOutlined,
  LoginOutlined,
  UserAddOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAccount } from "../../redux/slice/customer/authSlice";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={() => navigate("/login")}
          style={{ fontWeight: "bold", width: "120px" }}
        >
          <LoginOutlined /> ĐĂNG NHẬP
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => navigate("/register")}
          style={{ fontWeight: "bold", width: "120px" }}
        >
          <UserAddOutlined /> ĐĂNG KÝ
        </div>
      ),
    },
  ];
  const dispatch = useDispatch();
  const { dataAccount, isAuthenticated } = useSelector(
    (state) => state.customer.auth
  );
  useEffect(() => {
    dispatch(getAccount());
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand style={{ fontWeight: "bold" }}>
            DỊCH VỤ MẠNG XÃ HỘI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {!isAuthenticated ? (
                <Dropdown menu={{ items }} placement="topRight">
                  <div style={{ fontWeight: "bold", cursor: "pointer" }}>
                    <UserOutlined style={{ fontSize: "15px" }} /> TÀI KHOẢN
                  </div>
                </Dropdown>
              ) : (
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  <SmileOutlined
                    style={{ fontSize: "20px", color: "#3b71ca" }}
                  />{" "}
                  Xin Chào {dataAccount?.name}
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
