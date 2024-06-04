import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "antd";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
export default function HeaderComponent() {
  const items = [
    {
      key: "1",
      label: <div>Xin Chào ADMIN</div>,
    },
    {
      key: "2",
      label: (
        <div style={{ fontWeight: "bold", width: "120px" }}>
          <LoginOutlined /> ĐĂNG XUẤT
        </div>
      ),
    },
  ];
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand style={{ fontWeight: "bold" }}>
            XIN CHÀO ADMIN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Dropdown menu={{ items }} placement="topRight">
                <div style={{ fontWeight: "bold", cursor: "pointer" }}>
                  <UserOutlined style={{ fontSize: "15px" }} /> TÀI KHOẢN
                </div>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
