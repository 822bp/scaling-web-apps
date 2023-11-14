import React from 'react';
import './App.css';

import { Card, Col, Row, Layout } from 'antd';
import { Header, Footer, Content } from 'antd/es/layout/layout';

function App() {
  return (
    <div className="App">
      <Layout>
      <Header style={{
          display: 'flex',
          alignItems: 'center',
          color: "white"
        }}>
        <h3>Online Store</h3>
      </Header>
      <Content style={{
          padding: '0 50px',
          marginTop: "3vh"
        }}>
        <Row gutter={16}>
          <Col span={8}>
          <Card title="Card title" bordered={false}>
        Card content
      </Card>
          </Col>
          <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
      </Col>
        </Row>
      </Content>
      <Footer style={{
          textAlign: 'center',
        }}>
        IU - 2023
      </Footer>
      </Layout>
    </div>
  );
}

export default App;
