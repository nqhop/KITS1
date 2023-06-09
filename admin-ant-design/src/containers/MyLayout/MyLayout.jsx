import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { DashboardOutlined, CustomerServiceOutlined, ShoppingCartOutlined, BarcodeOutlined } from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';

import { NavLink } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const nav = [
    [
        'Trang chủ',
        DashboardOutlined,
        ['user', 'sản phẩm']
    ],
    [
        'Users',
        UserOutlined,
        ['Show', 'Phân quyền']
    ],
    [
        'Khách hàng',
        CustomerServiceOutlined,
        ['Show', 'Export']
    ],
    [
        'Đơn hàng',
        ShoppingCartOutlined,
        ['Show', 'Export']
    ],
    [
        'Mã giảm giá',
        BarcodeOutlined,
        ['Show', 'Thêm']
    ]
]

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    console.log('-key ', key);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            console.log('-subkey ', subKey);
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
const myItems = nav.map((item, index) => {
    const key = String(index + 1);
    console.log('key ', key);
    return {
        key: `sub${key}`,
        icon: React.createElement(item[1]),
        label: item[0],
        children: item[2].map((subnav, j) => {
            const subkey = index * item[2].length + j + 1;
            console.log('subkey ', subkey);
            return {
                key: subkey,
                label: subnav,
            };
        }),
    }
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
        children: [{ key: "2.1", label: <NavLink to="/show">show</NavLink> }, { key: "2.2", label: <NavLink to="/phanquyen">Phân quyền</NavLink> }]
    }
]
export const MyLayout = ({ children, title }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Content
                style={{
                    padding: '0 50px',
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
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                    }}
                >
                    <Sider
                        style={{
                            background: colorBgContainer,
                        }}
                        width={200}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['1']}
                            style={{
                                height: '100%',
                            }}
                            // items={items2}
                            items={menuItems}
                        />
                    </Sider>
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        {children}

                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
}