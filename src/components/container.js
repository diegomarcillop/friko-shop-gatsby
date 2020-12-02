import React from "react"
import PropTypes from "prop-types"
import { Layout } from "antd"
import Header from "./Header/Header"
const { Content } = Layout

const Container = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content
        style={{
          padding: "24px 50px",
          marginTop: 64,
          background: `#fff`,
          minHeight: "100vh", //edit this to change minimum page height
        }}
      >
        <div>{children}</div>
      </Content>
    </Layout>
  )
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
