import { Navigate, Outlet } from "react-router-dom"
export default function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  if (isLoggedIn === "true") {
    return <Outlet/>
  } else {
    return <Navigate to="/login"/>
  }
}