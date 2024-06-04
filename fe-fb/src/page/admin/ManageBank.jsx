import React, { useState } from 'react'
import { theme, Breadcrumb } from 'antd';
import { HomeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
export default function ManageBank() {
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
                        >< HomeOutlined /> DASHBOARD</span>
                    },
                    {
                        title: "QUẢN LÝ LỊCH SỬ NẠP",
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
                    <h5 style={{ color: 'gray' }}>DANH SÁCH LỊCH SỬ NẠP</h5>
                </div>
                <div style={{ marginTop: '40px' }} className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">TÊN NGƯỜI DÙNG</th>
                                <th scope="col">TÊN ĐĂNG NHẬP</th>
                                <th scope="col">SỐ ĐIỆN THOẠI</th>
                                <th scope="col">NỘI DUNG</th>
                                <th scope="col">THÀNH TIỀN</th>
                                <th scope="col">NGÀY NẠP</th>
                                <th scope="col">THAO TÁC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>PHAN TIẾN HUY</td>
                                <td>phantienhuy</td>
                                <td>0986538387</td>
                                <td>NAPphantienhuy</td>
                                <td>100,000 đ</td>
                                <td>2024-02-25</td>
                                <td>
                                    <EditOutlined style={{ marginRight: '20px', fontSize: '25px', color: '#e3c01c', cursor: 'pointer' }} />
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
