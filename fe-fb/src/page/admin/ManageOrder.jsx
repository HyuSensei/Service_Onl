import React, { useState } from 'react'
import { theme, Breadcrumb } from 'antd';
import { HomeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import EditOrder from '../../components/admin/modal/EditOrder';

export default function ManageOrder() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [showEditOrderModal, setShowEditOrderModal] = useState(false)
    const showEditOrder = () => {
        setShowEditOrderModal(true);
    }
    const hideEditOrderAddModal = () => {
        setShowEditOrderModal(false);
    }
    return (
        <>
            <EditOrder
                showEditOrderModal={showEditOrderModal}
                hideEditOrderAddModal={hideEditOrderAddModal}
            />
            <Breadcrumb
                style={{ marginTop: '20px', marginBottom: '20px' }}
                items={[
                    {
                        title: <span
                            style={{ cursor: 'pointer' }}
                        >< HomeOutlined /> DASHBOARD</span>
                    },
                    {
                        title: "QUẢN LÝ ĐƠN HÀNG DỊCH VỤ",
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
                <div>
                    <h5 style={{ color: 'gray' }}>DANH SÁCH ĐƠN HÀNG</h5>
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
                                <th scope="col">THAO TÁC</th>
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
                                <td>100,000 đ</td>
                                <td>Đang chờ</td>
                                <td>2024-02-25</td>
                                <td>
                                    <EditOutlined onClick={() => showEditOrder()} style={{ marginRight: '20px', fontSize: '25px', color: '#e3c01c', cursor: 'pointer' }} />
                                    <DeleteOutlined style={{ fontSize: '25px', color: 'red', cursor: 'pointer' }} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
