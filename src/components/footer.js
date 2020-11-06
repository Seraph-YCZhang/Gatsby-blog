import React from "react"
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import styles from "./footer.module.scss"
const Footer = () => {
  return (
    <div className={styles.container}>
      Get in touch
      <AiOutlineMail
        className={styles.icon}
        onClick={() => window.open("mailto:zyc199685@gmail.com")}
      />
      <AiFillGithub
        className={styles.icon}
        onClick={() => window.open("https://github.com/Seraph-YCZhang")}
      />
      <AiFillLinkedin
        className={styles.icon}
        onClick={() =>
          window.open("https://www.linkedin.com/in/yuchen-zhang-buffalo/")
        }
      />
    </div>
  )
}

export default Footer
