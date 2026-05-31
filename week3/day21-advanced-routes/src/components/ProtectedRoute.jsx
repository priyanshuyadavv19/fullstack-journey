import { Navigate, Outlet, useLocation } from "react-router-dom"
export default function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const location = useLocation()
  if (isLoggedIn === "true") {
    return <Outlet/>
  } else {
    return <Navigate to="/login" state={{from: location.pathname}}/>
  }
}