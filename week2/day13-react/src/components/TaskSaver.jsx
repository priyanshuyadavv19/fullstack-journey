import { useState,useEffect } from "react"
function TaskSaver() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = localStorage.getItem("tasks")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setTasks(getTasks ? JSON.parse(getTasks) : [])
  },[])
  useEffect(() => {
    if (tasks.length === 0) return
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  function handleChange(event) {
    setText(event.target.value)
  }
  function handleClick() {
    setTasks([...tasks,text])
    setText("")
  }
  return (
    <div>
      <input value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {tasks.map((task,index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}
export default TaskSaver