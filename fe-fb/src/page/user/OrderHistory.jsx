import React, { useState } from 'react';
import { Breadcrumb, theme } from 'antd';
import { HomeOutlined, HistoryOutlined } from '@ant-design/icons'
const OrderHistory = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
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
                        title: "ĐƠN HÀNG DỊCH VỤ",
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
                <div style={{ marginTop: '30px' }} className='container'>
                    <h5><HistoryOutlined /> LỊCH SỬ ĐƠN HÀNG DỊCH VỤ</h5>
                </div>
                <div style={{ marginTop: '40px' }} className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">NGƯỜI DÙNG</th>
                                <th scope="col">LINK OR ID</th>
                                <th scope="col">SERVER</th>
                                <th scope="col">DỊCH VỤ</th>
                                <th scope="col">LOẠI DỊCH VỤ</th>
                                <th scope="col">SỐ LƯỢNG</th>
                                <th scope="col">THỜI GIAN CHẠY</th>
                                <th scope="col">TỔNG TIỀN</th>
                                <th scope="col">TRẠNG THÁI</th>
                                <th scope="col">NGÀY TẠO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>phantienhuy</td>
                                <td>https://www.facebook.com/?locale=vi_VN</td>
                                <td>Server 1</td>
                                <td>BUFF LIKE</td>
                                <td>FACEBOOK</td>
                                <td>1000</td>
                                <td>Không có</td>
                                <td style={{ color: '#820813', fontWeight: 'bold' }}>100,000 đ</td>
                                <td>Đang chờ</td>
                                <td>2024-02-25</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default OrderHistory;