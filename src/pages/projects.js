import React, { useRef } from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import { useScrollTo } from "../hooks/useScrollTo"
import styles from "./projects.module.scss"
const projects = [
  {
    title: "E-Commerce Website",
    description: "React/ Redux/ Firebase",
    bg: "https://i.ibb.co/qrZMKGj/crwn.png",
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
    bg: "https://i.ibb.co/5LwNRzb/invub.png",
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
            <div className={styles.projectContainer} key={idx}>
              <div className={styles.show}>
                <div>{proj.title}</div>
                <div>{proj.description}</div>
              </div>
              <div
                className={styles.bg}
                style={{ backgroundImage: `url('${proj.bg}')` }}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
