import { useEffect,useRef } from "react"
function AutoFocusInput() {
  const inputElement = useRef(null)
  useEffect(() => {
    inputElement.current.focus()
  },[])
  return (
    <input ref={inputElement} type="text" />
  )
}
export default AutoFocusInput