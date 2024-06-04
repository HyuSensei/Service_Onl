import React, { useEffect, useState } from "react";
import { HomeOutlined, CheckOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Radio,
  Space,
  Col,
  Row,
  Breadcrumb,
  theme,
} from "antd";
import like from "../../../assets/images/like.png";
import tym from "../../../assets/images/tym.png";
import thuongthuong from "../../../assets/images/thuongthuong.png";
import haha from "../../../assets/images/haha.png";
import wow from "../../../assets/images/wow.png";
import sad from "../../../assets/images/sad.png";
import phanno from "../../../assets/images/phanno.png";
import { useQuery } from "@tanstack/react-query";
import { getDataServer } from "../../../api/customer/server";

const { TextArea } = Input;
const OrderLikeFacebook = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [isChooseFeel, setIsChooseFeel] = useState(false);
  const [server, setServer] = useState("");

  const onchangeServer = (e) => {
    const selected = e.target.value;
    setServer(e.target.value);
    const list = selected.split(",");
    if (+list[2] >= 20) {
      setIsChooseFeel(true);
    } else {
      setIsChooseFeel(false);
    }
  };

  const {
    isPending,
    error,
    data: servers,
  } = useQuery({
    queryKey: ["fetchLikeServerFB"],
    queryFn: () => getDataServer("/server_like_facebook"),
  });

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
            title: "TĂNG LIKE FACEBOOK",
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
        <div className="container">
          <Row>
            <Col xs={24} sm={24} md={17} lg={17} xl={17} span={17}>
              <div style={{ marginBottom: "20px" }} className="container">
                <h5 style={{ textAlign: "center" }}>TẠO ĐƠN HÀNG</h5>
              </div>
              <Form style={{ width: "90%" }}>
                <Form.Item label="Nhập Link Hoặc ID Cần Tăng">
                  <Input style={{ borderColor: "#00266d " }} />
                </Form.Item>
                <label style={{ marginRight: "20px" }}>Chọn Server : </label>
                <Radio.Group onChange={onchangeServer}>
                  <Space direction="vertical">
                    {servers && servers.length > 0 ? (
                      servers.map((item, index) => (
                        <Radio
                          value={
                            item.name +
                            "," +
                            item.description +
                            "," +
                            item.price
                          }
                          key={index}
                        >
                          {item.name} {item.description}
                          <i style={{ color: "#883731", fontWeight: "bold" }}>
                            {" "}
                            (Giá : {item.price}đ)
                          </i>
                        </Radio>
                      ))
                    ) : (
                      <h6>LOADING SERVER...</h6>
                    )}
                  </Space>
                </Radio.Group>
                {isChooseFeel === true && (
                  <div style={{ marginTop: "10px" }}>
                    <label style={{ marginRight: "20px" }}>
                      Chọn cảm xúc :{" "}
                    </label>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                      <Radio value={3}>
                        <img style={{ width: "40px" }} src={like} alt="" />
                      </Radio>
                      <Radio value={4}>
                        <img style={{ width: "40px" }} src={tym} alt="" />
                      </Radio>
                      <Radio value={5}>
                        <img
                          style={{ width: "40px" }}
                          src={thuongthuong}
                          alt=""
                        />
                      </Radio>
                      <Radio value={6}>
                        <img style={{ width: "40px" }} src={haha} alt="" />
                      </Radio>
                      <Radio value={7}>
                        <img style={{ width: "40px" }} src={wow} alt="" />
                      </Radio>
                      <Radio value={8}>
                        <img style={{ width: "40px" }} src={sad} alt="" />
                      </Radio>
                      <Radio value={9}>
                        <img style={{ width: "40px" }} src={phanno} alt="" />
                      </Radio>
                    </Radio.Group>
                  </div>
                )}
                <Form.Item
                  style={{ marginTop: "20px" }}
                  label="Số lượng like cần tăng : "
                >
                  <Input style={{ width: "40%", borderColor: "#00266d " }} />
                </Form.Item>
                <Form.Item label="Ghi chú nếu có :">
                  <TextArea style={{ borderColor: "#00266d " }} rows={4} />
                </Form.Item>
                <div
                  style={{
                    backgroundColor: "#d7f3fb",
                    height: "80px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    borderRadius: "20px",
                  }}
                  className="container"
                >
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "18px",
                      padding: "25px",
                      fontWeight: "bold",
                    }}
                  >
                    Tổng Tiền:{" "}
                    <i
                      style={{
                        color: "#883731 ",
                      }}
                    >
                      0đ
                    </i>
                  </p>
                </div>
                <button
                  style={{
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    height: "50px",
                    fontSize: "18px",
                    marginBottom: "20px",
                  }}
                  className="btn btn-warning"
                  type="button"
                >
                  Tạo Tiến Trình
                </button>
              </Form>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={7} span={7}>
              <div
                style={{ backgroundColor: "#f5f5f5", borderRadius: "20px" }}
                className="container"
              >
                <div style={{ padding: "20px" }} className="container">
                  <h5 style={{ color: "#ee4d2d" }}>LƯU Ý</h5>
                  <div className="container">
                    <p style={{ textAlign: "justify", fontWeight: "bold" }}>
                      <CheckOutlined style={{ color: "#19c37d" }} /> Nghiêm cấm
                      Buff các ID Seeding có nội dung vi phạm pháp luật, chính
                      trị, đồ trụy... Nếu cố tình buff bạn sẽ bị trừ hết tiền và
                      ban khỏi hệ thống vĩnh viễn, và phải chịu hoàn toàn trách
                      nhiệm trước pháp luật
                    </p>
                    <p style={{ textAlign: "justify", fontWeight: "bold" }}>
                      <CheckOutlined style={{ color: "#19c37d" }} /> Nhập đầy đủ
                      thông tin trước khi thực hiện
                    </p>
                    <p style={{ textAlign: "justify", fontWeight: "bold" }}>
                      <CheckOutlined style={{ color: "#19c37d" }} /> Số lượng
                      like tối thiểu mỗi lần mua là 100 like
                    </p>
                    <p style={{ textAlign: "justify", fontWeight: "bold" }}>
                      <CheckOutlined style={{ color: "#19c37d" }} /> Vui lòng
                      lấy đúng id bài viết, link công khai
                    </p>
                    <p style={{ textAlign: "justify", fontWeight: "bold" }}>
                      <CheckOutlined style={{ color: "#19c37d" }} /> Nhập id lỗi
                      hoặc trong thời gian chạy die id thì hệ thống không hoàn
                      lại tiền.
                    </p>
                    <p style={{ textAlign: "justify", fontWeight: "bold" }}>
                      <CheckOutlined style={{ color: "#19c37d" }} /> Chúng tôi
                      không chấp nhận bất cứ lý do gì về hoàn tiền khi đã nạp
                      vào tài khoản
                    </p>
                    <p style={{ textAlign: "justify", fontWeight: "bold" }}>
                      <CheckOutlined style={{ color: "#19c37d" }} /> Mọi thắc
                      mắc khiếu nại quý khách hàng vui lòng liên hệ admin để
                      được hỗ trợ
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default OrderLikeFacebook;
