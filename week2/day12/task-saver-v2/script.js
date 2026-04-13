const taskInput = document.getElementById("task-input")
const addBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById("task-list")
const tasks = JSON.parse(localStorage.getItem("tasks")) || []
renderTasks()
function renderTasks() {
  taskList.textContent = ""
  tasks.forEach((item,index) => {
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    li.textContent = item
    delBtn.textContent = "Delete"
    li.appendChild(delBtn)
    taskList.appendChild(li)
    delBtn.addEventListener("click", () => {
      tasks.splice(index,1)
      saveTasks()
      renderTasks()
    })
  })
}
function saveTasks() {
  try {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  } catch(error) {
      console.error(error)
  }
}
addBtn.addEventListener("click", () => {
  const inputValue = taskInput.value
  if (inputValue === "") return
  tasks.push(inputValue)
  saveTasks()
  renderTasks()
})
