import React from 'react';
import Link from 'next/link'
import {Menu} from "antd";
const Nav = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="Asset Status"><Link href="/nav/AssetStatus"><a>자산 현황</a></Link></Menu.Item>
            <Menu.Item key="Account Book"><Link href="/nav/AccountBook"><a>가계부</a></Link></Menu.Item>
            <Menu.Item key="Asset Management"><Link href="/nav/AssetManagement"><a>자산 관리</a></Link></Menu.Item>
        </Menu>
    );
};

export default Nav;