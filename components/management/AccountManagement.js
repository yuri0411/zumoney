import React, { useEffect, useState } from 'react'
import { List } from 'antd'

const typeOfList = [
  { id: 4, type: '입출금' },
  { type: '예적금' },
  { type: '현금' },
]

const AccountManagement = (props) => {
  const { category, handleEditAccount, assetsData } = props
  const [accountCategory, setAccountCategory] = useState([])

  const getFilteredAssets = (categoryId, data) => {
    let filteredData = []

    data.forEach((d) => {
      if (categoryId === d?.categoryId) {
        filteredData.push(d)
      }
    })
    return filteredData
  }

  useEffect(() => {
    fetch(`https://zumoney.herokuapp.com/categories/${4}/children`)
      .then((res) => res.json())
      .then((category) => setAccountCategory(category))
  }, [])
  return (
    <>
      {accountCategory.map((list) => (
        <List
          header={
            <div>
              {list.name} <span>0 원</span>
            </div>
          }
          size="small"
          dataSource={getFilteredAssets(list.id, assetsData)}
          key={list.name}
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
