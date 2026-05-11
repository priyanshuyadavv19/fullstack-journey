import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import MainLayout from "./layouts/MainLayout"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element={<Settings/>}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}