//@ts-nocheck
import React, { useState, useEffect } from 'react';
import './App.css';
import { Card, Col, Row, Layout, Button } from 'antd';
import { Header, Footer, Content } from 'antd/es/layout/layout';

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error(error));
    }, []);
    console.log(data);
    return (
        <div className="App">
            <Layout>
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white'
                    }}
                >
                    <h3>Online Store</h3>
                </Header>
                <Content
                    style={{
                        padding: '0 50px',
                        marginTop: '3vh'
                    }}
                >
                    <Row gutter={16}>
                        {data ? data.map((m) => 
                            <Col span={8}>
                            <Card title={m.product_name} bordered={false} 
                            cover={<img alt="example" src={m.product_image} className="card-image" />} 
                            style={{marginTop: "3vh"}}
                            actions={[<Button href={"/order/" + m.id}>Buy - {m.order_price/10}€</Button>]}>
                            </Card>
                        </Col>
                        ): <span>Loading...</span>}
                    </Row>
                </Content>
                <Footer className='footer'>IU - 2023</Footer>
            </Layout>
        </div>
    );
}