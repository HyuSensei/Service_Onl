import { React, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function EditOrder(props) {
    const { showEditOrderModal, hideEditOrderAddModal } = props
    return (
        <>
            <Modal show={showEditOrderModal} onHide={hideEditOrderAddModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>CHỈNH SỬA ĐƠN HÀNG DỊCH VỤ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tên người dùng: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Link or ID:</Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Server: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Dịch vụ: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Loại dịch vụ: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Số lượng: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Thời gian chạy: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Tổng tiền: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Trạng thái: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Ngày tạo: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideEditOrderAddModal}>
                        ĐÓNG
                    </Button>
                    <Button variant="primary" onClick={hideEditOrderAddModal}>
                        THÊM MỚI
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
