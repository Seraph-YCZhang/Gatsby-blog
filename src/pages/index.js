import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

const containerStyle = {
  height: "100%",
  width: "100%",
  minWidth:'100vw',
  minHeight:'100vh',
  background: "#252934",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const titleStyle = {
  color: "#fff",
  maxWidth: '90%'
}
const Home = () => {
  return (
    <Layout>
      <Head title='Home'/>
      <div style={containerStyle}>
        <h1 style={titleStyle}>
          Hi, here is Yuchen. <br/>
          A software engineer specialized in both front-end
          and back-end.{" "}
        </h1>
      </div>
    </Layout>
  )
}

export default Home
