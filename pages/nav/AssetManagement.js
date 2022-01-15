import React from 'react';
import { Tabs, PageHeader, Button, List } from 'antd'

const AssetManagement = () => {
  const { TabPane } = Tabs;

  return (
    <Tabs tabPosition="left">
      <TabPane tab="계좌/현금" key="1">
        <PageHeader
          className="site-page-header"
          title="계좌/현금"
          backIcon={false}
          extra={
            <Button key="1" type="link">
              추가
            </Button>
          }
        />
        <List
          header={<div>입출금 <span>0 원</span></div>}
          size="small"
          renderItem={item => (
            <List.Item>

            </List.Item>
          )}
        />
      </TabPane>
      <TabPane tab="카드" key="2">
        Content of Tab 2
      </TabPane>
      <TabPane tab="대출" key="3">
        Content of Tab 3
      </TabPane>
      <TabPane tab="카테고리" key="4">
        Content of Tab 3
      </TabPane>
    </Tabs>
    );
};

export default AssetManagement;