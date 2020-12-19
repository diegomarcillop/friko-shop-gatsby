import { Button, Col, Row } from "antd"
import React from "react"
import CardProduct from "../CardProduct/CardProduct"

export default function SessionFeatured() {
  const products = [
    {
      id: 1,
      name: "Primer producto",
      price: "20.000",
      image:
        "https://images.pexels.com/photos/3204411/pexels-photo-3204411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      name: "Gorro negro ASA",
      price: "30.000",
      image:
        "https://images.pexels.com/photos/3817723/pexels-photo-3817723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      name: "Saco Dark",
      price: "99.000",
      image:
        "https://images.unsplash.com/photo-1553889989-b2d33cdea871?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 4,
      name: "Chaqueta Xlima",
      price: "70.000",
      image:
        "https://images.unsplash.com/photo-1519733612332-6ac41c944318?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=362&q=80",
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
