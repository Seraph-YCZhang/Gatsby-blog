import { graphql } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const style = {
  margin:'3rem 3rem 0 3rem'
}
const Blog = props => {
  return (
    <Layout>
    <Head title={props.data.markdownRemark.frontmatter.title} />
      <div style={style}>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
      </div>
    </Layout>
  )
}

export default Blog
