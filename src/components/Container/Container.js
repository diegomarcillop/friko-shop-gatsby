import React from "react"
import PropTypes from "prop-types"
import { Layout } from "antd"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
const { Content } = Layout

const Container = ({ children }) => {
  return (
    <div>
      <Header />
      <Content className="container">
        <div>{children}</div>
      </Content>
      <Footer />
    </div>
  )
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
