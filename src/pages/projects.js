import React, { useRef } from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Project from "../components/project"
import { useScrollTo } from "../hooks/useScrollTo"
import styles from "./projects.module.scss"
import crwn from "../../static/crwn.png"
import inv from "../../static/invub.png"
import postit from "../../static/postit.png"
import git from "../../static/git.png"
const projects = [
  {
    title: "Postit Forum",
    description: "Typescript/ Next.js/ GraphQL/ Express.js/ PostgreSQL",
    bg: postit,
    github: "https://github.com/Seraph-YCZhang/typescript-reddit-web",
  },
  {
    title: "Git commits visualization",
    description: "Golang",
    bg: git,
    github: "https://github.com/Seraph-YCZhang/git-stats",
  },
  {
    title: "Wechat Crawler",
    description: "Python/ MySQL",
    bg: "https://smartproxy.com/wp-content/uploads/2020/06/Scraping-FAQ.svg",
    github: "https://github.com/Seraph-YCZhang/WeixinCrawler",
  },
  {
    title: "E-Commerce Website",
    description: "React/ Redux/ Firebase",
    bg: crwn,
    github: "https://github.com/Seraph-YCZhang/e-commerce-react",
    link: "https://crwn-cloting-live.herokuapp.com/",
  },
  {
    title: "Advertisement System",
    description: "Java/ SpringCloud/ MySQL",
    bg:
      "https://thehimalayantimes.com/wp-content/uploads/2015/07/httpaimsportal.com_.jpg",
    github: "https://github.com/Seraph-YCZhang/AdSystem-SpringCloud",
  },
  {
    title: "Invenst Club Website",
    description: "Javascript/ PHP/ MySQL",
    bg: inv,
    link: "https://invenst.cse.buffalo.edu/index.php",
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
