import { Col, Row } from "antd"
import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <div className="footer">
      <Col lg={{ span: 20, offset: 1 }}>
        <Row justify="center">
          <Col lg={6} xs={10}>
            <h1>FRIKO</h1>
          </Col>
          <Col lg={6} xs={10}>
            <h4>COMPANY</h4>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </Col>

          <Col lg={6} xs={10}>
            <h4>CONNECT</h4>
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
            <h4>CONTACT</h4>
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
