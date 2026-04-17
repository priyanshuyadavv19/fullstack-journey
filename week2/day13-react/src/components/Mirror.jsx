import { useState } from "react"
function Mirror() {
  const [text, setText] = useState("")
  function handleChange(event) {
    setText(event.target.value)
  }
  return (
    <div>
      <input onChange={handleChange} />
      <p>{text === "" ? "Start typing....." : text}</p>
    </div>
  )
}
export default Mirror