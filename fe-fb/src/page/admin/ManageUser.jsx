import React, { useState } from 'react'
import { theme, Breadcrumb } from 'antd';
import { HomeOutlined, EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons'
import AddUser from '../../components/admin/modal/AddUser';
import EditUser from '../../components/admin/modal/EditUser';
export default function ManageUser() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    const showAddUser = () => {
        setShowModal(true);
    }
    const hideAddModal = () => {
        setShowModal(false);
    }
    const showEditUser = () => {
        setShowEditModal(true);
    }
    const hideEditModal = () => {
        setShowEditModal(false);
    }
    return (
        <>
            <AddUser
                showModal={showModal}
                hideAddModal={hideAddModal}
            />
            <EditUser
                showEditModal={showEditModal}
                hideEditModal={hideEditModal}
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
                        title: "QUẢN LÝ NGƯỜI DÙNG",
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
                        <h5 style={{ color: 'gray' }}>DANH SÁCH NGƯỜI DÙNG</h5>
                    </div>
                    <div>
                        <button onClick={() => showAddUser()} style={{ color: 'white' }} className="btn btn-primary" type='button'><PlusCircleOutlined /> THÊM NGƯỜI DÙNG</button>
                    </div>
                </div>
                <div style={{ marginTop: '40px' }} className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">TÊN KHÁCH HÀNG</th>
                                <th scope="col">SỐ ĐIỆN THOẠI</th>
                                <th scope="col">TÊN ĐĂNG NHẬP</th>
                                <th scope="col">CHỨC VỤ</th>
                                <th scope="col">THAO TÁC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Phan Tiến Huy</td>
                                <td>0986538387</td>
                                <td>phantienhuy</td>
                                <td>Khách Hàng</td>
                                <td>
                                    <EditOutlined onClick={() => showEditUser()} style={{ marginRight: '20px', fontSize: '25px', color: '#e3c01c', cursor: 'pointer' }} />
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
