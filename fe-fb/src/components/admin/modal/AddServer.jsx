import { React, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function AddServer(props) {
    const { showModal, hideAddModal } = props
    return (
        <>
            <Modal show={showModal} onHide={hideAddModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>THÊM MỚI SERVER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tên server: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập tên server..."
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Mô tả:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập mô tả..."
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tên dịch vụ: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập tên dịch vụ..."
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Giá:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập giá..."
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Select aria-label="Default select example">
                            <option value="">Chọn loại dịch vụ</option>
                            <option value="1">FACEBOOK</option>
                            <option value="2">TIKTOK</option>
                            <option value="2">INSTAGRAM</option>
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
