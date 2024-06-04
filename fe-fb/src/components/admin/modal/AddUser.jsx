import { React, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function AddUser(props) {
    const { showModal, hideAddModal } = props
    return (
        <>
            <Modal show={showModal} onHide={hideAddModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>THÊM MỚI NGƯỜI DÙNG</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tên người dùng: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập tên người dùng..."
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Số điện thoại:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập số điện thoại..."
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tên đăng nhập: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập tên đăng nhập..."
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Mật khẩu:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập mật khẩu..."
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Select aria-label="Default select example">
                            <option value="">Chọn chức vụ người dùng</option>
                            <option value="1">KHÁCH HÀNG</option>
                            <option value="2">ADMIN</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideAddModal}>
                        ĐÓNG
                    </Button>
                    <Button variant="primary" onClick={hideAddModal}>
                        THÊM MỚI
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
