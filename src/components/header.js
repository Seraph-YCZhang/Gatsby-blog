import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import style from "./header.module.scss"
import logo from "../../static/favicon.ico"
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
      <div style={{ display: "flex", alignItems: "center", marginLeft:'2rem' }}>
        <img src={logo} className={style.logo} alt="YC" />
        <Link className={`${style["mainTitle"]}`} to="/">
          {data.site.siteMetadata.author}
        </Link>
      </div>
      <ul className={style["navBar"]}>
        <li>
          <Link
            className={style.navItem}
            activeClassName={style.activeNavItem}
            to="/about-me"
          >
            About Me
          </Link>
        </li>
        {/* <li>
          <Link
            className={style.navItem}
            activeClassName={style.activeNavItem}
            to="/blog"
          >
            Blog
          </Link>
        </li> */}
        <li>
          <Link
            className={style.navItem}
            activeClassName={style.activeNavItem}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={style.navItem}
            activeClassName={style.activeNavItem}
            to="/resume"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
