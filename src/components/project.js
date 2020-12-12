import React from "react"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai"
import FadeInSection from "./fadeInSection"
import styles from "./project.module.scss"

const Project = ({ proj }) => {
  return (
    <>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url('${proj.bg}')` }}
      />

      <section className={styles.show}>
        <FadeInSection>
          <p className={styles.title}>
            {proj.github ? (
              <AiFillGithub onClick={() => window.open(proj.github)} />
            ) : null}
            {proj.link ? (
              <AiOutlineLink onClick={() => window.open(proj.link)} />
            ) : null}
            {proj.title}
          </p>
          <div>{proj.description}</div>
        </FadeInSection>
      </section>
    </>
  )
}

export default Project
