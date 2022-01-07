import React from 'react'
import { Calendar } from 'antd'

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode)
}

const AccountBookCalendar = () => {
  return <Calendar onPanelChange={onPanelChange} />
}

export default AccountBookCalendar
