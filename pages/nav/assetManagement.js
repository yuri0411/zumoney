import React, { useEffect, useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { Button, PageHeader, Tabs } from 'antd'
import AccountModal from '../../components/management/AccountModal'
import AccountManagement from '../../components/management/AccountManagement'
import Seo from '../../components/Seo'
import api from '../../constants/api'

const fetcher = (url) => fetch(url).then((r) => r.json())

const userId = 'e6a94da5-4845-4478-b3c2-552904308aba'
const AssetManagement = () => {
  const { TabPane } = Tabs
  const [showModal, setShowModal] = useState(false)
  const [assetData, setAssetData] = useState()
  const [assetCategory, setAssetCategory] = useState([])
  const { mutate } = useSWRConfig()

  const { data, error } = useSWR(`${api.url}/users/${userId}/assets`, fetcher)

  const assetsInfo = data?.assets || []

  const addAccount = () => {
    setShowModal(true)
  }
  const handleEditAccount = (id) => {
    fetch(`${api.url}/users/${userId}/assets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssetData(data)
        setShowModal(true)
      })
  }

  const handleAccountItemSave = async (value, id) => {
    const stringConversion = { ...value, balance: parseInt(value.balance) }

    try {
      if (assetData) {
        await fetch(`${api.url}/users/${userId}/assets/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(stringConversion),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      } else {
        await fetch(`${api.url}/users/${userId}/assets`, {
          method: 'POST',
          body: JSON.stringify(stringConversion),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      }
      mutate(`${api.url}/users/${userId}/assets`)
      setShowModal(false)
    } catch (error) {
      console.error('handleAccountItemSave', error)
    }
  }

  useEffect(() => {
    fetch(`${api.url}/categories/${3}/children`)
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
          handleAccountItemSave={handleAccountItemSave}
        />
      ) : null}
    </>
  )
}

export default AssetManagement
