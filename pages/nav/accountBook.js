import React, { useState } from 'react'
import { Button, Col, DatePicker, Row, Statistic } from 'antd'
import AccountBookDetails from '../../components/AccountBookDetails'
import AccountBookCalendar from '../../components/AccountBookCalendar'
import Seo from '../../components/Seo'

const testData = [
  {
    id: 1,
    memo: '수정삼성메디컬센터',
    classification: '지출',
    category: ['지출', '의료비'],
    price: 205000,
    payment: '신한카드',
    date: '',
  },
  {
    id: 2,
    memo: '그릇',
    classification: '지출',
    category: ['지출', '생활용품'],
    price: 53800,
    payment: '신한카드',
    date: '',
  },
  {
    id: 3,
    memo: '12월 급여',
    classification: '수입',
    category: ['부수입', '급여'],
    price: 2731000,
    bank: '신한은행',
    date: '',
  },
  {
    id: 4,
    memo: '신한은행 이자',
    classification: '수입',
    category: ['부수입', '이자'],
    price: 1251,
    bank: '신한은행',
    date: '',
  },
  {
    id: 5,
    memo: '약국',
    classification: '지출',
    category: ['지출', '의료비'],
    price: 9000,
    payment: '카카오 체크카드',
    date: '',
  },
  {
    id: 6,
    memo: '가디건',
    classification: '지출',
    category: ['지출', '의류'],
    price: 121000,
    payment: '신한카드',
    date: '',
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
      <Seo title="가계부" />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row
            align="middle"
            style={{ background: '#F0F0F0', padding: 20, borderRadius: 5 }}
          >
            <Col span={8}>
              <Statistic title="총 지출" value={getTotalAmount('지출')} />
            </Col>
            <Col span={8}>
              <Statistic title="총 수입" value={getTotalAmount('수입')} />
            </Col>
            <Col span={4}>
              <DatePicker picker="month" bordered={false} />
            </Col>
            <Col span={4}>
              <Button onClick={() => setToggleBtn(!toggleBtn)}>
                {toggleBtn ? '상세보기' : '달력보기'}
              </Button>
            </Col>
          </Row>
        </Col>
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
