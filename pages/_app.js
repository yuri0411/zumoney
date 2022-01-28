import { Col, Layout, Menu, Row } from 'antd'
import Link from 'next/link'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import NavBar from '../components/NavBar'

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
            <NavBar />
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
