const express = require("express")
const app = express()
const logger = (req, res, next) => {
  console.log(req.method, req.path, new Date().toISOString())
  next()
}
app.use(logger)
app.use(express.json())
app.post("/echo", (req, res) => {
  res.json({youSent: req.body})
})
app.listen(3000, () => {
  console.log("Server running on port 3000")
})