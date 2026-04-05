localStorage.setItem("username","Priyanshu")
localStorage.setItem("city","Varanasi")

const profile = {age: 20, goal: "fullstack developer"}
localStorage.setItem("profile",JSON.stringify(profile))

const username = localStorage.getItem("username")
console.log(username)

const city = localStorage.getItem("city")
console.log(city)

const getStrObj = localStorage.getItem("profile")
const getParObj = JSON.parse(getStrObj)
console.log(getParObj.goal)

localStorage.removeItem("city")
console.log(localStorage.getItem("city"))