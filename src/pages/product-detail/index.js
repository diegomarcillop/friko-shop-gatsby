import { Breadcrumb, Col, Collapse, Radio, Row } from "antd"
import Form from "antd/lib/form/Form"
import React from "react"
import CarouselPhotos from "../../components/CarouselPhotos/CarouselPhotos"
import Container from "../../components/container"

const { Panel } = Collapse

export default function ProductDetail() {
  const sizes = [
    {
      id: 1,
      name: "XL",
    },
    {
      id: 2,
      name: "M",
    },
    {
      id: 3,
      name: "S",
    },
    {
      id: 4,
      name: "L",
    },
  ]

  return (
    <Container>
      <Col className="productDetail">
        <Row justify="space-between">
          <Col lg={24} className="breadcrumbContainer">
            <Breadcrumb separator="\">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Store</Breadcrumb.Item>
              <Breadcrumb.Item>Product</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col lg={14} xs={24}>
            <CarouselPhotos />
          </Col>
          <Col lg={9} xs={24}>
            <h1 className="productDetail__title">Buso negro calavera</h1>
            <h6 className="productDetail__code">#CFOD1230</h6>
            <br />
            <h2 className="productDetail__price">
              <span>$</span>30.000
            </h2>
            <br />
            <h4 className="productDetail__label">
              Select Size • {"  "}
              <span> Size Guide</span>
            </h4>
            <Form>
              <Radio.Group buttonStyle="solid" size="large">
                {sizes &&
                  sizes.map(size => {
                    return (
                      <Radio.Button key={size.id} value={size.id}>
                        {size.name}
                      </Radio.Button>
                    )
                  })}
              </Radio.Group>
              <button className="productDetail__buttonAdd">
                Agregar al carro
              </button>
            </Form>
            <div className="productDetail__content">
              <Collapse expandIconPosition="right">
                <Panel header="Product Details">
                  <p>Un texto de product detail</p>
                </Panel>
                <Panel header="FAQ">
                  <p>Un texto de FAQ</p>
                </Panel>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}
