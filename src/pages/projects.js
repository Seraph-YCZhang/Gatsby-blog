import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import styles from "./projects.module.scss"
const projects = [
  {
    title: "E-Commerce Website",
    description: "React/ Redux/ Firebase",
  },
  {
    title: "Wechat Crawler",
    description: "Python",
  },
  {
    title: "Advetisement System",
    description: "Java/ SpringCloud",
  },
  {
    title: "Invenst Club Website",
    description: "Javascript/ PHP",
  },
]
const Projects = () => {
  return (
    <Layout>
    <Head title="Projects" />
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {projects.map((proj, idx) => (
            <div className={styles.projectContainer} key={idx}>
              <div></div>
              <div className={styles.animateDown}>{proj.title}</div>
              <div className={styles.animateUp}>{proj.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
