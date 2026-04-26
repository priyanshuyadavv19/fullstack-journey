import { useToggle } from "../hooks/useToggle"
export default function DarkModeToggle() {
  const [isDark, toggle] = useToggle(false)
  return (
    <div style={{
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? "white" : "black"
    }}>Priyanshu
      <button onClick={toggle}>
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  )
}