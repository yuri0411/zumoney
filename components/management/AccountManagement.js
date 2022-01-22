import React from 'react'
import { List } from 'antd'

const typeOfList = [
  { id: 4, type: '입출금' },
  { type: '예적금' },
  { type: '현금' },
]

const AccountManagement = (props) => {
  const { category, handleEditAccount, assetsData } = props
  console.log('assetsData', assetsData)
  const getFilteredAssets = (type, assetsData) => {}
  return (
    <>
      {typeOfList.map((list) => (
        <List
          header={
            <div>
              {list.type} <span>0 원</span>
            </div>
          }
          size="small"
          dataSource={getFilteredAssets(list.type, assetsData)}
          key={list.type}
          renderItem={(asset) => (
            <List.Item onClick={() => handleEditAccount(asset.id)}>
              <List.Item.Meta title={<div>{asset.name}</div>} />
              <div>{Number(asset.balance).toLocaleString()} 원</div>
            </List.Item>
          )}
        />
      ))}
    </>
  )
}

export default AccountManagement
