import React from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import bigStar from "../assets/Star 1.png"

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Iphone 12 pro',
        price: 300,
        rating: 5,
        img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fjmart.kz%2Fproducts%2F630218%2FP&psig=AOvVaw05idtuI_U5iI4V3xjkWPL-&ust=1667729604848000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjJiojnlvsCFQAAAAAdAAAAABAH`
    }

    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12мп'},
        {id: 3, title: 'Процессор', description: 'apple a15'},
        {id: 4, title: 'Кол-во ядер', description: '6'},
        {id: 5, title: 'Аккумулятор', description: '4000mAh'},

    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: "cover",
                                fontSize: 64
                            }}
                            className="d-flex align-items-center justify-content-center"
                        >
                            {device.rating}
                        </div>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}
                    >
                        <h3>{device.price}$</h3>
                        <Button variant={"outline-secondary"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Характеристики</h2>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    );
};

export default DevicePage;