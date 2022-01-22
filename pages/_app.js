import { Col, Layout, Menu, Row } from 'antd'
import Link from 'next/link'
import 'antd/dist/antd.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { Header, Content } = Layout
  return (
    <Layout style={{ background: 'transparent' }}>
      <Header>
        <Row>
          <Col span={6}>
            <div className="logo"> zu:money </div>
          </Col>
          <Col span={14}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="Asset Status">
                <Link href="/nav/assetStatus">
                  <a>자산 현황</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="Account Book">
                <Link href="/nav/accountBook">
                  <a>가계부</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="Asset Management">
                <Link href="/nav/assetManagement">
                  <a>자산 관리</a>
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={4}>
            <Link href="/logIn">
              <a style={{ color: '#999' }}>로그인</a>
            </Link>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: 24 }}>
        <Component {...pageProps} />
      </Content>
    </Layout>
  )
}

export default MyApp
