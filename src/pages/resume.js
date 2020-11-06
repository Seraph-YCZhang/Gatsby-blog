import React from "react"
import Layout from "../components/layout"
import resume from "../../public/static/resume.jpg"
import Head from '../components/head'
const Resume = () => {
  return (
    <Layout>
    <Head title="Resume" />
      <div style={{ width: "100%", minHeight: "100vh" }}>
        <div
          style={{
            backgroundImage: `url(${resume})`,
            margin: "2rem auto",
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
