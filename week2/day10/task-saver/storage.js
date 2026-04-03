export function getTasks() {
  const tasks = localStorage.getItem("tasks")
  if (tasks === null) {
    return []
  } else {
    return JSON.parse(tasks)
  }
}

export function saveTasks(tasks) {
  localStorage.setItem("tasks",JSON.stringify(tasks))
}