import React, { useState } from 'react'
import { Tabs, PageHeader, Button, List } from 'antd'
import AccountModal from '../../components/AccountModal'

const typeOfList = [{ type: '입출금' }, { type: '예적금' }, { type: '현금' }]
const testData = (type) => {
  if (type === '입출금') {
    return [
      {
        title: '기업은행',
        value: 14,
      },
      {
        title: '신한은행',
        value: 1747,
      },
      {
        title: '카카오뱅크',
        value: 1620000,
      },
      {
        title: '우리은행',
        value: 170340,
      },
    ]
  } else if (type === '예적금') {
    return [
      {
        title: '주택청약(신한)',
        value: 2807504,
      },
      {
        title: '새마을금고',
        value: 2000000,
      },
    ]
  } else if (type === '현금') {
    return [
      {
        title: '현금',
        value: 5000,
      },
    ]
  }
}

const AssetManagement = () => {
  const { TabPane } = Tabs
  const [showModal, setShowModal] = useState(false)
  const addAccount = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <Tabs tabPosition="left">
        <TabPane tab="계좌/현금" key="1">
          <PageHeader
            className="site-page-header"
            title="계좌/현금"
            backIcon={false}
            extra={
              <Button key="1" type="link" onClick={addAccount}>
                추가
              </Button>
            }
          />
          {typeOfList.map((list) => (
            <List
              header={
                <div>
                  {list.type} <span>0 원</span>
                </div>
              }
              size="small"
              dataSource={testData(list.type)}
              key={list.type}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={<div>{item.title}</div>} />
                  <div>{item.value.toLocaleString()} 원</div>
                </List.Item>
              )}
            />
          ))}
        </TabPane>
        <TabPane tab="카드" key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab="대출" key="3">
          Content of Tab 3
        </TabPane>
        <TabPane tab="카테고리" key="4">
          Content of Tab 3
        </TabPane>
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
