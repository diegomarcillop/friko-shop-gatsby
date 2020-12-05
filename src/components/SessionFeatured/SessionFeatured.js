import { Button, Col, Row } from "antd"
import React from "react"
import CardProduct from "../CardProduct/CardProduct"

export default function SessionFeatured() {
  const products = [
    {
      id: 1,
      name: "Primer producto",
      price: "20.000",
    },
    {
      id: 2,
      name: "Segundo producto",
      price: "30.000",
    },
    {
      id: 3,
      name: "Tercer producto",
      price: "24.000",
    },
    {
      id: 4,
      name: "Tercer producto",
      price: "24.000",
    },
  ]

  return (
    <div className="sessionFeatured">
      <h2 className="sessionFeatured__title">Most Popular</h2>
      <br />
      <Row justify="space-between">
        {products.map(product => {
          return (
            <Col key={product.id} lg={5} xs={24}>
              <CardProduct data={product} />
            </Col>
          )
        })}
      </Row>
      <br />
      <br />
      <Row justify="center">
        <Col lg={6}>
          <Button block className="sessionFeatured__buttonProducts">
            Ver mas productos
          </Button>
        </Col>
      </Row>
    </div>
  )
}
