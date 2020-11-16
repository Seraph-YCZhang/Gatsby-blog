import React from "react"
import "./fade.css"
const FadeInSection = props => {
  const [isVisible, setVisible] = React.useState(true)
  const domRef = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => {
      observer.unobserve(domRef.current)
      domRef.current = null
    }
  }, [])
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}
export default FadeInSection
