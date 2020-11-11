import { useEffect } from "react"

export const useScrollTo = ref => {
  useEffect(() => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: "smooth",
      })
    }
  }, [ref])
}
