import React from "react"
import PropTypes from "prop-types"
import { Layout } from "antd"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
const { Content } = Layout

const Container = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content className="container">
        <div>{children}</div>
      </Content>
      <Footer />
    </Layout>
  )
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
