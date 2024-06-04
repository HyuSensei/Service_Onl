import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import background from '../../assets/images/bradmin.jpg'

export default function Login() {
    const navigate = useNavigate();
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
              backgroundColor: "#cbcad2",
              height: "450px",
              borderRadius: "20px",
            }}
          >
            <div style={{ paddingTop: "30px" }}>
              <h4 style={{ textAlign: "center", marginTop: "30px" }}>
                LOGIN ADMIN
              </h4>
              <Form style={{ width: "80%", margin: "auto" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Tên đăng nhập:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên đăng nhập..."
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Mật khẩu:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu..."
                  />
                </Form.Group>
                <Button
                  style={{ width: "100%", height: "50px" }}
                  variant="primary"
                  type="button"
                >
                  ĐĂNG NHẬP
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
}
