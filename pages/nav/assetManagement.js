import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { Button, PageHeader, Tabs } from 'antd'
import AccountModal from '../../components/management/AccountModal'
import AccountManagement from '../../components/management/AccountManagement'
import Seo from '../../components/Seo'

const AssetManagement = () => {
  const { TabPane } = Tabs
  const [showModal, setShowModal] = useState(false)
  const [assetsInfo, setAssetsInfo] = useState([])
  const [assetCategory, setAssetCategory] = useState([])
  const addAccount = () => {
    setShowModal(!showModal)
  }
  const handleEditAccount = (id) => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    fetch(
      `https://zumoney.herokuapp.com/users/${'cef8c8b5-e303-40ee-b8df-ce5a2b955497'}/assets`,
    )
      .then((res) => res.json())
      .then((data) => setAssetsInfo(data?.assets))
  }, [])

  useEffect(() => {
    fetch(`https://zumoney.herokuapp.com/categories/${3}/children`)
      .then((res) => res.json())
      .then((category) => setAssetCategory(category))
  }, [])
  return (
    <>
      <Seo title="자산 관리" />
      <Tabs tabPosition="left">
        {assetCategory.map((category) => (
          <TabPane tab={category.name} key={category.name}>
            <PageHeader
              className="site-page-header"
              title={category.name}
              backIcon={false}
              extra={
                <Button key="1" type="link" onClick={addAccount}>
                  추가
                </Button>
              }
            />
            <AccountManagement
              // category={category.name}
              handleEditAccount={handleEditAccount}
              assetsData={assetsInfo}
            />
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
