let marks = 82
marks = 53
marks = 23
marks = -2
marks = 101
if (marks > 90 && marks <= 100) {
  console.log("Grade: A")
} else if (marks > 70 && marks <= 90) {
    console.log("Grade: B")
} else if (marks > 50 && marks <= 70) {
    console.log("Grade: C")
} else if (marks <= 50) {
    console.log("Fail")
} else {
    console.log("Invalid marks")
}

const isLoggedIn = true
const loginMessage = isLoggedIn ? "Welcome back" : "Please Login"
console.log(loginMessage)