const express = require("express")
const app = express()
app.use(express.json())
const tasks = [
  {id: crypto.randomUUID(), title: "Learn JavaScript", completed: true},
  {id: crypto.randomUUID(), title: "Learn React.js", completed: true},
  {id: crypto.randomUUID(), title: "Learn Express.js", completed: false},
]
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks)
})
app.get("/tasks/:id", (req, res) => {
  const requiredTask = tasks.find(item => item.id === req.params.id)
  if (requiredTask) {
    res.status(200).json(requiredTask)
  } else {
    res.status(404).send("Data not found!")
  }
})
app.post("/tasks", (req, res) => {
  const newTask = {id: crypto.randomUUID(), title: req.body.title, completed: false}
  tasks.push(newTask)
  res.status(201).json(newTask)
})
app.put("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex(item => item.id === req.params.id)
  if (taskIndex !== -1) {
    tasks[taskIndex].title = req.body.title || tasks[taskIndex].title
    if (req.body.completed !== undefined) {
      tasks[taskIndex].completed = req.body.completed
    }
    res.status(200).send("Data updated successfully!")
  } else {
    res.status(404).send("id not found!")
  }
})
app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex(item => item.id === req.params.id)
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1)
    res.status(204).send()
  } else {
    res.status(404).send("Data doesn't exist!")
  }
})
app.use((req, res) => {
  res.status(404).json({error: "This path doesn't exist."})
})
app.use((err, req, res, next) => {
  console.error(err)
  const errorStatus = err.status || 500
  res.status(errorStatus)
  if (errorStatus >= 400 && errorStatus < 500) {
    res.json({error: err.message})
  } else {
    res.json({error: "Internal Server Error."})
  }
})
app.listen(3000, () => {
  console.log("Server is running on the port 3000")
})