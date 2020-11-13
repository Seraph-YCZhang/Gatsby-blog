import { navigate } from "gatsby"
import React, { useRef } from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import { useScrollTo } from "../hooks/useScrollTo"

const containerStyle = {
  height: "100%",
  width: "100%",
  minWidth: "100vw",
  minHeight: "100vh",
  background: "#252934",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
}
const innerStyle = {
  maxWidth: "90%",
  margin: "auto",
}
const titleStyle = {
  maxWidth: "100%",
}
const btnStyle = {
  display: "block",
  textDecoration: "none",
  color: "#fff",
  outline:'none',
  cursor:'pointer',
  padding: "1rem 2rem",
  backgroundColor: "#252934",
  // border:'1px double #fff' 
  borderStyle:'double'
}

const Home = () => {
  const myRef = useRef(null)
  useScrollTo(myRef)
  return (
    <Layout>
      <Head title="Home" />
      <div style={containerStyle} ref={myRef}>
        <div style={innerStyle}>
          <h1 style={titleStyle}>
            Hi, here is Yuchen. <br />A software engineer can work in both
            front-end and back-end.{" "}
          </h1>
          <button style={btnStyle} onClick={()=>navigate(`/about-me`)}>Know More</button>
        </div>
      </div>
    </Layout>
  )
}

export default Home
