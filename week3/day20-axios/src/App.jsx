import { useState, useEffect } from "react"
import instance from "./api/axiosInstance"
export default function App() {
  const [users, setUser] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/users")
        setUser(response.data)
        setLoading(false)
      } catch(err) {
          setError(err)
          setLoading(false)
      }
    }
    fetchData()
  },[])
  function handleClick() {
    const sendData = async () => {
      try {
        const response = await instance.post("/users",{ name: "Priyanshu", email: "priyanshu@example.com" })
        console.log(response.data)
        alert("User Created!")
      } catch(err) {
        console.error(err.message)
      }
    }
    sendData() 
  }
  function handleHeader() {
    const setHeader = async () => {
      try {
        instance.defaults.headers.common["Authorization"] = "Bearer faketoken123"
        const response = await instance.get("/users/1")
        console.log(response.data)
        console.log(instance.defaults.headers.common)
      } catch(err) {
        console.error(err.message)
      }
    }
    setHeader()
  }
  if (error !== null) {
    return <p>Error message: {error.message}</p>
  }
  if (isLoading) return <p>Loading....</p>
  return (
    <>
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
      <button onClick={handleClick}>Create User</button>
      <button onClick={handleHeader}>Get Protected Data</button>
    </>
  )  
}