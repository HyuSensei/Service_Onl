import React, { useState } from 'react'
import { theme, Breadcrumb } from 'antd';
import { HomeOutlined, EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons'
import AddServer from '../../components/admin/modal/AddServer';
import EditServer from '../../components/admin/modal/EditServer';
export default function ManageServer() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [showModal, setShowModal] = useState(false)
    const [showEditServerModal, setShowEditServerModal] = useState(false)
    const showAddServer = () => {
        setShowModal(true);
    }
    const hideAddModal = () => {
        setShowModal(false);
    }
    const showEditServer = () => {
        setShowEditServerModal(true);
    }
    const hideEditServerModal = () => {
        setShowEditServerModal(false);
    }
    return (
        <>
            <EditServer
                showEditServerModal={showEditServerModal}
                hideEditServerModal={hideEditServerModal}
            />
            <AddServer
                showModal={showModal}
                hideAddModal={hideAddModal}
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
                        title: "QUẢN LÝ SERVER",
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
                <div style={{ display: 'flex', justifyContent: 'space-between' }} className='container'>
                    <div>
                        <h5 style={{ color: 'gray' }}>DANH SÁCH SERVER</h5>
                    </div>
                    <div>
                        <button onClick={() => showAddServer()} style={{ color: 'white' }} className="btn btn-primary" type='button'><PlusCircleOutlined /> THÊM SERVER</button>
                    </div>
                </div>
                <div style={{ marginTop: '40px' }} className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">TÊN SERVER</th>
                                <th scope="col">MÔ TẢ</th>
                                <th scope="col">GIÁ</th>
                                <th scope="col">DỊCH VỤ</th>
                                <th scope="col">LOẠI DỊCH VỤ</th>
                                <th scope="col">THAO TÁC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Server 1</td>
                                <td>Rất nhanh</td>
                                <td>50 đ</td>
                                <td>BUFF LIKE</td>
                                <td>FACEBOOK</td>
                                <td>
                                    <EditOutlined onClick={() => showEditServer()} style={{ marginRight: '20px', fontSize: '25px', color: '#e3c01c', cursor: 'pointer' }} />
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
