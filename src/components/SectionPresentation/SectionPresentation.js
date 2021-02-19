import { Button, Col, Row } from "antd"
import Image from "../Image/Image"
import React from "react"
import { CaretRightOutlined } from "@ant-design/icons"
import { useTranslation } from "react-i18next"

export default function SessionPresentation() {
  const { t } = useTranslation()

  return (
    <Row className="sessionPresentation">
      <Col lg={12} className="sessionPresentation__content">
        <h1 className="title">{t("global.title")}</h1>
        <p className="description">{t("global.description")}</p>
        <Row>
          <Col lg={12} xs={12}>
            <Button className="sessionPresentation__buttonShop">
              {t("button.show_shop")}
            </Button>
          </Col>
          <Col lg={12} xs={12}>
            <Row className="viewContainer" justify="start">
              <Col lg={8} xs={8}>
                <Button
                  className="sessionPresentation__buttonView"
                  icon={<CaretRightOutlined className="iconButton" />}
                />
              </Col>
              <Col lg={10} xs={8} style={{ paddingLeft: 4 }}>
                <h4>{t("button.view_commercial")}</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col lg={12} className="sessionPresentation__containerImage">
        <Image className="image-portada" name="portada" />
      </Col>
    </Row>
  )
}
