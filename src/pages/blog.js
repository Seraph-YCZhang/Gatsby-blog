import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import FullDiv from "../components/full-width-div"
import Head from "../components/head"
import Layout from "../components/layout"
import styles from "./blog.module.scss"
export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <div className={styles.container}>
        <h1>Blogs</h1>
        <FullDiv className={styles.postList}>
          <ul>
            {data.allMarkdownRemark.edges.map(tmp => (
              <li key={tmp.node.id}>
                <Link to={`/blog/${tmp.node.fields.slug}`}>
                  <h2>{tmp.node.frontmatter.title}</h2>

                  <p>{tmp.node.frontmatter.date}</p>
                </Link>
              </li>
            ))}
          </ul>
        </FullDiv>
      </div>
    </Layout>
  )
}
