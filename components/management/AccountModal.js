import { Button, Form, Input, Modal, Select, Switch } from 'antd'
import { useEffect } from 'react'

const AccountModal = (props) => {
  const { visible, onCancel, data, setAssetData, title, okText } = props
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

  useEffect(() => {
    return () => setAssetData(undefined)
  }, [setAssetData])

  return (
    <Modal
      visible={visible}
      title={title}
      onCancel={onCancel}
      footer={[
        <Button key="submit" type="primary" onClick={handleAccountItemSave}>
          {okText}
        </Button>,
      ]}
    >
      <Form form={form} labelCol={{ span: 4 }} labelAlign="left" colon={false}>
        <Form.Item label="메모" name="name" initialValue={data && data?.name}>
          <Input />
        </Form.Item>
        <Form.Item
          label="분류"
          name="categoryId"
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
          name="balance"
          initialValue={data && Number(data?.balance)}
        >
          <Input suffix="원" />
        </Form.Item>

        <Form.Item
          label="사용 여부"
          name="usage"
          valuePropName="checked"
          initialValue={data && data?.usage}
        >
          <Switch defaultChecked />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AccountModal
