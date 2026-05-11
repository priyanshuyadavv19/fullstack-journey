export default function Login() {
  function handleClick() {
    localStorage.setItem("isLoggedIn","true")
  }
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </>
  )
}