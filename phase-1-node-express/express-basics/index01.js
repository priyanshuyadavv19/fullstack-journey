const express = require("express")
const app = express()
app.get("/", (req, res) => {
  res.send("Home Page")
})
app.get("/about", (req, res) => {
  res.json({"page" : "about", "status" : "ok"})
})
// route params 
app.get("/users/:id", (req, res) => {
  const userId = req.params.id
  res.json({"userId" : `${userId}`})
})
// query params
app.get("/search", (req, res) => {
  const queCat = req.query.category
  const queAva = req.query.available
  res.json({"searchCategory" : `${queCat}`, "searchAvailable" : `${queAva}`})
  console.log(req.query.category)
})
app.listen(3000, () => {
  console.log("Server running on port 3000")
})