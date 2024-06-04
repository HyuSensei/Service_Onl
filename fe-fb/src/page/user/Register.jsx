import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../../assets/images/logoDV.jpg";
import { useNavigate } from "react-router-dom";
import background from "../../assets/images/brauth.jpg";
import { useDispatch } from "react-redux";
import { getAccount } from "../../redux/slice/customer/authSlice";
import { message } from "antd";
import { register } from "../../api/customer/auth";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    rePassword: "",
  });

  const [isInValid, setIsInVaid] = useState({
    name: false,
    email: false,
    phone: false,
    username: false,
    password: false,
    rePassword: false,
  });

  const isValidInput = () => {
    if (!input.name) {
      setIsInVaid((prev) => ({
        ...prev,
        name: true,
      }));
      message.error("Vui lòng điền họ và tên");
      return false;
    }
    if (!input.email) {
      setIsInVaid((prev) => ({
        ...prev,
        email: true,
      }));
      message.error("Vui lòng điền email");
      return false;
    }
    if (
      !input.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setIsInVaid((prev) => ({
        ...prev,
        email: true,
      }));
      message.error("Vui lòng email không hợp lệ");
      return false;
    }
    if (!input.phone) {
      setIsInVaid((prev) => ({
        ...prev,
        phone: true,
      }));
      message.error("Vui lòng điền số điện thoại");
      return false;
    }
    if (!input.username) {
      setIsInVaid((prev) => ({
        ...prev,
        username: true,
      }));
      message.error("Vui lòng điền tên đăng nhập");
      return false;
    }
    if (!input.password) {
      setIsInVaid((prev) => ({
        ...prev,
        password: true,
      }));
      message.error("Vui lòng điền mật khẩu");
      return false;
    }
    if (!input.rePassword) {
      setIsInVaid((prev) => ({
        ...prev,
        rePassword: true,
      }));
      message.error("Vui lòng điền nhập lại mật khẩu");
      return false;
    }
    if (input.rePassword !== input.password) {
      setIsInVaid((prev) => ({
        ...prev,
        rePassword: true,
      }));
      message.error("Mật khẩu khồng trùng khớp");
      return false;
    }
    return true;
  };

  const handleChangeInput = (key, value) => {
    setInput((prev) => ({
      ...prev,
      [key]: value,
    }));
    if (input.name !== "") {
      setIsInVaid((prev) => ({
        ...prev,
        name: false,
      }));
    }
    if (input.email !== "") {
      setIsInVaid((prev) => ({
        ...prev,
        email: false,
      }));
    }
    if (input.phone !== "") {
      setIsInVaid((prev) => ({
        ...prev,
        phone: false,
      }));
    }
    if (input.username !== "") {
      setIsInVaid((prev) => ({
        ...prev,
        username: false,
      }));
    }
    if (input.password !== "") {
      setIsInVaid((prev) => ({
        ...prev,
        password: false,
      }));
    }
    if (input.rePassword !== "") {
      setIsInVaid((prev) => ({
        ...prev,
        rePassword: false,
      }));
    }
  };
  const handleClickLogin = async () => {
    const check = isValidInput();
    if (!check) {
      return;
    }
    const res = await register(input);
    if (res.data.success) {
      navigate("/login");
    }
  };

  useEffect(() => {
    dispatch(getAccount());
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          className="container"
          style={{
            width: "60%",
            backgroundColor: "#f0f0f0",
            minHeight: "100vh",
            borderRadius: "30px",
          }}
        >
          <div style={{ paddingTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                onClick={() => navigate("/")}
                style={{
                  width: "100px",
                  borderRadius: "60px",
                  cursor: "pointer",
                }}
                src={logo}
                alt=""
              />
            </div>
            <Form style={{ width: "80%", margin: "auto" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Họ và tên:</Form.Label>
                <Form.Control
                  value={input.name}
                  onChange={(e) => handleChangeInput("name", e.target.value)}
                  type="text"
                  placeholder="Nhập họ tên ..."
                  isInvalid={isInValid.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  value={input.email}
                  onChange={(e) => handleChangeInput("email", e.target.value)}
                  type="email"
                  placeholder="Nhập email..."
                  isInvalid={isInValid.email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Số điện thoại:</Form.Label>
                <Form.Control
                  type="text"
                  value={input.phone}
                  onChange={(e) => handleChangeInput("phone", e.target.value)}
                  placeholder="Nhập tên số điện thoại..."
                  isInvalid={isInValid.phone}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tên đăng nhập:</Form.Label>
                <Form.Control
                  type="text"
                  value={input.username}
                  onChange={(e) =>
                    handleChangeInput("username", e.target.value)
                  }
                  placeholder="Nhập tên đăng nhập..."
                  isInvalid={isInValid.username}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mật khẩu:</Form.Label>
                <Form.Control
                  value={input.password}
                  onChange={(e) =>
                    handleChangeInput("password", e.target.value)
                  }
                  type="password"
                  placeholder="Nhập mật khẩu..."
                  isInvalid={isInValid.password}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nhập lại mật khẩu:</Form.Label>
                <Form.Control
                  value={input.rePassword}
                  onChange={(e) =>
                    handleChangeInput("rePassword", e.target.value)
                  }
                  type="password"
                  placeholder="Nhập mật khẩu..."
                  isInvalid={isInValid.rePassword}
                />
              </Form.Group>
              <Button
                style={{ width: "100%", height: "50px", color: "white" }}
                variant="info"
                type="button"
                onClick={handleClickLogin}
              >
                ĐĂNG KÝ
              </Button>
              <div style={{ marginTop: "20px" }} className="container">
                <p style={{ textAlign: "center" }}>
                  Bạn đã có tài khoản ?{" "}
                  <i
                    onClick={() => navigate("/login")}
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                  >
                    Đăng Nhập Ngay
                  </i>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
