import React, { useState } from 'react';
import { Layout, Checkbox, Space, Typography, Collapse } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UpOutlined,
  DownOutlined
} from '@ant-design/icons';
import {groups, statusFiltersOptions} from '../consts';

const { Sider } = Layout,
      { Panel } = Collapse,
      {Group} = Checkbox,
      { Title } = Typography;

export default function DocumentsFilter({
  filterChange
                                        }) {
  const [ collapsed, setCollapsed ] = useState(false),
    groupFilterChange = (group) => (values) => filterChange(group, values);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      collapsedWidth={0}
      theme="light"
      trigger={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
      zeroWidthTriggerStyle={{
        bottom: 0,
        left: 0,
        width: 41,
        top : 'initial'
      }}
    >
      <Title className="filter-title" level={5}>Filters</Title>
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon = { ({isActive}) => isActive ? <UpOutlined /> : <DownOutlined /> }
      >
        <Panel header="Address" key={groups.ADDRESS}>
        </Panel>
        <Panel header="Date" key={groups.DATE}>
        </Panel>
        <Panel header="Status" key={groups.STATUS}>
          <Group style={{width: '100%'}} onChange={groupFilterChange(groups.STATUS)}>
            <Space direction="vertical" align="center" style={{width: '100%'}}>
              {statusFiltersOptions.map(({value, text}) => <Checkbox style={{width: 100}} value={value} key={value}>{text}</Checkbox>)}
            </Space>
          </Group>
        </Panel>
        <Panel header="Group" key={groups.GROUP}>
        </Panel>
        <Panel header="Date Range" key={groups.DATE_RANGE}>
        </Panel>
      </Collapse>
    </Sider>
  )
}