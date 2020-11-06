import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
const NotFound = () => {
  return (
    <Layout>
    <Head title="404" />
      <div style={{padding:'2rem 3rem 0 3rem'}}>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
      </div>
    </Layout>
  )
}

export default NotFound
