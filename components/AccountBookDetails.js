import React from 'react'
import { Button, List, Tabs, Tag } from 'antd'

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
  const operations = <Button>추가</Button>

  const getFilteredClassification = (tabName) => {
    const incomeHistory = data.filter((d) => d.tag === '수입')
    const expenditureHistory = data.filter((d) => d.tag === '지출')

    if (tabName === '수입') {
      return incomeHistory
    } else if (tabName === '지출') {
      return expenditureHistory
    } else {
      return data
    }
  }

  return (
    <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
      {accountBookTab.map((tab) => (
        <TabPane tab={tab.name} key={tab.name}>
          <List
            dataSource={getFilteredClassification(tab.name)}
            renderItem={(item) => (
              <List.Item onClick={() => console.log('리스트 클릭했을때')}>
                <List.Item.Meta
                  avatar={<Tag>{item.tag}</Tag>}
                  title={item.title}
                  description={item.category}
                />
                <div>{item.price.toLocaleString()} 원</div>
              </List.Item>
            )}
          />
        </TabPane>
      ))}
    </Tabs>
  )
}

export default AccountBookDetails
