import { navigate } from "gatsby"
import React, { useRef } from "react"
import { FiArrowRight } from "react-icons/fi"
import Particles from "react-tsparticles"
import Head from "../components/head"
import Layout from "../components/layout"
import { useScrollTo } from "../hooks/useScrollTo"

const containerStyle = {
  height: "100%",
  width: "100%",
  position: "relative",
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
  zIndex: "1",
  backgroundColor: "rgb(37, 41, 52)",
  padding: "2em 3em",
}
const titleStyle = {
  maxWidth: "100%",
  lineHeight: "3.5rem",
}
const btnStyle = {
  display: "flex",
  textDecoration: "none",
  position: "relative",
  color: "#fff",
  outline: "none",
  cursor: "pointer",
  padding: "1rem 2rem",
  backgroundColor: "#252934",
  alignItems: "center",
  // border:'1px double #fff'
  borderStyle: "double",
}

const Home = () => {
  const myRef = useRef(null)
  useScrollTo(myRef)
  return (
    <Layout>
      <Head title="Home" />
      <div style={containerStyle} ref={myRef}>
        <Particles
          id="tsparticles"
          style={{
            position: "absolute",
            left: "0",
            top: "0",
          }}
          options={{
            background: {
              color: {
                value: "rgb(37, 41, 52)",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 20,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#f3f3f3",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <div style={innerStyle}>
          <h1 style={titleStyle}>
            Hi, I am Yuchen.
            <br />A full-stack engineer. <br />
            Love building things.
          </h1>
          <button style={btnStyle} onClick={() => navigate(`/about-me`)}>
            Know More
            <FiArrowRight
              size="2em"
              style={{
                position: "absolute",
                right: "-25%",
              }}
            />
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Home
