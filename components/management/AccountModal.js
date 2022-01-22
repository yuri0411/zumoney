import { Button, Form, Input, Modal, Select, Switch } from 'antd'
import { useEffect, useState } from 'react'

const AccountModal = (props) => {
  const { visible, onCancel, data } = props
  // const { name, balance, usage } = data
  console.log('data', data)
  const [form] = Form.useForm()
  const { Option } = Select
  const handleAccountItemSave = () => {
    form
      .validateFields()
      .then((value) => {
        console.log('handleAccountItemSave', value)
      })
      .catch((error) => {
        console.error('handleAccountItemSave', error)
      })
  }
  useEffect(() => {}, [data])
  return (
    <Modal
      visible={visible}
      title={'계좌/현금 추가하기'}
      onCancel={onCancel}
      footer={[
        <Button key="submit" type="primary" onClick={handleAccountItemSave}>
          저장
        </Button>,
      ]}
    >
      <Form form={form} labelCol={{ span: 4 }} labelAlign="left" colon={false}>
        <Form.Item label="메모" name="name" initialValue={data && data?.name}>
          <Input />
        </Form.Item>
        <Form.Item
          label="분류"
          name="category"
          initialValue={data && data?.categoryId}
        >
          <Select allowClear>
            <Option value={9}>입출금</Option>
            <Option value={10}>예적금</Option>
            <Option value={11}>현금</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="금액"
          name="price"
          initialValue={data && Number(data?.balance)}
        >
          <Input suffix="원" />
        </Form.Item>

        <Form.Item
          label="사용 여부"
          name="usage"
          initialValue={data && data?.usage}
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AccountModal
