import { useState } from "react"
function Toggle() {
  const [text, setText] = useState("Light Mode")
  function handleToggle() {
    setText(text === "Light Mode" ? "Dark Mode" : "Light Mode")
  }
  return (
    <div>
      <p>Toggle Theme: {text}</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}
export default Toggle