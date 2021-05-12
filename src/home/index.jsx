import React from 'react';
import {Card, Space} from 'antd';
import {Link} from 'react-router-dom';
import routes from '../routes';

const Home = () =>(
        <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', paddingTop: '100px'}}>
          <Card title="HOME" style={{ width: 500 }}>
            <Link to={routes.DOCUMENTS}>Documents</Link>
          </Card>
        </Space>
);

export default Home;