import React, { useEffect, useState } from 'react'
import {
  Form,
  Input,
  Modal,
  Button,
  Radio,
  Cascader,
  DatePicker,
  Select,
} from 'antd'
import dayjs from 'dayjs'

const { Option } = Select

const options = (type) => {
  if (type === 'income') {
    return [
      {
        value: '주수입',
        label: '주수입',
        children: [
          {
            value: '급여',
            label: '급여',
          },
        ],
      },
      {
        value: '부수입',
        label: '부수입',
        children: [
          {
            value: '이자',
            label: '이자',
          },
          {
            value: '보험 청구',
            label: '보험 청구',
          },
          {
            value: '기타',
            label: '기타',
          },
        ],
      },
    ]
  } else if (type === 'expenditure') {
    return [
      {
        value: '식비',
        label: '식비',
        children: [
          {
            value: '점심',
            label: '점심',
          },
        ],
      },
      {
        value: '경조사',
        label: '경조사',
        children: [
          {
            value: '선물',
            label: '선물',
          },
          {
            value: '축의금',
            label: '축의금',
          },
          {
            value: '부의금',
            label: '부의금',
          },
        ],
      },
    ]
  }
  return null
}

const AddHistoryModal = (props) => {
  const { visible, setShowModal, data } = props
  const { memo, classification, category, price, date, payment, bank } = data
  const [form] = Form.useForm()
  const [classificationValue, setClassificationValue] = useState()
  const dateFormat = 'YYYY/MM/DD'

  const handleHistorySave = () => {
    const allData = form.getFieldsValue()
    console.log('allData', allData)
  }
  const handleChange = (e) => {
    const value = e.target.value
    setClassificationValue(value)
  }
  const getFormItemByType = (type) => {
    if (type === '수입') {
      return (
        <Form.Item label="입금 통장">
          <Select allowClear defaultValue={bank}>
            <Option value="신한은행">신한은행</Option>
            <Option value="우리은행">우리은행</Option>
            <Option value="카카오뱅크">카카오뱅크</Option>
            <Option value="기업은행">기업은행</Option>
          </Select>
        </Form.Item>
      )
    } else if (type === '지출') {
      return (
        <Form.Item label="결제 수단">
          <Select allowClear defaultValue={payment}>
            <Option value="신한카드">신한카드</Option>
            <Option value="우리카드">우리카드</Option>
            <Option value="카카오 체크카드">카카오 체크카드</Option>
            <Option value="기업카드">기업카드</Option>
          </Select>
        </Form.Item>
      )
    }
    return null
  }
  useEffect(() => {
    setClassificationValue(classification)
  }, [classification])
  return (
    <Modal
      visible={visible}
      title="내역 추가하기"
      onCancel={() => setShowModal(false)}
      footer={[
        <Button key="submit" type="primary" onClick={handleHistorySave}>
          저장
        </Button>,
      ]}
    >
      <Form form={form} labelCol={{ span: 4 }} labelAlign="left" colon={false}>
        <Form.Item
          label="분류"
          name="classification"
          initialValue={classification}
        >
          <Radio.Group onChange={handleChange}>
            <Radio.Button value="수입">수입</Radio.Button>
            <Radio.Button value="지출">지출</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="금액" name="price" initialValue={price}>
          <Input suffix="원" />
        </Form.Item>
        <Form.Item label="카테고리" name="category" initialValue={category}>
          <Cascader options={options(classificationValue)} />
        </Form.Item>
        {getFormItemByType(classificationValue)}
        <Form.Item
          label="날짜"
          name="date"
          initialValue={dayjs('2015/01/01', dateFormat)}
        >
          <DatePicker format={dateFormat} />
        </Form.Item>
        <Form.Item label="메모" name="memo" initialValue={memo}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddHistoryModal
