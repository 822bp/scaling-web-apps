//@ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Button,
    Layout
} from "antd";
import { Header, Footer, Content } from 'antd/es/layout/layout';
import "./App.css";

export default function Order() {
    let { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/product/' + id)
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error(error));
    }, []);
    console.log(data);

    const navigate = useNavigate();

    return (
        <div>
            <Layout>
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white'
                    }}
                >
                    <h3 onClick={() => navigate("/")}>Online Store</h3>
                </Header>
                <Content
                    style={{
                        padding: '0 50px',
                        marginTop: '3vh'
                    }}
                >
                    {data ? (
                    <>
                    <h3>{data[0].product_name}</h3>
                    <img src={data[0].product_image} alt="product" style={{width: "50vh", aspectRatio:"3/3", objectFit:"cover"}}></img>
                    <div style={{float: "right"}}>
                        <Button style={{width: "40vw", height: "10vh"}} onClick={() => {fetch('http://localhost:5000/api/order/' + id)
                        window.location.reload()}}>Order!</Button>
                        <br></br>
                        <span>Ordered: <b>{data[0].order_amount}</b> times</span>
                        <span style={{float: "right"}}>Price: <b>{data[0].order_price/10}</b>€</span>
                    </div>
                    </>
                    ) : <span>Loading...</span>
                    }
                </Content>
                <Footer className="footer">IU - 2023</Footer>
            </Layout>
        </div>);
};