import React, { useRef } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { useScrollTo } from "../hooks/useScrollTo"
import { Document, Page, pdfjs } from "react-pdf";
import styles from './resume.module.scss'
import resume from '../../static/resumepdf.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
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
        <Document file={resume} onLoadError={console.error} className={styles.document}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </Layout>
  )
}

export default Resume
