import { useNavigate } from "react-router-dom"
import { useState } from "react"
export default function Home() {
  const [text, setText] = useState("")
  const navigate = useNavigate()
  function handleChange(event) {
    setText(event.target.value)
  }
  function handleClick() {
    if (text === "") return
    navigate(`/user/${text}`)
  }
  return (
    <>
      <h1>Welcome to Home</h1>
      <input value={text} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Go to user page</button>
    </>
  )
}