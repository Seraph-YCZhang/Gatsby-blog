import React from "react"
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
          <p>{proj.title}</p>
          <div>{proj.description}</div>
        </FadeInSection>
      </section>
    </>
  )
}

export default Project
