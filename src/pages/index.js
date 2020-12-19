import React from "react"
import Container from "../components/Container/Container"
import SEO from "../components/seo"
import SessionClients from "../components/SessionClients/SessionClients"
import SessionFeatured from "../components/SessionFeatured/SessionFeatured"
import SessionFeatures from "../components/SessionFeatures/SessionFeatures"
import SessionPresentation from "../components/SessionPresentation/SessionPresentation"
import "../sass/index.scss"

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <SessionPresentation />
    <SessionClients />
    <SessionFeatured />
    <SessionFeatures />
  </Container>
)

export default IndexPage
