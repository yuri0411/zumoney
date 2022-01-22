import React, { useState } from 'react'
import { Button, PageHeader, Tabs } from 'antd'
import AccountModal from '../../components/management/AccountModal'
import AccountManagement from '../../components/management/AccountManagement'
import Seo from '../../components/Seo'

const managementTabList = [
  { name: '계좌/현금', component: <AccountManagement /> },
  { name: '카드' },
  { name: '대출' },
  { name: '카테고리' },
]
const AssetManagement = () => {
  const { TabPane } = Tabs
  const [showModal, setShowModal] = useState(false)
  const addAccount = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <Seo title="자산 관리" />
      <Tabs tabPosition="left">
        {managementTabList.map((tab) => (
          <TabPane tab={tab.name} key={tab.name}>
            <PageHeader
              className="site-page-header"
              title={tab.name}
              backIcon={false}
              extra={
                <Button key="1" type="link" onClick={addAccount}>
                  추가
                </Button>
              }
            />
            {tab.component}
          </TabPane>
        ))}
      </Tabs>
      {showModal ? (
        <AccountModal
          visible={showModal}
          onCancel={() => setShowModal(!showModal)}
        />
      ) : null}
    </>
  )
}

export default AssetManagement
