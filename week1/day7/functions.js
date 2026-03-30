const greetUser = (userName) => {
  console.log(`Hello ${userName}!`)
}

const isEven = (n) => {
  if (n%2 ===0) {
    return true
  } else {
    return false
  }
}

const calculateGrade = (marks) => {
  if (marks > 90 && marks <= 100) {
    return "Grade: A"
  } else if (marks > 70 && marks <= 90) {
      return "Grade: B"
  } else if (marks > 50 && marks <= 70) {
      return "Grade: C"
  } else if (marks <= 50) {
      return "Fail"
  } else {
      return "Invalid marks"
  }
}

greetUser("Priyanshu")
console.log(isEven(34))
console.log(calculateGrade(93))