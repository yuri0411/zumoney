import React from 'react'
import { DatePicker, Form, Input, Modal, Select, Switch } from 'antd'
import dayjs from 'dayjs'

const AccountModal = (props) => {
  const { visible, onCancel } = props
  const [form] = Form.useForm()
  const { Option } = Select
  const dateFormat = 'YYYY/MM/DD'

  const handleAccountItemSave = () => {
    console.log('저장')
  }
  return (
    <Modal
      visible={visible}
      title={'계좌/현금 추가하기'}
      onCancel={onCancel}
      onOk={handleAccountItemSave}
    >
      <Form form={form} labelCol={{ span: 4 }} labelAlign="left" colon={false}>
        <Form.Item label="메모" name="memo">
          <Input />
        </Form.Item>
        <Form.Item label="입금 통장">
          <Select allowClear defaultValue={'입출금'}>
            <Option value="입출금">입출금</Option>
            <Option value="예적금">예적금</Option>
            <Option value="현금">현금</Option>
          </Select>
        </Form.Item>
        <Form.Item label="금액" name="price" initialValue={0}>
          <Input suffix="원" />
        </Form.Item>
        <Form.Item
          label="날짜"
          name="date"
          initialValue={dayjs('2015/01/01', dateFormat)}
        >
          <DatePicker format={dateFormat} />
        </Form.Item>
        <Form.Item label="사용 여부" name="enable" initialValue={true}>
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AccountModal
