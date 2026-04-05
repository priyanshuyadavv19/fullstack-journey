// const chiBtn = document.querySelector(".child")
// chiBtn.addEventListener("click",(e) => {
//   e.stopPropagation()
//   console.log(e)
// })

// const parDiv = document.querySelector(".parent")
// parDiv.addEventListener("click",(e) => {
//   console.log(e)
// })

const form = document.getElementById("reg-form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let valid = true

  const userName = document.getElementById("name").value
  const nameError = document.getElementById("name-error")
  if (userName === "" || userName.length < 3) {
    nameError.textContent = "Invalid Name"
    valid = false
  } else {
    nameError.textContent = ""
  }

  const userEmail = document.getElementById("email").value
  const emailError = document.getElementById("email-error")
  if (userEmail === "" || userEmail.includes("@") === false) {
    emailError.textContent = "Invalid Email"
    valid = false
  } else {
    emailError.textContent = ""
  }

  const userPass = document.getElementById("password").value
  const passError = document.getElementById("password-error")
  if (userPass === "" || userPass.length < 6) {
    passError.textContent = "Invalid Password"
    valid = false
  } else {
    passError.textContent = ""
  }

  const succMess = document.getElementById("success-message")
  if (valid === true) {
    succMess.textContent = "You have succesfully filled the form!"
  } else {
    succMess.textContent = ""
  }
})

const result = document.querySelector(".result")
const err = document.querySelector(".error")
const loading = document.querySelector(".loading")

async function loadData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    if (response.ok) {
      const data = await response.json()
      result.textContent = data.name
    } else {
      throw new Error(`Server error: ${response.status}`)
    }
  } catch(error) {
    err.textContent = error.message
  } finally {
    loading.textContent = ""
  }
}
loadData()

// async function loadData() {
//   setTimeout(async () => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//       if (response.ok) {
//         const data = await response.json()
//         result.textContent = data.name
//       } else {
//         throw new Error(`Server error: ${response.status}`)
//       }
//     } catch(error) {
//         err.textContent = error.message
//     } finally {
//         loading.textContent = ""
//     }
//   },2000)
// }
// loadData()

