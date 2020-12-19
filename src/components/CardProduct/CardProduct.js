import { Button, Card, Col, Row } from "antd"
import React from "react"
import Image from "../Image/Image"
import { HeartOutlined, PlusOutlined } from "@ant-design/icons"

export default function CardProduct({ data }) {
  return (
    <Card className="cardProduct">
      <Image src={data.image} name="product_1" className="cardProduct__image" />
      <h2 className="cardProduct__name">{data.name}</h2>

      <Row justify="space-between" className="cardProduct__content">
        <Col lg={12} xs={12}>
          <h4 className="cardProduct__price">
            <strong>$</strong>
            {data.price}
          </h4>
        </Col>
        <Col lg={12} xs={12}>
          <Row justify="end">
            <Col lg={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 2 }}>
              <Button
                size="large"
                block
                icon={<HeartOutlined />}
                className="cardProduct__buttonHeart"
              />
            </Col>
            <Col lg={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 2 }}>
              <Button
                className="cardProduct__buttonPlus"
                block
                size="large"
                icon={<PlusOutlined />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}
