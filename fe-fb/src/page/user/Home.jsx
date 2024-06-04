import React, { useState } from "react";
import { theme, Space, Card, Col, Row } from "antd";
import { DollarOutlined, BankOutlined, HomeOutlined } from "@ant-design/icons";
import banner1 from "../../assets/images/banner1.png";
const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <div
        style={{ marginTop: "20px", marginBottom: "20px" }}
        className="container"
      >
        <h6 style={{ color: "gray" }}>
          <HomeOutlined /> TRANG CHỦ
        </h6>
      </div>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <div>
          <Row
            style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
            gutter={16}
          >
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card className="shadow-card" bordered={false}>
                <Space style={{ color: "#c69a39" }}>
                  <DollarOutlined
                    style={{ fontSize: "30px", marginBottom: "10px" }}
                  />
                  <h5>SỐ DƯ</h5>
                </Space>
                <h5> 100.000 VND</h5>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card className="shadow-card" bordered={false}>
                <Space style={{ color: "#c69a39", marginBottom: "10px" }}>
                  <BankOutlined style={{ fontSize: "30px" }} />
                  <h5 style={{ paddingTop: "8px" }}>TIỀN ĐÃ NẠP</h5>
                </Space>
                <h5> 100.000 VND</h5>
              </Card>
            </Col>
          </Row>
          <div style={{ marginTop: "50px" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={banner1}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
