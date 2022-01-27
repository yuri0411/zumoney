import { Button, Form, Input, Modal, Select, Switch } from 'antd'
import { useEffect } from 'react'
import useSWR, { useSWRConfig } from 'swr'

const AccountModal = (props) => {
  const { visible, onCancel, data, setAssetData, title, okText, setShowModal } =
    props
  const [form] = Form.useForm()
  const { Option } = Select
  const { mutate } = useSWRConfig()

  const handleAccountItemSave = () => {
    form
      .validateFields()
      .then((value) => {
        const stringConversion = { ...value, balance: parseInt(value.balance) }
        fetch(
          `http://zumoney-server.iptime.org:8080/users/${'780c9676-c655-4851-bfeb-cd1c6b7b5439'}/assets`,
          {
            method: 'POST',
            body: JSON.stringify(stringConversion),
            headers: {
              'Content-Type': 'application/json',
            },
          },
        ).then(() => {
          setShowModal(false)
          mutate(
            `https://zumoney.herokuapp.com/users/${'780c9676-c655-4851-bfeb-cd1c6b7b5439'}/assets`,
          )
        })

        // fetch(
        //   `http://zumoney-server.iptime.org:8080/users/${'780c9676-c655-4851-bfeb-cd1c6b7b5439'}/assets/${'1'}`,
        //   {
        //     method: 'PATCH',
        //     body: JSON.stringify(value),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   },
        // ).then((res) => {
        //   setShowModal(false)
        // })
      })
      .catch((error) => {
        console.error('handleAccountItemSave', error)
      })
  }

  const handleDeleteAsset = () => {
    fetch(
      `http://zumoney-server.iptime.org:8080/users/${'780c9676-c655-4851-bfeb-cd1c6b7b5439'}/assets/${'1'}`,
      { method: 'DELETE' },
    ).then((res) => {
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
          <Button key="submit" type="primary" onClick={handleAccountItemSave}>
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
