import { getTasks, saveTasks } from "./storage.js"

function renderTasks() {
    const allTasks = getTasks()
    const taskList = document.querySelector("#task-list")
    taskList.innerHTML = ""
    allTasks.forEach((task) => {
      const li = document.createElement("li")
      li.textContent = task.text
      const deleteBtn = document.createElement("button")
      deleteBtn.textContent = "Delete"
      deleteBtn.dataset.id = task.id
      li.appendChild(deleteBtn)
      taskList.appendChild(li)
    })
}

function addTask() {
    const inputElement = document.querySelector("#task-input")
    const inputValue = inputElement.value.trim()
    if (inputValue === "") {return}
    const newTask = {id: Date.now(), text: inputValue}
    const allTasks = getTasks()
    allTasks.push(newTask)
    saveTasks(allTasks)
    inputElement.value = ""
    renderTasks()
}

function deleteTask(id) {
    const allTasks = getTasks()
    const filTask = allTasks.filter((task) => task.id !== Number(id))
    saveTasks(filTask)
    renderTasks()
}

const addBtn = document.querySelector("#add-btn")
addBtn.addEventListener("click", (e) => addTask())

const taskList = document.querySelector("#task-list")
taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        deleteTask(e.target.dataset.id)
    }
})

renderTasks()