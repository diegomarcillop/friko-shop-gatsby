import { Button, Col, Row } from "antd"
import Image from "../Image/Image"
import React from "react"
import { CaretRightOutlined } from "@ant-design/icons"

export default function SessionPresentation() {
  return (
    <Row className="sessionPresentation">
      <Col lg={12} className="sessionPresentation__content">
        <h1 className="title">La ropa mas cool del mundo entero!</h1>
        <p className="description">
          Esta es una ropa muy cool que no encontraras en otras tiendas de moda,
          podras encontrar todas tus marcas favoritas.
        </p>
        <Row>
          <Col lg={12} xs={12}>
            <Button className="sessionPresentation__buttonShop">
              Shop now
            </Button>
          </Col>
          <Col lg={12} xs={12}>
            <Row className="viewContainer">
              <Col lg={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                <Button
                  className="sessionPresentation__buttonView"
                  icon={<CaretRightOutlined className="iconButton" />}
                />
              </Col>
              <Col lg={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                <h4>
                  View <br />
                  lookbook
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col lg={12}>
        <Image className="sessionPresentation__image" name="portada" />
      </Col>
    </Row>
  )
}
