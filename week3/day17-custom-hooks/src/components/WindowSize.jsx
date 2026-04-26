import { useWindowWidth } from "../hooks/useWindowWidth"
export default function WindowSize() {
  const currentWidth = useWindowWidth()
  function userView(width) {
    if (width< 768) {
      return "Mobile View"
    } else {
      return "Desktop View"
    }
  }
  return (
    <>
      <p>{currentWidth}</p>
      <p>{userView(currentWidth)}</p>
    </>
  )
}