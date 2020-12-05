import { Col, Row } from "antd"
import React, { useState } from "react"
import Image from "../Image/Image"

export default function CarouselPhotos() {
  const [selected, setSelected] = useState(0)

  const images = [
    {
      id: 1,
      name: "product_1",
    },
    {
      id: 2,
      name: "product_3",
    },
    {
      id: 3,
      name: "product_1",
    },
    {
      id: 4,
      name: "product_2",
    },
  ]

  return (
    <Row className="carouselPhotos" justify="space-between">
      <Col lg={3}>
        <Row className="elementsImageContainer" justify="space-between">
          {images.map((image, index) => {
            return (
              <Col lg={24} key={image.id} xs={4}>
                <Image
                  onClick={() => setSelected(index)}
                  name={image.name}
                  className="elementsImageContainer__elementImage"
                />
              </Col>
            )
          })}
        </Row>
      </Col>
      <Col lg={20}>
        <Image
          name={images[selected].name}
          className="carouselPhotos__portada"
        />
      </Col>
    </Row>
  )
}
