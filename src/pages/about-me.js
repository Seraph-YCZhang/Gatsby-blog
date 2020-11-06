import React from "react"
import Layout from "../components/layout"
import styles from "./about-me.module.scss"
import { FaReact, FaNodeJs } from "react-icons/fa"
import Head from "../components/head"
const AboutMe = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={styles.container}>
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
