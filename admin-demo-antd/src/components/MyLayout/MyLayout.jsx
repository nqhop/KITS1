import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { DashboardOutlined, CustomerServiceOutlined, ShoppingCartOutlined, BarcodeOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink } from 'react-router-dom';
import React from 'react';
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const menuItems = [
    {
        key: '1',
        icon: <DashboardOutlined />,
        label: "Trang chủ",
        children: [{ key: "1.1", label: <NavLink to="/dashboard/user">User</NavLink> }, { key: "1.2", label: <NavLink to="/sp">sản phẩm</NavLink> }]
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: "User",
        children: [{ key: "2.1", label: <NavLink to="/">show</NavLink> }, { key: "2.2", label: <NavLink to="/">Phân quyền</NavLink> }]
    }
]
export const MyLayout = ({children}) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        // items={items2}
                        items={menuItems}

                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};