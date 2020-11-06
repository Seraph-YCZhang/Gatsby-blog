import { Link, graphql,  useStaticQuery } from "gatsby"
import React from "react"
import style from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <nav className={style.header}>
      <Link className={`${style['mainTitle']}`} to="/">{data.site.siteMetadata.author}</Link>
      <ul className={style['navBar']}>
        <li>
          <Link className={style.navItem} activeClassName={style.activeNavItem} to="/about-me">About Me</Link>
        </li>
        <li>
          <Link className={style.navItem} activeClassName={style.activeNavItem} to="/blog">Blog</Link>
        </li>
        <li>
          <Link className={style.navItem} activeClassName={style.activeNavItem} to="/projects">Projects</Link>
        </li>
        <li>
          <Link className={style.navItem} activeClassName={style.activeNavItem} to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
