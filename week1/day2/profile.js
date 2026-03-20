// My Developer Profile
// Day 2 — Full Stack Journey

let profile = {
  name: "Priyanshu",
  city: "Varanasi",
  goal: "Full Stack Developer",
  dayOfJourney: 2,
  todayILearned: [
    "How to install software using apt",
    "What a process is",
    "How to use VS Code",
    "How to run JavaScript with Node.js"
  ]
}

console.log("===== MY DEVELOPER PROFILE =====")
console.log("Name: " + profile.name)
console.log("City: " + profile.city)
console.log("Goal: " + profile.goal)
console.log("Day: " + profile.dayOfJourney)
console.log("")
console.log("Today I learned:")

for (let i = 0; i < profile.todayILearned.length; i++) {
  console.log("  " + (i + 1) + ". " + profile.todayILearned[i])
}

console.log("=================================")