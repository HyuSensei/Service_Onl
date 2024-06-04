import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../../assets/images/logoDV.jpg";
import { useNavigate } from "react-router-dom";
import background from "../../assets/images/brauth.jpg";
import { useDispatch } from "react-redux";
import { getAccount } from "../../redux/slice/customer/authSlice";
import { message } from "antd";
import { login } from "../../api/customer/auth";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [isInValid, setIsInVaid] = useState({
    username: false,
    password: false,
  });

  useEffect(() => {
    dispatch(getAccount()).then((result) => {
      if (result.payload.success) {
        navigate("/");
      }
    });
  }, []);

  const handleChangeInput = (key, value) => {
    setInput((prev) => ({
      ...prev,
      [key]: value,
    }));
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
  };

  const isValidInput = () => {
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
    return true;
  };

  const handleClickLogin = async () => {
    const check = isValidInput();
    if (!check) {
      return;
    }
    const res = await login(input);
    if (res.data.success) {
      navigate("/");
    }
  };

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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            width: "40%",
            backgroundColor: "#f0f0f0",
            height: "500px",
            borderRadius: "20px",
          }}
        >
          <div style={{ paddingTop: "30px" }}>
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
                <Form.Label>Tên đăng nhập:</Form.Label>
                <Form.Control
                  value={input.username}
                  onChange={(e) =>
                    handleChangeInput("username", e.target.value)
                  }
                  type="text"
                  placeholder="Nhập tên đăng nhập..."
                  isInvalid={isInValid.username}
                />
              </Form.Group>
              <Form.Control.Feedback type="invalid">erro</Form.Control.Feedback>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mật khẩu:</Form.Label>
                <Form.Control
                  value={input.password}
                  onChange={(e) =>
                    handleChangeInput("password", e.target.value)
                  }
                  type="password"
                  isInvalid={isInValid.password}
                  placeholder="Nhập mật khẩu..."
                />
              </Form.Group>
              <Button
                style={{ width: "100%", height: "50px" }}
                variant="primary"
                type="button"
                onClick={handleClickLogin}
              >
                ĐĂNG NHẬP
              </Button>
              <div style={{ marginTop: "20px" }} className="container">
                <p style={{ textAlign: "center" }}>
                  Bạn chưa có tài khoản ?{" "}
                  <i
                    onClick={() => navigate("/register")}
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                  >
                    Đăng Ký Ngay
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
