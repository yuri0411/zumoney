import React from 'react'
import { Form, Input, Modal, Button } from 'antd'

const AddHistoryModal = (props) => {
  const { visible, setShowModal } = props

  const handleHistorySave = () => {
    console.log('내역 저장')
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
        <Form.Item label="분류" name="size">
          <Input />
        </Form.Item>
        <Form.Item label="금액" name="size">
          <Input />
        </Form.Item>
        <Form.Item label="카테고리" name="size">
          <Input />
        </Form.Item>
        <Form.Item label="결제 수단" name="size">
          <Input />
        </Form.Item>
        <Form.Item label="날짜" name="size">
          <Input />
        </Form.Item>
        <Form.Item label="메모" name="size">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddHistoryModal
