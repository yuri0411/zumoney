import React, { useState } from 'react'
import { Button, Col, Row, Statistic } from 'antd'
import AccountBookDetails from '../../components/AccountBookDetails'
import AccountBookCalendar from '../../components/AccountBookCalendar'

const testData = [
  {
    title: 'Ant Design Title 1',
    tag: '지출',
    category: '부수입/이자',
    price: 205000,
  },
  {
    title: 'Ant Design Title 2',
    tag: '지출',
    category: '지출/식비',
    price: 53800,
  },
  {
    title: 'Ant Design Title 3',
    tag: '수입',
    category: '부수입/이자',
    price: 2731000,
  },
  {
    title: 'Ant Design Title 4',
    tag: '수입',
    category: '부수입/이자',
    price: 1251,
  },
  {
    title: 'Ant Design Title 2',
    tag: '지출',
    category: '지출/경조사',
    price: 9000,
  },
  {
    title: 'Ant Design Title 2',
    tag: '지출',
    category: '지출/의류',
    price: 121000,
  },
]

const AccountBook = () => {
  const [toggleBtn, setToggleBtn] = useState(false)

  const getTotalAmount = (tagName) => {
    let totalAmount = 0
    testData.forEach((data) => {
      if (data.tag === tagName) {
        totalAmount += data.price
      }
    })
    return totalAmount
  }

  return (
    <>
      <Row
        gutter={[16, 24]}
        align="middle"
        style={{ background: '#F0F0F0', padding: 20, borderRadius: 5 }}
      >
        <Col span={4}>1월</Col>
        <Col span={8}>
          <Statistic title="총 지출" value={getTotalAmount('지출')} />
        </Col>
        <Col span={8}>
          <Statistic title="총 수입" value={getTotalAmount('수입')} />
        </Col>
        <Col span={4}>
          <Button onClick={() => setToggleBtn(!toggleBtn)}>
            {toggleBtn ? '상세보기' : '달력보기'}
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 24]}>
        <Col span={24}>
          {toggleBtn ? (
            <AccountBookCalendar data={testData} />
          ) : (
            <AccountBookDetails data={testData} />
          )}
        </Col>
      </Row>
    </>
  )
}

export default AccountBook
