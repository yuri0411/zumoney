import React from 'react'
import { Badge, Calendar } from 'antd'

const AccountBookCalendar = () => {
  function getListData(value) {
    console.log('value.date()', value.date())
    let listData
    switch (value.date()) {
      case 8:
        listData = [
          { color: '#108ee9', content: 'This is warning event.' },
          { color: '#108ee9', content: 'This is usual event.' },
        ]
        break
      case 10:
        listData = [
          { color: '#108ee9', content: 'This is warning event.' },
          { color: '#108ee9', content: 'This is usual event.' },
          { color: '#108ee9', content: 'This is error event.' },
        ]
        break
      case 15:
        listData = [
          { color: '#108ee9', content: 'This is warning event' },
          {
            color: '#108ee9',
            content: 'This is very long usual event。。....',
          },
          { color: '#f50', content: 'This is error event 1.' },
          { color: '#f50', content: 'This is error event 2.' },
          { color: '#f50', content: 'This is error event 3.' },
          { color: '#f50', content: 'This is error event 4.' },
        ]
        break
      default:
    }
    return listData || []
  }

  function dateCellRender(value) {
    console.log('dateCellRender', value)
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge color={item.color} text={item.content} />
          </li>
        ))}
      </ul>
    )
  }

  return <Calendar dateCellRender={dateCellRender} />
}

export default AccountBookCalendar
