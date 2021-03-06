import React, { useRef } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { useScrollTo } from "../hooks/useScrollTo"
import { Document, Page, pdfjs } from "react-pdf"
import styles from "./resume.module.scss"
import resume from "../../static/resumepdf.pdf"
import { FiFile } from "react-icons/fi"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
const Resume = () => {
  const myRef = useRef(null)
  useScrollTo(myRef)
  return (
    <Layout>
      <Head title="Resume" />
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#252934",
          padding: "3rem 0",
          overflow: "hidden",
        }}
      >
        {/* <div
          ref={myRef}
          style={{
            backgroundImage: `url(${resume})`,
            height: "100%",
            minHeight: "100vh",
            width: "auto",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        /> */}
        <div>
          <Document
            file={resume}
            onLoadError={console.error}
            className={styles.document}
          >
            <Page pageNumber={1} />
          </Document>
          <button
            style={{
              display: "block",
              margin: "0 auto",
              fontSize: "1.5rem",
              cursor: "pointer",
              borderRadius: "0.5rem",
            }}
            onClick={() => window.open(resume)}
          >
            <p style={{ display: "flex", alignItems: "center" }}>
              <FiFile style={{ marginRight: "1rem" }} /> Open File
            </p>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Resume
