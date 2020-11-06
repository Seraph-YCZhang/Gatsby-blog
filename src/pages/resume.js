import React from "react"
import Layout from "../components/layout"
import resume from "./resume.jpg"
import Head from '../components/head'
const Resume = () => {
  return (
    <Layout>
    <Head title="Resume" />
      <div style={{ width: "100%", minHeight: "100vh", background: "#252934", padding:'3rem 0' }}>
        <div
          style={{
            backgroundImage: `url(${resume})`,
            height: "100%",
            minHeight: '100vh',
            width: "auto",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
    </Layout>
  )
}

export default Resume
