import { Col, Row } from "antd"
import React from "react"
import Image from "../Image/Image"

export default function SessionFeatures() {
  const features = [
    {
      id: 1,
      name: "Compra segura",
      description:
        "Duis elit eiusmod elit eiusmod non enim duis non enim duis.",
      image: require("../../assets/img/pago.svg"),
    },
    {
      id: 2,
      name: "Envio gratis",
      description:
        "Duis elit elit eiusmod non enim duis eiusmod non enim duis.",
      image: require("../../assets/img/mensaje.svg"),
    },
    {
      id: 3,
      name: "Devoluciones",
      description:
        "Duis elit elit eiusmod non enim duis eiusmod non enim duis.",
      image: require("../../assets/img/devolucion.svg"),
    },
  ]

  return (
    <Col className="sessionFeatures" lg={{ span: 22, offset: 1 }}>
      <h2 className="sessionFeatures__title">Proceso confiable</h2>
      <Row justify="space-between">
        {features.map(feature => {
          return (
            <Col key={feature.id} lg={6} xs={{ span: 20, offset: 2 }}>
              <div className="sessionFeatures__card">
                <div className="containerImage">
                  <Image src={feature.image} className="imageFeature" />
                </div>
                <h3 className="titleFeature">{feature.name}</h3>
                <p>{feature.description}</p>
              </div>
            </Col>
          )
        })}
      </Row>
    </Col>
  )
}
