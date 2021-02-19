import { Col, Row } from "antd"
import { Link } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <div className="footer">
      <Col lg={{ span: 20, offset: 2 }} className="footer__content">
        <Row justify="center">
          <Col lg={{span: 4, offset: 1}} xs={10}>
            <h1>FRIKO</h1>
          </Col>
          <Col lg={6} xs={10}>
            <h4>{t("footer.company")}</h4>
            <ul>
              <li>
                <Link to="/about">{t("global.about")}</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </Col>

          <Col lg={6} xs={10}>
            <h4>{t("footer.connect")}</h4>
            <ul>
              <li>
                <Link to="http://facebook.com/frikoshop" target="_blank">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="http://twitter.com/frikoshop" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="http://instagram.com/frikoshop" target="_blank">
                  Instagram
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg={6} xs={10}>
            <h4>{t("footer.contact")}</h4>
            <ul>
              <li>frikohelp@friko.com</li>
              <li>+57 3102345531</li>
            </ul>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
