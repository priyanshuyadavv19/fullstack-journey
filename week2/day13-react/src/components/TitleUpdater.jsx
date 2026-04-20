import { useState, useEffect } from "react"
function TitleUpdater() {
  const [text, setText] = useState("")
  function handleChange(event) {
    setText(event.target.value)
  }
  useEffect(() => {
    document.title = text === "" ? "Hello, Guest" : `Hello, ${text}` 
  },[text])
  return (
    <div>
      <input value={text}  onChange={handleChange} />
    </div>
  )
}
export default TitleUpdater