import React, {useEffect} from 'react';
import {Button, Card, Col, Select, Row, Table, Typography} from 'antd';
import moment from 'moment';

const columns = [
  {
    title: 'Channel',
    dataIndex: 'channel',
    width : 50,
  },
  {
    title: 'Document Name',
    ellipsis: true,
    dataIndex: 'documentName',
    render: documentName => <a href="/#">{documentName}</a>,
    width: 200
  },
  {
    title: 'Group',
    dataIndex: 'group',
    render: group => <a href="/#">{group}</a>,
    width : 50,
    sorter: ({group: a = ''}, {group: b= ''}) => a.localeCompare(b),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width : 50,
    sorter: ({status: a = ''}, {status: b= ''}) => a.localeCompare(b),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Data Modified',
    dataIndex: 'dataModified',
    width : 80,
    render: date => moment(date, 'YYYYDDMM').format('YYYY-DD-MM'),
    sorter: (a, b) =>  moment(a.dataModified, 'YYYYDDMM') - moment(b.dataModified, 'YYYYDDMM'),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width : 50,
    sorter: ({type: a = ''}, {type: b= ''}) => a.localeCompare(b),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: address => <a href="/#">{address}</a>,
    width : 150,
  },
],
      { Title } = Typography,
      { Option } = Select;

const List = ({
                loadDocuments,
                filters,
                documents,
                loading,
                total,
              }) => {

  useEffect(() => {
      loadDocuments?.(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const onPageChange = (page, pageSize) => {
    loadDocuments(filters, page, pageSize);
  }

  return (
    <Card  style={{ margin: '0 24px 24px' }}>
      <Row>
        <Col flex="auto" >
          <Title level={5}>Dashboard</Title>
        </Col>
        <Col flex="none">
          <Select defaultValue="date" bordered={false}>
            <Option value="date">Date</Option>
          </Select>
            <Button>Reset</Button>
        </Col>
      </Row>
      <Row>
        <Table
          style={{paddingTop: 16}}
          loading={loading}
          rowKey="id"
          columns={columns}
          dataSource={documents}
          pagination={{
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} documents`,
            onChange : onPageChange,
            total
          }}
        />
      </Row>
    </Card>
  )
}

export default List;