import React, { useMemo } from "react";
import { Layout } from 'antd';
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import SideBar from "./Sidebar";
const { Content, Footer } = Layout;

const LayoutComponent = ({ children }) => {
    const memoizedSidebar = useMemo(() => <SideBar />, []);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            {memoizedSidebar}
            <Layout>
                <HeaderComponent />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    {children}
                </Content>
                <Footer>
                    <FooterComponent />
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutComponent;
