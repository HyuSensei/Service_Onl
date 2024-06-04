import React, { useEffect, useState } from "react";
import {
  LikeOutlined,
  EyeOutlined,
  ShareAltOutlined,
  FacebookOutlined,
  TikTokOutlined,
  PlayCircleOutlined,
  FundViewOutlined,
  InstagramOutlined,
  BankOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import logo from "../../assets/images/logoDV.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeData } from "../../helpers/localStorage";
import { message } from "antd";
import { getAccount } from "../../redux/slice/customer/authSlice";
const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogout, setIsLogOut] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.customer.auth);
  const handleLogout = () => {
    removeData("access_token");
    message.success("Đăng xuất thành công !");
    setIsLogOut(true);
  };
  useEffect(() => {
    dispatch(getAccount());
  }, [isLogout]);

  const MenuAuthSibar = () => {
    if (!isAuthenticated) {
      return;
    }
    return (
      <Menu.SubMenu key="sub4" icon={<SettingOutlined />} title="TÀI KHOẢN">
        <Menu.Item
          onClick={() => navigate("/account")}
          key="15"
          icon={<UserOutlined style={{ fontSize: "18px" }} />}
        >
          THÔNG TIN
        </Menu.Item>
        <Menu.Item
          key="16"
          icon={<LogoutOutlined style={{ fontSize: "18px" }} />}
          onClick={handleLogout}
        >
          ĐĂNG XUẤT
        </Menu.Item>
      </Menu.SubMenu>
    );
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={210}
    >
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
        }}
        className="container"
      >
        <img
          onClick={() => {
            window.location.href = "/";
          }}
          style={{
            width: "70px",
            borderRadius: "60px",
            cursor: "pointer",
          }}
          src={logo}
          alt=""
        />
      </div>
      <Menu theme="dark" mode="inline">
        <>
          <Menu.SubMenu
            key="sub1"
            icon={<FacebookOutlined style={{ fontSize: "18px" }} />}
            title="FACEBOOK"
          >
            <Menu.Item
              onClick={() => navigate("/order_like_facebook")}
              key="1"
              icon={<LikeOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF LIKE
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/order_eye_facebook")}
              key="2"
              icon={<EyeOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF MẮT
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/order_share_facebook")}
              key="3"
              icon={<ShareAltOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF SHARE
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/order_view_facebook")}
              key="4"
              icon={<PlayCircleOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF VIEW
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/order_sub_facebook")}
              key="5"
              icon={<FundViewOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF SUB
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" icon={<TikTokOutlined />} title="TIKTOK">
            <Menu.Item
              onClick={() => navigate("/order_like_tiktok")}
              key="6"
              icon={<LikeOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF LIKE
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/order_follow_tiktok")}
              key="7"
              icon={<FundViewOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF FOLLOW
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/order_eye_tiktok")}
              key="8"
              icon={<EyeOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF MẮT
            </Menu.Item>
            <Menu.Item
              onClick={() => navigate("/order_view_tiktok")}
              key="9"
              icon={<PlayCircleOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF VIEW
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub3"
            icon={<InstagramOutlined style={{ fontSize: "18px" }} />}
            title="INSTAGRAM"
          >
            <Menu.Item
              key="10"
              icon={<LikeOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF LIKE
            </Menu.Item>
            <Menu.Item
              key="11"
              icon={<EyeOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF VIEW
            </Menu.Item>
            <Menu.Item
              key="12"
              icon={<PlayCircleOutlined style={{ fontSize: "18px" }} />}
            >
              BUFF SUB
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item
            onClick={() => navigate("/bank")}
            key="13"
            icon={<BankOutlined style={{ fontSize: "18px" }} />}
          >
            NẠP TIỀN NGAY
          </Menu.Item>
          <Menu.Item
            onClick={() => navigate("/order_history")}
            key="14"
            icon={<ShoppingCartOutlined style={{ fontSize: "18px" }} />}
          >
            ĐƠN HÀNG DỊCH VỤ
          </Menu.Item>
          <MenuAuthSibar />
        </>
      </Menu>
    </Sider>
  );
};
export default SideBar;
