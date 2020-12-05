import { Col, Row } from "antd"
import React from "react"
import Image from "../Image/Image"

export default function SessionClients() {
  const clients = [
    {
      name: "client_1",
    },
    {
      name: "client_2",
    },
    {
      name: "client_3",
    },
    {
      name: "client_4",
    },
  ]

  return (
    <Row className="sessionClients">
      {clients.map((client, index) => {
        return (
          <Col lg={6} key={index}>
            <Image name={client.name} className="sessionClients__imageClient" />
          </Col>
        )
      })}
      <div className="sessionClients__separator" />
    </Row>
  )
}
