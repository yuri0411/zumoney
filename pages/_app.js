import { Col, Layout, Row } from 'antd'
import Link from 'next/link'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import NavBar from '../components/NavBar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const { Header, Content } = Layout
  const router = useRouter()
  const { isLogin } = router.query

  console.log('isLogin', isLogin)
  return (
    <Layout style={{ background: 'transparent' }}>
      {!isLogin && (
        <Header>
          <Row>
            <Col span={6}>
              <div className="logo"> zu:money </div>
            </Col>
            <Col span={14}>
              <NavBar />
            </Col>
            <Col span={4}>
              <Link href="/myInfo">
                <a style={{ color: '#999' }}>마이페이지</a>
              </Link>
            </Col>
          </Row>
        </Header>
      )}
      <Content style={{ padding: 24 }}>
        <Component {...pageProps} />
      </Content>
    </Layout>
  )
}

export default MyApp
