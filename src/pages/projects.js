import React, { useRef } from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Project from "../components/project"
import { useScrollTo } from "../hooks/useScrollTo"
import styles from "./projects.module.scss"
import crwn from "../../static/crwn.png"
import inv from "../../static/invub.png"
const projects = [
  {
    title: "E-Commerce Website",
    description: "React/ Redux/ Firebase",
    bg: crwn,
  },
  {
    title: "Wechat Crawler",
    description: "Python/ MySQL",
    bg: "https://smartproxy.com/wp-content/uploads/2020/06/Scraping-FAQ.svg",
  },
  {
    title: "Advertisement System",
    description: "Java/ SpringCloud/ MySQL",
    bg:
      "https://thehimalayantimes.com/wp-content/uploads/2015/07/httpaimsportal.com_.jpg",
  },
  {
    title: "Invenst Club Website",
    description: "Javascript/ PHP/ MySQL",
    bg: inv,
  },
]
const Projects = () => {
  const myRef = useRef(null)
  useScrollTo(myRef)
  return (
    <Layout>
      <Head title="Projects" />
      <div className={styles.container} ref={myRef}>
        <div className={styles.innerContainer}>
          {projects.map((proj, idx) => (
            <Project proj={proj} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
