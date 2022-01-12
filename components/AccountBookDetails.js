import React, { useEffect, useState } from 'react'
import { Button, List, Tabs, Tag, Tooltip } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AddHistoryModal from './AddHistoryModal'

const accountBookTab = [
  {
    name: '전체',
  },
  {
    name: '수입',
  },
  {
    name: '지출',
  },
]

const AccountBookDetails = ({ data }) => {
  const { TabPane } = Tabs
  const [showModal, setShowModal] = useState(false)
  const [historyData, setHistoryData] = useState({})

  const getFilteredClassification = (tabName) => {
    const incomeHistory = data.filter((d) => d.classification === '수입')
    const expenditureHistory = data.filter((d) => d.classification === '지출')

    if (tabName === '수입') {
      return incomeHistory
    } else if (tabName === '지출') {
      return expenditureHistory
    } else {
      return data
    }
  }

  const handleAddModal = () => {
    setShowModal(!showModal)
    setHistoryData({})
  }

  const handleEditModal = (id) => {
    setShowModal(!showModal)
    let selectedData
    data.forEach((item) => {
      if (item.id === id) {
        selectedData = item
      }
    })
    setHistoryData(selectedData)
  }
  const operations = (
    <Tooltip title="내역 추가하기">
      <Button
        type="link"
        shape="circle"
        icon={<PlusOutlined />}
        onClick={handleAddModal}
      />
    </Tooltip>
  )
  return (
    <>
      <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
        {accountBookTab.map((tab) => (
          <TabPane tab={tab.name} key={tab.name}>
            <List
              dataSource={getFilteredClassification(tab.name)}
              renderItem={(item) => (
                <List.Item
                  onClick={() => handleEditModal(item.id)}
                  className="account-book-list-item"
                >
                  <List.Item.Meta
                    avatar={
                      <Tag
                        color={
                          item.classification === '지출' ? '#f50' : '#108ee9'
                        }
                      >
                        {item.classification}
                      </Tag>
                    }
                    title={item.memo}
                    description={item.category}
                  />
                  <div style={{ fontSize: 18 }}>
                    {item.price.toLocaleString()} 원
                  </div>
                </List.Item>
              )}
            />
          </TabPane>
        ))}
      </Tabs>
      {showModal && (
        <AddHistoryModal
          visible={showModal}
          setShowModal={setShowModal}
          data={historyData}
        />
      )}
    </>
  )
}

export default AccountBookDetails
