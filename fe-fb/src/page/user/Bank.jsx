import React, { useState } from 'react';
import { Breadcrumb, theme, Card, Col, Row } from 'antd';
import { HomeOutlined, CheckOutlined, CopyOutlined, HistoryOutlined } from '@ant-design/icons'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QR_teck from '../../assets/images/qrteck.png'
import QR_MB from '../../assets/images/qrmb.png'
const Bank = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const clickCopy = async () => {
        const BANK_ACCOUNT = '0011004224222'
        await navigator.clipboard.writeText(BANK_ACCOUNT);
        alert('copy thanh cong')
    }
    return (
        <>
            <Breadcrumb
                style={{ marginTop: '20px', marginBottom: '20px' }}
                items={[
                    {
                        title: <span
                            style={{ cursor: 'pointer' }}
                        >< HomeOutlined /> TRANG CHỦ</span>
                    },
                    {
                        title: "NẠP TIỀN & VÍ ĐIỆN TỬ",
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
                <Tabs
                    defaultActiveKey="bank"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="bank" title="NẠP TIỀN NGAY">
                        <div style={{ backgroundColor: '#f3f3bf', borderRadius: '20px', marginTop: '40px' }} className='container'>
                            <div style={{ padding: '20px' }} className='container'>
                                <h5>LƯU Ý KHI NẠP TIỀN</h5>
                                <p style={{ textAlign: 'justify', fontWeight: 'bold', color: '#820813' }}>
                                    <CheckOutlined style={{ color: '#19c37d' }} /> Bạn vui lòng chuyển khoản chính xác nội dung chuyển khoản bên dưới hệ thống sẽ tự động cộng tiền cho bạn sau 1 phút sau khi nhận được tiền.</p>
                                <p style={{ textAlign: 'justify', fontWeight: 'bold', color: '#820813' }}>
                                    <CheckOutlined style={{ color: '#19c37d' }} /> Nếu chuyển khác ngân hàng sẽ mất thời gian lâu hơn, tùy thời gian xử lý của mỗi ngân hàng.</p>
                                <p style={{ textAlign: 'justify', fontWeight: 'bold', color: '#820813' }}>
                                    <CheckOutlined style={{ color: '#19c37d' }} /> Nếu sau 10 phút từ khi tiền trong tài khoản của bạn bị trừ mà bạn vẫn chưa được cộng tiền vui lòng nhấn vào đây để liên hệ hỗ trợ.</p>
                                <p style={{ textAlign: 'justify', fontWeight: 'bold', color: '#820813' }}>
                                    <CheckOutlined style={{ color: '#19c37d' }} /> Liên hệ Admin nếu nhập sai nội dung chuyển.</p>
                            </div>
                        </div>
                        <div style={{ marginTop: '40px' }} className='container'>
                            <Row style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }} gutter={16}>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <Card className="shadow-card" bordered={false}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='container'>
                                            <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                                                <img src={QR_teck} style={{ maxWidth: '100%', borderRadius: '20px' }} alt="" />
                                            </div>
                                            <div style={{ marginTop: '20px' }}>
                                                <p style={{ fontWeight: 'bold' }}>Số tài khoản: <span style={{ color: '#198754' }}>22068888888888</span> <CopyOutlined style={{ fontSize: '20px', marginLeft: '5px', color: '#3b71ca', cursor: 'pointer' }} /></p>
                                                <p style={{ fontWeight: 'bold' }}>Tên tài khoản: <span>PHAN TIEN HUAN</span></p>
                                                <p style={{ fontWeight: 'bold' }}>Ngân hàng: <span style={{ color: '#eb1c26' }}>TECHCOM<span style={{ color: 'black' }}>BANK</span></span></p>
                                                <p style={{ fontWeight: 'bold' }}>Nội dung nạp: <span style={{ color: '#820813' }}>Nap_UserName</span> <CopyOutlined style={{ fontSize: '20px', marginLeft: '5px', color: '#3b71ca', cursor: 'pointer' }} /></p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <Card className="shadow-card" bordered={false}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='container'>
                                            <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                                                <img src={QR_MB} style={{ maxWidth: '100%', borderRadius: '20px' }} alt="" />
                                            </div>
                                            <div style={{ marginTop: '20px' }}>
                                                <p style={{ fontWeight: 'bold' }}>Số tài khoản: <span style={{ color: '#198754' }}>88222220088888</span> <CopyOutlined style={{ fontSize: '20px', marginLeft: '5px', color: '#3b71ca', cursor: 'pointer' }} /></p>
                                                <p style={{ fontWeight: 'bold' }}>Tên tài khoản: <span>PHAN TIEN HUAN</span></p>
                                                <p style={{ fontWeight: 'bold' }}>Ngân hàng: <span style={{ color: '#110f97' }}>MB</span></p>
                                                <p style={{ fontWeight: 'bold' }}>Nội dung nạp: <span style={{ color: '#820813' }}>Nap_UserName</span> <CopyOutlined style={{ fontSize: '20px', marginLeft: '5px', color: '#3b71ca', cursor: 'pointer' }} /></p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                    <Tab eventKey="bank-history" title="LỊCH SỬ NẠP TIỀN">
                        <div style={{ marginTop: '30px' }} className='container'>
                            <h5><HistoryOutlined /> LỊCH SỬ NẠP TIỀN</h5>
                        </div>
                        <div style={{ marginTop: '40px' }} className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">NGƯỜI DÙNG</th>
                                        <th scope="col">TIỀN NẠP</th>
                                        <th scope="col">NỘI DUNG</th>
                                        <th scope="col">NGÀY NẠP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>phantienhuy</td>
                                        <td style={{ color: '#820813', fontWeight: 'bold' }}>100,000 đ</td>
                                        <td>NAP_UserName</td>
                                        <td>2024-27-02</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};
export default Bank;