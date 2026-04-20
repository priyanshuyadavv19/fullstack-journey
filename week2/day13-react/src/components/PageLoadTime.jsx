function PageLoadTime() {
  const time = new Date().toLocaleTimeString()
  return (
    <div>
      <p>Welcome! Page loaded at {time}</p>
    </div>
  )
}
export default PageLoadTime