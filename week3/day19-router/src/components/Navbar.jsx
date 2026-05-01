import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/user/priyanshu">User1</Link>
      <Link to="/user/john">User2</Link>
    </>
  )
}