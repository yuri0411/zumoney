import React from 'react'
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

const AddHistoryModal = (props) => {
  const { visible, setShowModal } = props

  const dateFormat = 'YYYY/MM/DD'

  const handleHistorySave = () => {
    console.log('내역 저장')
  }

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

  function onChange(value) {
    console.log(value)
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
        <Form.Item label="분류">
          <Radio.Group defaultValue="income">
            <Radio.Button value="income">수입</Radio.Button>
            <Radio.Button value="expenditure">지출</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="금액">
          <Input suffix="원" />
        </Form.Item>
        <Form.Item label="카테고리">
          <Cascader
            defaultValue={['주수입', '급여']}
            options={options}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item label="입금 통장">
          <Select defaultValue="신한은행" allowClear>
            <Option value="신한은행">신한은행</Option>
            <Option value="우리은행">우리은행</Option>
            <Option value="카카오뱅크">카카오뱅크</Option>
            <Option value="기업은행">기업은행</Option>
          </Select>
        </Form.Item>
        <Form.Item label="날짜">
          <DatePicker
            defaultValue={dayjs('2015/01/01', dateFormat)}
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item label="메모">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddHistoryModal
