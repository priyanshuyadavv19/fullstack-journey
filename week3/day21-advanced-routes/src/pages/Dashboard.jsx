import { Link, Outlet, useNavigate } from "react-router-dom"
export default function Dashboard() {
  const navigate = useNavigate()
  function handleClick() {
    localStorage.removeItem("isLoggedIn")
    navigate("/login")
  }
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/settings">Settings</Link>
      <Outlet/>
      <button onClick={handleClick}>Logout</button>
    </>
  )
}