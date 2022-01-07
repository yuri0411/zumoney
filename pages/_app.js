import { Layout, Menu } from 'antd'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import 'antd/dist/antd.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { Header, Content } = Layout
  return (
    <Layout style={{ background: 'transparent' }}>
      <Head>
        <title>ZU:MONEY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <div className="logo"> zu:money </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="Asset Status">
            <Link href="/nav/AssetStatus">
              <a>자산 현황</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="Account Book">
            <Link href="/nav/AccountBook">
              <a>가계부</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="Asset Management">
            <Link href="/nav/AssetManagement">
              <a>자산 관리</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: 24 }}>
        <Component {...pageProps} />
      </Content>
    </Layout>
  )
}

export default MyApp
