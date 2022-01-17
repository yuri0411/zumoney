import React from 'react'
import { List } from 'antd'

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

const AccountManagement = () => {
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
    </>
  )
}

export default AccountManagement
