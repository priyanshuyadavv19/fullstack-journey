import { useLocalStorage } from "../hooks/useLocalStorage"
export default function NameSaver() {
  const [name, setName] = useLocalStorage("username", "")
  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <>
      <input type="text" value={name} onChange={handleChange}/>
      <div>{name ? `Hello ${name}` : "Please enter your name"}</div>
    </>
  )
}