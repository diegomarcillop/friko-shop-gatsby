import React from "react"
import Container from "../components/Container/Container"
import SEO from "../components/seo"
import SessionClients from "../components/SectionClients/SectionClients"
import SessionFeatured from "../components/SectionFeatured/SectionFeatured"
import SessionFeatures from "../components/SectionFeatures/SectionFeatures"
import SessionPresentation from "../components/SectionPresentation/SectionPresentation"
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
