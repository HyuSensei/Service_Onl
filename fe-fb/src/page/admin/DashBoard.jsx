import React from 'react'
import {
    DashboardOutlined,
    UserOutlined,
    DollarOutlined,
    ShoppingCartOutlined,
    SafetyOutlined
} from '@ant-design/icons';
import { theme, Card, Col, Row } from 'antd';
export default function DashBoard() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <>
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className='container'>
                <h6 style={{ color: 'gray' }}><DashboardOutlined /> DASHBOARD</h6>
            </div>
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                        <Card style={{ height: '170px', textAlign: 'center', backgroundColor: '#e3c01c', color: 'white', margin: '10px' }} className="shadow-card" bordered={false}>
                            <h5>KHÁCH HÀNG</h5>
                            <UserOutlined style={{ fontSize: '70px', textAlign: 'center' }} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                        <Card style={{ height: '170px', textAlign: 'center', backgroundColor: '#65bebc', color: 'white', margin: '10px' }} className="shadow-card" bordered={false}>
                            <h5>DOANH THU</h5>
                            <DollarOutlined style={{ fontSize: '70px', textAlign: 'center' }} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                        <Card style={{ height: '170px', textAlign: 'center', backgroundColor: '#19c37d', color: 'white', margin: '10px' }} className="shadow-card" bordered={false}>
                            <h5>ĐƠN HÀNG</h5>
                            <ShoppingCartOutlined style={{ fontSize: '70px', textAlign: 'center' }} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                        <Card style={{ height: '170px', textAlign: 'center', backgroundColor: '#cd3f34', color: 'white', margin: '10px' }} className="shadow-card" bordered={false}>
                            <h5>DỊCH VỤ</h5>
                            <SafetyOutlined style={{ fontSize: '70px', textAlign: 'center' }} />
                        </Card>
                    </Col>
                </Row>
                <div style={{ marginTop: '50px' }} className='container'>
                    <h5>CÁC DỊCH VỤ CỦA HỆ THỐNG</h5>
                </div>
                <div style={{ marginTop: '40px' }} className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">TÊN DỊCH VỤ</th>
                                <th scope="col">NỀN TẢNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
