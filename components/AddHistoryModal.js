import React, { useEffect } from 'react'
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

const options = [
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

const AddHistoryModal = (props) => {
  const { visible, setShowModal } = props
  const dateFormat = 'YYYY/MM/DD'

  const handleHistorySave = () => {
    console.log('내역 저장')
  }

  const handleChangeHistory = (label) => (value) => {
    console.log(label, value)
  }

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
      <Form labelCol={{ span: 4 }} labelAlign="left" colon={false}>
        <Form.Item label="분류" name="classification" initialValue="income">
          <Radio.Group>
            <Radio.Button value="income">수입</Radio.Button>
            <Radio.Button value="expenditure">지출</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="금액" name="price">
          <Input suffix="원" />
        </Form.Item>
        <Form.Item
          label="카테고리"
          name="category"
          initialValue={['주수입', '급여']}
        >
          <Cascader options={options} />
        </Form.Item>
        <Form.Item label="입금 통장" initialValue="신한은행">
          <Select allowClear>
            <Option value="신한은행">신한은행</Option>
            <Option value="우리은행">우리은행</Option>
            <Option value="카카오뱅크">카카오뱅크</Option>
            <Option value="기업은행">기업은행</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="날짜"
          name="date"
          initialValue={dayjs('2015/01/01', dateFormat)}
        >
          <DatePicker format={dateFormat} />
        </Form.Item>
        <Form.Item label="메모" name="memo">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddHistoryModal
