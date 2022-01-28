import { Button, Form, Input, Modal, Select, Switch } from 'antd'
import { useEffect } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import api from '../../constants/api'

const userId = 'e6a94da5-4845-4478-b3c2-552904308aba'

const AccountModal = (props) => {
  const {
    visible,
    onCancel,
    data,
    setAssetData,
    title,
    okText,
    setShowModal,
    handleAccountItemSave,
  } = props
  const [form] = Form.useForm()
  const { Option } = Select

  const handleDeleteAsset = () => {
    fetch(`${api.url}/users/${userId}/assets/${'1'}`, {
      method: 'DELETE',
    }).then((res) => {
      console.log('삭제 되었습니다.')
      setShowModal(false)
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
        <>
          {data && (
            <Button key="delete" danger onClick={handleDeleteAsset}>
              삭제
            </Button>
          )}
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              form.validateFields().then((value) => {
                handleAccountItemSave(value, data?.id)
              })
            }}
          >
            {okText}
          </Button>
        </>,
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
