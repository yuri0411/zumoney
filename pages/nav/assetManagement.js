import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { Button, PageHeader, Tabs } from 'antd'
import AccountModal from '../../components/management/AccountModal'
import AccountManagement from '../../components/management/AccountManagement'
import Seo from '../../components/Seo'

const fetcher = (url) => fetch(url).then((r) => r.json())

const AssetManagement = () => {
  const { TabPane } = Tabs
  const [showModal, setShowModal] = useState(false)
  // const [assetsInfo, setAssetsInfo] = useState([])
  const [assetData, setAssetData] = useState()
  const [assetCategory, setAssetCategory] = useState([])

  const { data, error } = useSWR(
    `https://zumoney.herokuapp.com/users/${'780c9676-c655-4851-bfeb-cd1c6b7b5439'}/assets`,
    fetcher,
  )

  const assetsInfo = data?.assets || []

  const addAccount = () => {
    setShowModal(true)
  }
  const handleEditAccount = (id) => {
    fetch(
      `https://zumoney.herokuapp.com/users/${'780c9676-c655-4851-bfeb-cd1c6b7b5439'}/assets/${id}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setAssetData(data)
        setShowModal(true)
      })
  }

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
          data={assetData}
          setAssetData={setAssetData}
          setShowModal={setShowModal}
          title={assetData ? '수정하기' : '추가하기'}
          okText={assetData ? '수정' : '저장'}
        />
      ) : null}
    </>
  )
}

export default AssetManagement
