import React, { useRef } from "react"
import Layout from "../components/layout"
import styles from "./about-me.module.scss"
import { FaReact, FaNodeJs } from "react-icons/fa"
import Head from "../components/head"
import { useScrollTo } from "../hooks/useScrollTo"
const AboutMe = () => {
  const myRef = useRef(null)
  useScrollTo(myRef)
  return (
    <Layout>
      <Head title="About" />
      <div className={styles.container} ref={myRef}>
        <h1>About Me</h1>
        <h2>Hi there! Currently I am working as a full stack engineer!</h2>
        <h3>
          The tech stack I am using is React.js <FaReact /> and Node.js
          <FaNodeJs />
        </h3>
      </div>
    </Layout>
  )
}

export default AboutMe
