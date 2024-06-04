import { React, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function EditServer(props) {
    const { showEditServerModal, hideEditServerModal } = props
    return (
        <>
            <Modal show={showEditServerModal} onHide={hideEditServerModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>CHỈNH SỬA SERVER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tên server: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Mô tả: </Form.Label>
                                    <Form.Control
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Giá: </Form.Label>
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
                        <Form.Select aria-label="Default select example">
                            <option value="">Chọn loại dịch vụ</option>
                            <option value="1">FACEBOOKE</option>
                            <option value="2">TIKTOK</option>
                            <option value="2">INSTAGRAM</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideEditServerModal}>
                        ĐÓNG
                    </Button>
                    <Button variant="primary" onClick={hideEditServerModal}>
                        THÊM MỚI
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
