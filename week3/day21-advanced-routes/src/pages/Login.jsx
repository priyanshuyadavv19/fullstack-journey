import { useLocation, useNavigate, Navigate } from "react-router-dom"
export default function Login() {
  const location = useLocation()
  const navigate = useNavigate()
  function handleClick() {
    localStorage.setItem("isLoggedIn","true")
    navigate(location.state?.from || "/dashboard")
  }
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  if (isLoggedIn === "true") {
    return <Navigate to="/dashboard" />
  }
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </>
  )
}