const marks = [45, 78, 62, 90, 55]
const grade = marks.map((mark) => {
  if (mark >= 80) {
    return "A"
  } else if (mark >= 60) {
    return "B"
  } else if (mark < 60) {
    return "C"
  } else {
    return "Invalid marks"
  }
})
console.log(grade)

// const marks = [45, 78, 62, 90, 55]
const passingMarks = marks.filter((mark) => {
  return mark >= 60
})
const failingMarks = marks.filter((mark) => {
  return mark < 60
})
console.log(passingMarks)
console.log(failingMarks)

// const marks = [45, 78, 62, 90, 55]
const totalMarks = marks.reduce((acc,curr) => {
  return acc + curr
},0)
const avgMarks = totalMarks / marks.length
console.log(totalMarks)
console.log(avgMarks)

// const marks = [45, 78, 62, 90, 55]
const gradeStr = marks.filter((mark) => {
  return mark >=60
}).map((mark) => {
  if (mark >= 80) {
    return "A"
  } else {
    return "B"
  }
}).reduce((acc,curr) => {
  return acc + ", " + curr
})
console.log(gradeStr)

const colors = ["red", "green", "blue", "yellow"]
const [color1, ,color3] = colors
console.log(color1,color3)

const student = {
  userName: "Priyanshu",
  city: "Varanasi",
  age: 20,
  course: "BSc"
}
const {userName, course} = student
console.log(userName,course)

const frontend = ["HTML", "CSS", "JavaScript"]
const backend = ["Node.js", "Express", "MongoDB"]
const fullStack = [...frontend, ...backend]
console.log(fullStack)

const user = { name: "Priyanshu", city: "Varanasi", role: "student" }
const updatedUser = {...user, role:"developer"}
console.log(updatedUser)

