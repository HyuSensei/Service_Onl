import React, { useEffect, useState } from "react";
import { Breadcrumb, theme, Col, Row } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import user from "../../assets/images/user.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { getAccount } from "../../redux/slice/customer/authSlice";

const Account = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const dispatch = useDispatch();
  const { dataAccount } = useSelector((state) => state.customer.auth);
  useEffect(() => {
    dispatch(getAccount);
  }, []);

  return (
    <>
      <Breadcrumb
        style={{ marginTop: "20px", marginBottom: "20px" }}
        items={[
          {
            title: (
              <span style={{ cursor: "pointer" }}>
                <HomeOutlined /> TRANG CHỦ
              </span>
            ),
          },
          {
            title: "THÔNG TIN TÀI KHOẢN",
          },
        ]}
      />
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={7} lg={7} xl={7} span={7}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={user} style={{ width: "250px" }} alt="" />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                {dataAccount?.user?.name}
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  color: "#820813",
                  fontSize: "18px",
                }}
              >
                100,000 đ
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={17} lg={17} xl={17} span={17}>
            <Form style={{ width: "80%", margin: "auto" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Tên đăng nhập:
                </Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={dataAccount?.username}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>Email:</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={dataAccount?.email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Số điện thoại:
                </Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  value={dataAccount?.phone}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Mật khẩu:
                </Form.Label>
                <Form.Control type="text" placeholder="Nhập mật khẩu..." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Mật khẩu mới:
                </Form.Label>
                <Form.Control type="text" placeholder="Nhập mật khẩu mới..." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Nhập lại mật khẩu mới:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập lại mật khẩu mới..."
                />
              </Form.Group>
              <Button
                style={{ width: "100%", height: "40px" }}
                variant="primary"
                type="button"
              >
                LƯU
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Account;
