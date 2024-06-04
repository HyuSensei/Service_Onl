import React, { useState } from "react";
import {
  UserOutlined,
  ShoppingCartOutlined,
  CloudServerOutlined,
  WalletOutlined,
  BankOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Sider
        style={{ backgroundColor: "#405189" }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={220}
      >
        <h5 style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
          ADMIN
        </h5>
        <Menu style={{ backgroundColor: "#405189" }} theme="dark" mode="inline">
          <Menu.Item
            onClick={() => navigate("/admin/manage_user")}
            style={{ fontWeight: "bold", marginBottom: "20px" }}
            key="1"
            icon={<UserOutlined style={{ fontSize: "18px" }} />}
          >
            Quản Lý Người Dùng
          </Menu.Item>
          <Menu.Item
            onClick={() => navigate("/admin/manage_order")}
            style={{ fontWeight: "bold", marginBottom: "20px" }}
            key="2"
            icon={<ShoppingCartOutlined style={{ fontSize: "18px" }} />}
          >
            Quản Lý Đơn Hàng
          </Menu.Item>
          <Menu.Item
            onClick={() => navigate("/admin/manage_server")}
            style={{ fontWeight: "bold", marginBottom: "20px" }}
            key="3"
            icon={<CloudServerOutlined style={{ fontSize: "18px" }} />}
          >
            Quản Lý Server
          </Menu.Item>
          <Menu.Item
            onClick={() => navigate("/admin/manage_wallet")}
            style={{ fontWeight: "bold", marginBottom: "20px" }}
            key="4"
            icon={<WalletOutlined style={{ fontSize: "18px" }} />}
          >
            Quản Lý Ví Nạp
          </Menu.Item>
          <Menu.Item
            onClick={() => navigate("/admin/manage_bank")}
            style={{ fontWeight: "bold", marginBottom: "20px" }}
            key="5"
            icon={<BankOutlined style={{ fontSize: "18px" }} />}
          >
            Quản Lý Lịch Sử Nạp
          </Menu.Item>
          {/* <Menu.Item style={{ fontWeight: 'bold', marginBottom: '20px' }} key="6" icon={<RocketOutlined style={{ fontSize: '18px' }} />}>
                        Quản Lý Dịch Vụ
                    </Menu.Item> */}
        </Menu>
        ,
      </Sider>
    </>
  );
};
export default SideBar;
